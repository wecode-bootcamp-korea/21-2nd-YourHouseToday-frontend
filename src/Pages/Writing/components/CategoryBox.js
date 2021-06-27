import React from 'react';
import styled from 'styled-components';

function CategoryBox({
  isDroped,
  isChanged,
  selectForm,
  selectInput,
  handleDrop,
  colorPick,
}) {
  return (
    <CategoryContainer>
      <TopWrapper>
        <div>
          <CategroyName onClick={() => handleDrop(0)}>
            <Category isChanged={isChanged[0]}>{selectInput.size}</Category>
            <i className="fas fa-sort-down" />
          </CategroyName>
          <DropList dropDown={isDroped === 0 ? true : false}>
            {SIZE_LIST.map((size, idx) => (
              <HouseBtn
                key={idx}
                name="size"
                value={size.name}
                onClick={selectForm}
              >
                {size.name}
              </HouseBtn>
            ))}
          </DropList>
        </div>
        <div>
          <CategroyName onClick={() => handleDrop(1)}>
            <Category isChanged={isChanged[1]}>{selectInput.type}</Category>
            <i className="fas fa-sort-down" />
          </CategroyName>
          <DropList dropDown={isDroped === 1 ? true : false}>
            {TYPE_LIST.map((type, idx) => (
              <HouseBtn
                key={idx}
                name="type"
                value={type.name}
                onClick={selectForm}
              >
                {type.name}
              </HouseBtn>
            ))}
          </DropList>
        </div>
        <div>
          <CategroyName onClick={() => handleDrop(2)}>
            <Category isChanged={isChanged[2]}>{selectInput.style}</Category>
            <i className="fas fa-sort-down" />
          </CategroyName>
          <DropList dropDown={isDroped === 2 ? true : false}>
            {STYLE_LIST.map((style, idx) => (
              <HouseBtn
                key={idx}
                name="style"
                value={style.name}
                onClick={selectForm}
              >
                {style.name}
              </HouseBtn>
            ))}
          </DropList>
        </div>
      </TopWrapper>
      <LowWrapper>
        <div>
          <CategroyName onClick={() => handleDrop(3)}>
            <Category isChanged={isChanged[3]}>
              {colorPick.back_color === '' ? null : '배경 - '}
              {selectInput.back_color}
            </Category>
            {colorPick.back_color === '' ? (
              <i className="fas fa-sort-down" />
            ) : null}
          </CategroyName>
          <DropList dropDown={isDroped === 3 ? true : false}>
            {COLOR_LIST.map((color, idx) => (
              <div key={idx}>
                <ColorBtn
                  name="back_color"
                  id={color.color}
                  value={color.name}
                  onClick={selectForm}
                  circle={color.color}
                >
                  {color.name}
                  <PreviewColor preview={color.color}></PreviewColor>
                </ColorBtn>
                <SelectedBackColor
                  selected={colorPick.back_color}
                ></SelectedBackColor>
              </div>
            ))}
          </DropList>
        </div>
        <div>
          <CategroyName onClick={() => handleDrop(4)}>
            <Category isChanged={isChanged[4]}>
              {colorPick.item_color === '' ? null : '소품 - '}
              {selectInput.item_color}
            </Category>
            {colorPick.item_color === '' ? (
              <i className="fas fa-sort-down" />
            ) : null}
          </CategroyName>
          <DropList dropDown={isDroped === 4 ? true : false}>
            {COLOR_LIST.map((color, idx) => (
              <div key={idx}>
                <ColorBtn
                  name="item_color"
                  id={color.color}
                  value={color.name}
                  onClick={selectForm}
                  circle={color.color}
                >
                  {color.name}
                  <PreviewColor preview={color.color}></PreviewColor>
                </ColorBtn>
                <SelectedItemColor
                  selected={colorPick.item_color}
                ></SelectedItemColor>
              </div>
            ))}
          </DropList>
        </div>
      </LowWrapper>
    </CategoryContainer>
  );
}

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 40px;
`;

const TopWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: inherit;
`;

const LowWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
  button {
    width: 235px;
  }
`;

const CategroyName = styled.button`
  position: relative;
  width: 150px;
  height: 40px;
  border-radius: 4px;
  border: 1px solid #dbdbdb;
  background-color: #fff;
  font-size: 14px;
  color: #dbdbdb;
  z-index: 2;

  &:hover {
    color: #35c5f0;

    span {
      color: #35c5f0;
    }
  }
`;

const Category = styled.span`
  margin-right: 30px;
  color: ${props => (!props.isChanged ? '#dbdbdb' : '#424242')};
`;

const DropList = styled.div`
  position: absolute;
  z-index: 3;

  button {
    display: ${props => (!props.dropDown ? 'none' : 'flex')};
  }
`;

const HouseBtn = styled.button`
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 40px;
  padding-top: 8px;
  border: 1px solid #dbdbdb;
  border-top: none;
  background-color: #fff;
  color: #424242;
  &:hover {
    background-color: #dbdbdb;
  }
`;
const ColorBtn = styled.button`
  justify-content: flex-start;
  align-items: center;
  height: 40px;
  padding-top: 8px;
  padding-left: 25px;
  border: 1px solid #dbdbdb;
  border-top: none;
  background-color: #fff;
  color: #424242;
  &:hover {
    background-color: ${props => props.circle || '#fff'};
    color: ${props =>
      props.circle !== 'rgb(255,255,255)' ? '#fff' : '#ededed'};
  }
`;
const SelectedBackColor = styled.div`
  position: absolute;
  top: -30px;
  left: 172px;
  width: 40px;
  height: 20px;
  border-radius: 4px;
  border: ${props =>
    props.selected === 'rgb(255,255,255)' ? '1px solid #ededed' : 'none'};
  background-color: ${props => props.selected};
`;

const SelectedItemColor = styled(SelectedBackColor)``;

const PreviewColor = styled.div`
  position: absolute;
  left: 80%;
  width: 20px;
  height: 20px;
  margin-bottom: 5px;
  border-radius: 100%;
  border: ${props =>
    props.preview !== 'rgb(255,255,255)' ? 'none' : '1px solid #dbdbdb'};
  background-color: ${props => props.preview || '#fff'};
`;

const SIZE_LIST = [
  { name: '10평대 미만' },
  { name: '10평대' },
  { name: '20평대' },
  { name: '30평대 ' },
  { name: '40평대 ' },
  { name: '50평대 이상' },
];
const TYPE_LIST = [
  { name: '원룸&오피스텔' },
  { name: '아파트' },
  { name: '빌라' },
  { name: '단독주택' },
  { name: '사무공간' },
  { name: '상업공간' },
  { name: '기타' },
];
const STYLE_LIST = [
  { name: '모던' },
  { name: '북유럽' },
  { name: '빈티지' },
  { name: '내추럴 ' },
  { name: '프로방스' },
  { name: '클래식' },
  { name: '한국' },
  { name: '유니크' },
];

const COLOR_LIST = [
  {
    name: '블랙',
    color: 'rgb(0,0,0)',
  },
  {
    name: '화이트',
    color: 'rgb(255,255,255)',
  },
  {
    name: '그레이',
    color: 'rgb(189,189,189)',
  },
  {
    name: '베이지',
    color: 'rgb(244,231,197)',
  },
  {
    name: '라이트 브라운',
    color: 'rgb(232,192,120)',
  },
  {
    name: '브라운',
    color: 'rgb(100,65,52)',
  },
  {
    name: '레드',
    color: 'rgb(233,55,54)',
  },
  {
    name: '핑크',
    color: 'rgb(238,138,148)',
  },
  {
    name: '옐로우',
    color: 'rgb(254,209,68)',
  },
  {
    name: '그린',
    color: 'rgb(150,215,131)',
  },
  {
    name: '민트',
    color: 'rgb(144,208,197)',
  },
  {
    name: '블루',
    color: 'rgb(61,151,221)',
  },
  {
    name: '네이비',
    color: 'rgb(34,62,95)',
  },
];

export default CategoryBox;
