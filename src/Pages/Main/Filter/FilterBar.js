import React from 'react';
import { Range } from 'rc-slider';
import styled from 'styled-components';
import Badge from './Badge';
import FilterListData from './FilterListData';
import '../../../Styles/index.css';

function FilterBar(props) {
  const {
    setDisplay,
    display,
    addFilter,
    handleReset,
    title,
    handleInput,
    addFilterInput,
    value,
    toggleButton,
    handleColorToggle,
    colorToggle,
    selectedList,
    deleteFilter,
    clearFilter,
  } = props;
  return (
    <FilterBarContainer>
      <FilterBarUl>
        {FilterListData.slice(0, -2).map(item => {
          return (
            <FilterBarList key={item.id}>
              <FilterItem
                onMouseOver={() => setDisplay(item.id - 1)}
                onMouseOut={() => setDisplay('')}
              >
                <FilterList>
                  {item.name}
                  <Image />
                  <DropdownContainer>
                    <DropdownContent
                      block={display === item.id - 1 ? true : false}
                    >
                      <DropdownPanel>
                        <PanelList>
                          <li>
                            {FilterListData[item.id - 1].subTap.map(item => {
                              return (
                                <PanelItem
                                  key={item.id}
                                  onClick={() => addFilter(item)}
                                >
                                  <ItemHead>
                                    <span>{item.name}</span>
                                  </ItemHead>
                                </PanelItem>
                              );
                            })}
                          </li>
                        </PanelList>
                      </DropdownPanel>
                    </DropdownContent>
                  </DropdownContainer>
                </FilterList>
              </FilterItem>
            </FilterBarList>
          );
        })}
        <FilterBarList>
          <FilterItem
            onMouseOver={() => setDisplay(3)}
            onMouseOut={() => setDisplay('')}
          >
            <FilterList>
              평수
              <Image />
              <>
                <DropdownContainer>
                  <DropdownContent block={display === 3 ? true : false}>
                    <DropdownPanel>
                      <PanelRangeControl>
                        <RangeHeader>
                          <RangeTitle>{title}</RangeTitle>
                          <ResetSlide onClick={() => handleReset()}>
                            초기화
                          </ResetSlide>
                        </RangeHeader>
                        <RangeSlider>
                          <div>
                            <InputWrap>
                              <InputContent>
                                <Range
                                  min={0}
                                  max={80}
                                  onChange={event => handleInput(event)}
                                  defaultValue={[0, 80]}
                                  onAfterChange={() => addFilterInput()}
                                  value={value}
                                />
                              </InputContent>
                            </InputWrap>
                            <FooterWrap>
                              <FooterText>1평</FooterText>
                              <FooterText>70평 이상</FooterText>
                            </FooterWrap>
                          </div>
                        </RangeSlider>
                        <OptionList>
                          {FilterListData[3].subTap.map(item => {
                            return (
                              <OptionItem
                                key={item.id}
                                onClick={() => toggleButton(item.id, item)}
                              >
                                <OptionItemButton
                                  isCheck={
                                    !(value[0] === 0 && value[1] === 80) &&
                                    value[0] >= 0 &&
                                    value[0] <= (item.id + 1) * 10 &&
                                    !(value[1] <= item.id * 10)
                                      ? true
                                      : false
                                  }
                                >
                                  {item.name}
                                </OptionItemButton>
                              </OptionItem>
                            );
                          })}
                        </OptionList>
                      </PanelRangeControl>
                    </DropdownPanel>
                  </DropdownContent>
                </DropdownContainer>
              </>
            </FilterList>
          </FilterItem>
        </FilterBarList>
        <FilterBarList>
          <FilterItem
            onMouseOver={() => setDisplay(4)}
            onMouseOut={() => setDisplay('')}
          >
            <FilterList>
              컬러
              <Image />
              <DropdownContainer>
                <DropdownContent block={display === 4 ? true : false}>
                  <DropdownPanel>
                    <PanelGroupControl>
                      {FilterListData[4].subTap.map(item => {
                        return (
                          <section key={item.id}>
                            <ColorHeader>
                              <ItemTitle>{item.name}</ItemTitle>
                              <ItemToggle>
                                <ToggleIcon
                                  onClick={() => handleColorToggle(item.id)}
                                  background={
                                    colorToggle === item.id
                                      ? '#3fc5f0'
                                      : '#ededed'
                                  }
                                >
                                  <ToggleIconHandle
                                    transform={
                                      colorToggle === item.id
                                        ? 'translateX(22px)'
                                        : 0
                                    }
                                  />
                                </ToggleIcon>
                              </ItemToggle>
                            </ColorHeader>
                            <ColorContent
                              height={colorToggle === item.id ? '54px' : '0'}
                            >
                              <div className="ColorPanel">
                                <ColorList>
                                  <ItemWrap>
                                    {FilterListData[4].subTap[
                                      item.id
                                    ].tapColor.map(item => {
                                      return (
                                        <ListItem
                                          key={item.id}
                                          onClick={() => addFilter(item)}
                                        >
                                          <ColorItemHead>
                                            <ColorControl>
                                              <ColorIcon
                                                color={item.color}
                                                data-set={item.color}
                                              />
                                              {item.value}
                                            </ColorControl>
                                          </ColorItemHead>
                                        </ListItem>
                                      );
                                    })}
                                  </ItemWrap>
                                </ColorList>
                              </div>
                            </ColorContent>
                          </section>
                        );
                      })}
                    </PanelGroupControl>
                  </DropdownPanel>
                </DropdownContent>
              </DropdownContainer>
            </FilterList>
          </FilterItem>
        </FilterBarList>
      </FilterBarUl>
      <TagList>
        {selectedList.map((item, index) => {
          return (
            <Badge
              key={index}
              color={item.color}
              name={item.name}
              value={value}
              deleteFilter={deleteFilter}
              tapId={item.tapId}
              item={item}
            />
          );
        })}
        <TagListItem>
          {selectedList.length !== 0 && (
            <ListClear onClick={() => clearFilter()}>초기화</ListClear>
          )}
        </TagListItem>
      </TagList>
    </FilterBarContainer>
  );
}

export default FilterBar;

const FilterBarContainer = styled.div`
  margin: 30px auto;
  width: 1136px;
  max-width: 100%;
  min-height: 1px;
  transition: top 0.1s;
  z-index: 100;
`;

const FilterBarUl = styled.ul`
  display: flex;
`;

const FilterBarList = styled.li`
  margin: 0 3px;
  vertical-align: bottom;
  font-size: 0;
  line-height: 0;
`;

const FilterItem = styled.div`
  position: relative;
  display: inline-block;
`;

const FilterList = styled.div`
  padding: 7px 8px 6px;
  background-color: #f5f5f5;
  border-color: #f5f5f5;
  color: #757575;
  line-height: 19px;
  font-size: 15px;
  border-radius: 4px;
  cursor: pointer;
`;

const Image = styled.img.attrs({
  src: '/images/Main/arrow.png',
})`
  width: 10px;
  height: 10px;
  margin-left: 5px;
  margin-top: 5px;
  vertical-align: -1px;
`;

const DropdownContainer = styled.div`
  position: absolute;
  z-index: 1000;
  cursor: auto;
`;

const DropdownContent = styled.div`
  display: ${props => (props.block ? 'block' : 'none')};
  margin-top: 17px;

  &:after {
    position: absolute;
    display: block;
    margin: 0 1px;
    left: 20px;
    top: 9px;
    content: '';
    border-width: 0 9px 9px;
    border-color: transparent transparent #fff;
    z-index: 1000;
    border-style: solid;
  }
`;

const DropdownPanel = styled.div`
  margin: 0 -1px;
  background-color: #fff;
  box-shadow: 0 -1px 16px rgb(0 0 0 / 20%);
  border-radius: 10px;
  overflow: hidden;
  white-space: nowrap;
`;

const PanelList = styled.ul`
  position: relative;
  width: 200px;
  max-height: 425px;
  min-height: 50px;
  overflow: auto;
`;

const PanelItem = styled.button`
  display: block;
  position: relative;
  width: 100%;
  padding: 15px;
  margin: 0;
  background: #fff;
  color: #424242;
  font-family: inherit;
  font-weight: 400;
  font-size: 15px;
  line-height: 30px;
  text-decoration: none;
  text-align: left;
  cursor: pointer;

  &:hover {
    background-color: #effbff;
    color: #35c5f0;
    font-weight: 700;
  }
`;

const ItemHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PanelRangeControl = styled.section`
  position: relative;
  padding: 20px 15px;
  margin: 0px;
  width: 375px;
  overflow: auto;
  cursor: auto;
`;

const RangeHeader = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 12px 0px 18px;
`;

const RangeTitle = styled.h1`
  margin: 0px;
  padding: 0px;
  color: rgb(66, 66, 66);
  font-weight: 700;
  line-height: 30px;
  font-size: 20px;
  flex: 0 0 auto;
  -webkit-box-flex: 0;
`;

const RangeSlider = styled.div`
  margin-bottom: 38px;
`;

const InputWrap = styled.div`
  position: relative;
  padding: 7px 0px;
  height: 10px;
`;

const InputContent = styled.div`
  position: absolute;
  top: 7px;
  left: 12px;
  right: 12px;
  height: 10px;
`;

const FooterWrap = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  margin-top: 15px;
`;

const FooterText = styled.div`
  color: rgb(117, 117, 117);
  font-size: 13px;
  line-height: 16px;
`;

const OptionList = styled.ul`
  display: flex;
  margin: 8px -2px -2px;
  padding: 0px;
  list-style: none;
  flex-wrap: wrap;
`;

const OptionItem = styled.li`
  -webkit-box-flex: 0;
  flex: 0 0 25%;
  width: 25%;
  padding: 2px;
`;

const OptionItemButton = styled.button`
  width: 100%;
  padding: 9px 0px;
  font-size: 13px;
  background-color: ${props => (props.isCheck ? '#35c5f0' : '#f5f5f5')};
  border-color: ${props => (props.isCheck ? '#35c5f0' : '#f5f5f5')};
  color: ${props => (props.isCheck ? '#fff' : '#757575')};
  line-height: 20px;
  border-radius: 5px;

  &:hover {
    background-color: ${props => (props.isCheck ? '#09addb' : '#f0f0f0')};
    border-color: ${props => (props.isCheck ? '#09addb' : '#f0f0f0')};
  }
`;

const ResetSlide = styled.button`
  color: #35c5f0;
  font-size: 15px;
  border: none;
  background: none;
  font-family: inherit;
  text-decoration: none;
  text-align: center;
  transition: opacity 0.1s;
  cursor: pointer;
`;

const PanelGroupControl = styled.div`
  max-width: 600px;
  max-height: 400px;
  overflow: auto;
`;

const ColorHeader = styled.h1`
  display: flex;
  margin: 0;
  padding: 7.5px 15px;
  -webkit-box-align: center;
  align-items: center;
  justify-content: space-between;
  font-size: 15px;
  font-weight: 400;
  line-height: 30px;
  color: #424242;
`;

const ItemTitle = styled.span`
  margin-right: 5px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  flex: 0 0 auto;
`;

const ItemToggle = styled.button`
  margin: -5px 0;
  padding: 5px 0;
  background: none;
  font-size: 0;
  line-height: 0;
  transition: opacity 0.1s;
  border: none;
  cursor: pointer;
`;

const ToggleIcon = styled.span`
  position: relative;
  display: inline-block;
  width: 45px;
  height: 23px;
  background-color: ${props => props.background};
  border-radius: 23px;
  transition: background-color 0.2s;
`;

const ToggleIconHandle = styled.span`
  transform: ${props => props.transform};
  position: absolute;
  display: inline-block;
  width: 15px;
  height: 15px;
  top: 50%;
  left: 4px;
  margin-top: -7.5px;
  background-color: #fff;
  border-radius: 15px;
  transition: transform 0.15s ease-in-out;
`;

const ColorContent = styled.div`
  height: ${props => props.height};
  overflow: hidden;
  transition: 0.2s all;
`;

const ColorList = styled.ul`
  position: relative;
  padding: 10px 5px;
  width: auto;
  min-height: 50px;
  white-space: nowrap;
  overflow: auto;
`;

const ItemWrap = styled.li`
  display: inline-block;
  vertical-align: bottom;
`;

const ListItem = styled.button`
  padding: 5px;
  color: #757575;
  border-radius: 4px;
  border: none;
  font-weight: 700;
  background: none;
  line-height: 20px;
`;

const ColorItemHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-box-pack: justify;
`;

const ColorControl = styled.span`
  font-size: 0;
  line-height: 0;
`;

const ColorIcon = styled.span`
  position: relative;
  display: inline-block;
  width: 24px;
  height: 24px;
  background-color: ${props => props.color};
  border-radius: 24px;
  border: ${props =>
    props.color === 'rgb(255,255,255)'
      ? '1px solid #dbdbdb'
      : '1px solid transparent'};
`;

const TagList = styled.ul`
  margin-top: 10px;
  padding: 5px 0;
  list-style: none;
  font-size: 0;
  line-height: 0;
`;

const TagListItem = styled.li`
  display: inline-block;
  margin: 0 2px;
  padding: 2px 0;
`;

const ListClear = styled.button`
  margin: 0;
  padding: 2px 10px;
  border: none;
  background: none;
  font-family: inherit;
  font-size: 15px;
  font-weight: 700;
  line-height: 18px;
  text-decoration: none;
  text-align: center;
  color: #35c5f0;
  cursor: pointer;
  transition: opacity 0.1s;
`;
