import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CategoryBox from './components/CategoryBox';
import UploadPhoto from './components/UploadPhoto';
import { Link, useHistory } from 'react-router-dom';

function Writing() {
  const [isDroped, setIsDroped] = useState('');
  const [isChanged, setIsChanged] = useState([]);
  const [imgFile, setImgFile] = useState('');
  const [previewUrl, setPreviewUrl] = useState('');
  const [colorPick, setColorPick] = useState({
    back_color: '',
    item_color: '',
  });
  const [selectInput, setSelectInput] = useState({
    size: '평수',
    type: '주거형태',
    style: '스타일',
    roomType: '공간',
    back_color: '배경',
    item_color: '소품',
    textData: '',
  });
  const history = useHistory();

  const selectForm = e => {
    setIsDroped(false);
    const { name, value, id } = e.target;
    setColorPick({ ...colorPick, [name]: id });
    setSelectInput({ ...selectInput, [name]: value });
  };

  const handleText = e => {
    const currentTextarea = {
      ...selectInput,
      textData: e.target.value,
    };
    setSelectInput(currentTextarea);
  };

  useEffect(() => {
    for (let i = 0; i < 6; i++) {
      isChanged.push(0);
    }
  }, [isChanged]);

  const handleDrop = idx => {
    setIsDroped(idx);
    isChanged[idx] = 1;
    setIsChanged(isChanged);
  };

  const deleteImg = () => {
    setImgFile('');
    setPreviewUrl('');
  };

  const showImg = e => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      setImgFile(file);
      setPreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = () => {
    const sendObject = {
      size: selectInput.size,
      housing_type: selectInput.type,
      style: selectInput.style,
      back_color: selectInput.back_color,
      item_color: selectInput.item_color,
      text: selectInput.textData,
    };

    const validate = {
      size: size => size !== '평수',
      housing_type: housing_type => housing_type !== '주거형태',
      style: style => style !== '스타일',
      back_color: back_color => back_color !== '배경',
      item_color: item_color => item_color !== '소품',
      text: textData => textData !== '',
    };

    const isAllChecked = data => {
      for (let name in data) {
        const value = data[name];
        const validateFunction = validate[name];

        let result = validateFunction(value);

        if (!result) return false;
      }

      return true;
    };

    if (isAllChecked(sendObject) && imgFile !== '') {
      const fileData = new FormData();
      fileData.append('image', imgFile);
      fileData.append('info', JSON.stringify(sendObject));
      fetch('http://10.58.7.41:8000/postings', {
        method: 'post',
        headers: {
          Authorization: localStorage.getItem('access_token'),
        },
        body: fileData,
      }).then(res => {
        if (res.status !== 201) return alert('업로드 실패!');
        alert('게시물이 업로드 되었습니다.');
        history.push('/postings');
      });
    }
  };

  return (
    <Container>
      <HeaderBox>
        <Header>
          <Link to={'/postings'}>
            <Logo alt="로고" src="/Images/오늘의집 로고.png"></Logo>
          </Link>
          <Submit onClick={handleSubmit}>올리기</Submit>
        </Header>
      </HeaderBox>
      <WritingNav>
        <PostType>
          <Photo>사진</Photo>
          <Video>
            동영상
            <div>new</div>
          </Video>
        </PostType>
      </WritingNav>
      <MainContainer>
        <Main>
          <CategoryBox
            isDroped={isDroped}
            isChanged={isChanged}
            colorPick={colorPick}
            handleDrop={handleDrop}
            selectInput={selectInput}
            selectForm={selectForm}
          />
          <UploadPhoto
            showImg={showImg}
            previewUrl={previewUrl}
            imgFile={imgFile}
            deleteImg={deleteImg}
          />
        </Main>
        <Aside>
          <CategroyName onClick={() => handleDrop(5)}>
            <Category isChanged={isChanged[5]}>{selectInput.roomType}</Category>
            <i className="fas fa-sort-down" />
          </CategroyName>
          <DropList dropDown={isDroped === 5 ? true : false}>
            {ROOM_LIST.map((room, idx) => (
              <button
                key={idx}
                name="roomType"
                value={room.name}
                onClick={selectForm}
              >
                <RoomName>{room.name}</RoomName>
              </button>
            ))}
          </DropList>
          <TextBox
            placeholder="사진에 대해 설명해주세요."
            onChange={handleText}
          ></TextBox>
        </Aside>
      </MainContainer>
    </Container>
  );
}

const Container = styled.div``;

const HeaderBox = styled.header`
  border-bottom: 1px solid #ededed;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  margin: 0 320px;
`;
const Logo = styled.img`
  height: 50px;
`;
const Submit = styled.button`
  height: 45px;
  width: 135px;
  border-radius: 4px;
  background-color: #35c5f0;
  font-weight: 700;
  font-size: 16px;
  color: #fff;
`;
const WritingNav = styled.div`
  height: 48px;
  border-bottom: 1px solid #ededed;
`;

const PostType = styled.div`
  display: flex;
  margin: 0 320px;
`;
const Photo = styled.button`
  width: 40px;
  margin-right: 40px;
  padding: 14px 0;
  font-weight: 700;
  font-size: 16px;
  color: #424242;

  &:hover {
    border-bottom: 2px solid #35c5f0;
  }
`;

const Video = styled.button`
  display: flex;
  align-items: flex-start;
  padding: 14px 0;
  font-weight: 700;
  font-size: 16px;
  color: #424242;

  &:hover {
    border-bottom: 2px solid #35c5f0;
  }

  div {
    width: 28px;
    margin-left: 4px;
    padding-bottom: 1px;
    border-radius: 3px;
    background-color: #f77;
    font-weight: 400;
    font-size: 12px;
    color: #fff;
  }
`;

const MainContainer = styled.div`
  display: flex;
  margin: 0px 320px;
`;

const Main = styled.main`
  position: relative;
  height: 800px;
  margin: 0 50px;
  padding: 40px 10px;
`;

const Aside = styled.aside`
  width: 400px;
  height: 400px;
  margin-top: 90px;
`;
const TextBox = styled.textarea`
  width: 100%;
  height: 145px;
  resize: none;
  margin-top: 20px;
  padding: 8px 15px 9px;
  border-color: #dbdbdb;
  border-radius: 4px;
  font-size: 15px;
  outline: none;
  cursor: text;

  &::placeholder {
    color: #dbdbdb;
  }

  &:focus {
    box-shadow: 1px 1px 5px 1px rgb(98, 165, 230);
  }
`;

const CategroyName = styled.button`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  width: 100%;
  height: 40px;
  border-radius: 4px;
  border: 1px solid #dbdbdb;
  background-color: #fff;
  font-size: 14px;
  color: #dbdbdb;

  &:hover {
    color: #35c5f0;

    span{
      color: #35c5f0;
    }
  }

  
  }
`;

const Category = styled.span`
  margin-right: 230px;
  color: ${props => (!props.isChanged ? '#dbdbdb' : '#424242')};
  &:hover {
    color: #35c5f0;
  }
`;

const DropList = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: inherit;

  button {
    display: ${props => (!props.dropDown ? 'none' : 'block')};
    height: 40px;
    padding-top: 8px;
    border: 1px solid #ededed;
    border-top: none;
    background-color: #fff;
    color: #424242;

    &:hover {
      background-color: #ededed;
    }
  }
`;

const RoomName = styled.span`
  margin-right: 290px;
`;

const ROOM_LIST = [
  { name: '원룸' },
  { name: '거실' },
  { name: '침실' },
  { name: '주방' },
  { name: '욕실' },
  { name: '아이방' },
  { name: '드레스룸' },
  { name: '서재&작업실' },
  { name: '베란다' },
  { name: '사무공간' },
  { name: '상업공간' },
  { name: '가구&소품' },
  { name: '현관' },
  { name: '외관&기타' },
];

export default Writing;
