import React from 'react';
import styled from 'styled-components';

class Nav extends React.Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <Logo alt="로고" src="Images/오늘의집 로고.png"></Logo>
          <Catagory>
            <span>커뮤니티</span>
            <span>스토어</span>
            <span>인테리어시공</span>
          </Catagory>
          <SmallWrapper>
            <InputBox>
              <Input placeholder="오늘은 너네집 통합검색"></Input>
              <i class="fas fa-search"></i>
            </InputBox>
            <ButtonBox>
              <button>로그인</button>
              <div></div>
              <button>회원가입</button>
            </ButtonBox>
            <Write>글쓰기</Write>
          </SmallWrapper>
        </Wrapper>
        <MenuContainer>
          <div>
            <span>홈</span>
            <span>팔로잉</span>
            <span>사진</span>
            <span>집들이</span>
            <span>노하우</span>
            <span>전문가집들이</span>
            <span>셀프가이드</span>
            <span>질문과답변</span>
          </div>
        </MenuContainer>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 80px;
  padding: 0 320px;
  border-bottom: 1px solid #dbdbdb;
`;

const MenuContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100vw;
  padding: 0 320px;
  height: 50px;
  border-bottom: 1px solid #dbdbdb;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 640px;

    span {
      font-weight: 700;
      font-size: 16px;
      color: #424242;

      &:hover {
        color: #3fc5f0;
      }
    }
  }
`;

const Logo = styled.img`
  height: 50px;
  font-weight: 700;
  font-size: 30px;
`;

const Catagory = styled.div`
  display: flex;
  justify-content: space-around;
  width: 300px;
  font-weight: 700;
  font-size: 18px;
  color: #424242;

  span {
    &:hover {
      color: #3fc5f0;
    }
  }
`;

const SmallWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 520px;
`;

const InputBox = styled.div`
  position: relative;

  i {
    position: absolute;
    left: 8px;
    top: 10px;
    color: #757575;
    font-size: 22px;
  }
`;

const Input = styled.input`
  width: 266px;
  height: 40px;
  padding: 8px 9px 10px 40px;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  line-height: 20px;
  font-size: 15px;

  &::placeholder {
    color: #dbdbdb;
  }

  &:focus {
    outline: none;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  align-items: center;

  div {
    width: 1px;
    height: 15px;
    margin: 0 7px;
    background-color: #757575;
  }

  button {
    font-weight: 700;
    font-size: 15px;
    color: #757575;

    &:hover {
      color: #3fc5f0;
    }
  }
`;

const Write = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 4px;
  background-color: #3fc5f0;
  font-weight: 700;
  font-size: 16px;
  color: #fff;
`;

export default Nav;
