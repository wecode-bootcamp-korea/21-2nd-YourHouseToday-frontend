import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import HomeHead from './Head/HomeHead';
import FilterBar from './Filter/FilterBar';
import Feeds from './Feeds';
import { API } from '../../config';
import Loading from './Loading/Loding';

function Main(props) {
  const [loading, setLoading] = useState(true);
  const [feedData, setFeedData] = useState([]);
  const [display, setDisplay] = useState('');
  const [value, setValue] = useState([0, 80]);
  const [title, setTitle] = useState('모든 평수');
  const [colorToggle, setColorToggle] = useState('');
  const [selectedList, setSelectedList] = useState([]);
  const [items, setItems] = useState(8);
  const [infinite, setInfinite] = useState(1);

  function makeQueryString(event) {
    const sumString = event.reduce((prev, curr) => prev + `&${curr.query}`, '');
    return sumString;
  }

  function handleInput(event) {
    setValue(event);
    if (event[0] === 0 && event[1] === 80) {
      setTitle('모든 평수');
    } else if (event[0] === 0) {
      setTitle(event[1] + '평 이하');
    } else if (event[1] === 80) {
      setTitle(event[0] + '평 이상');
    } else if (event[0] > 0 && event[1] < 80) {
      setTitle(event[0] + ' - ' + event[1] + '평');
    }
  }

  function addFilterInput() {
    const newFilter = [...selectedList];

    let query;
    if (value[0] === 0) {
      query = `&max-size=${value[1]}`;
    } else if (value[1] === 80) {
      query = `min-size=${value[0]}`;
    } else if (value[0] > 0 && value[1] < 80) {
      query = `min-size=${value[0]}&max-size=${value[1]}`;
    }

    const sizeFilter = {
      tapId: 4,
      name: title,
      query: query,
    };

    let index = -1;
    for (let i = 0; i < newFilter.length; i++) {
      if (sizeFilter.tapId === newFilter[i].tapId) {
        index = i;
        break;
      }
    }
    if (index !== -1) newFilter.splice(index, 1);
    setSelectedList(newFilter.concat(sizeFilter));
  }

  function toggleButton(index, event) {
    let newValue = [...value];
    setValue([
      (newValue[0] = index * 10 + 1),
      (newValue[1] = (index + 1) * 10),
    ]);
    setTitle([newValue[0] + ' - ' + newValue[1]] + '평');
    addFilter(event);
  }

  function handleReset() {
    setValue([0, 80]);
    setTitle('모든 평수');
  }

  function handleColorToggle(index) {
    if (colorToggle === index) {
      setColorToggle(null);
    } else setColorToggle(index);
  }

  function addFilter(event) {
    const newFilter = [...selectedList];
    let index = -1;
    for (let i = 0; i < newFilter.length; i++) {
      if (newFilter[i].tapId === event.tapId) {
        index = i;
        break;
      }
    }
    if (index !== -1) newFilter.splice(index, 1);
    setSelectedList(newFilter.concat(event));
  }

  useEffect(() => {
    const query = makeQueryString([...selectedList]);

    fetch(`${API}/postings?offset=${infinite}&limit=8?${query}`)
      .then(response => response.json())
      .then(data => {
        setFeedData(data.result);
      });
    props.history.push(`/postings?${query}`);
  }, [selectedList]);

  function deleteFilter(tapId) {
    setSelectedList(selectedList.filter(user => user.tapId !== tapId));
  }

  function clearFilter() {
    setSelectedList([]);
  }

  useEffect(() => {
    fetch(`${API}/postings?offset=${infinite}&limit=8`)
      // fetch('Data/Main/main.json')
      .then(response => response.json())
      .then(res => {
        console.log(res);
        const resultdata = res.result;
        setFeedData([...feedData, ...resultdata]);
        setLoading(false);
      });
    window.addEventListener('scroll', () => infiniteScroll());
    props.history.push(`/postings?offset=${infinite}&limit=8`);
    return () => {
      window.removeEventListener('scroll', () => infiniteScroll());
    };
  }, [items]);

  function infiniteScroll() {
    const { documentElement, body } = document;

    const scrollHeight = Math.max(
      documentElement.scrollHeight,
      body.scrollHeight
    );
    const scrollTop = Math.max(documentElement.scrollTop, body.scrollTop);
    const clientHeight = documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
      setItems(items + 8);
      setInfinite(infinite + 1);
    }
  }

  if (loading) return <Loading />;
  return (
    <>
      <HomeHead />
      <FilterBar
        setDisplay={setDisplay}
        display={display}
        addFilter={addFilter}
        title={title}
        handleReset={handleReset}
        handleInput={handleInput}
        addFilterInput={addFilterInput}
        value={value}
        toggleButton={toggleButton}
        handleColorToggle={handleColorToggle}
        colorToggle={colorToggle}
        selectedList={selectedList}
        deleteFilter={deleteFilter}
        clearFilter={clearFilter}
      />
      <CardWrap>
        {feedData.length === 0 ? (
          <Empty>
            <Img />
            앗! 찾으시는 결과가 없네요~~~
          </Empty>
        ) : (
          feedData.map((el, index) => {
            return <Feeds key={index} data={el} />;
          })
        )}
      </CardWrap>
    </>
  );
}

export default withRouter(Main);

const CardWrap = styled.div`
  display: flex;
  position: relative;
  margin-right: auto;
  margin-left: auto;
  width: 1136px;
  margin-top: 30px;
  padding-top: 0px;
  max-width: 100%;
  min-height: 1px;
  transform: translateY(0px);
  flex: 0 0 auto;
  flex-wrap: wrap;
`;

const Empty = styled.div`
  margin: 0 auto;
  padding: 190px 0;
  color: #424242;
  text-align: center;
  font-size: 17px;
`;

const Img = styled.img`
  width: 100px;
`;
