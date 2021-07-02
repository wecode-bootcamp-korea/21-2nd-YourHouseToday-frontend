import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Login from '../../Pages/Login/Login';
import styled from 'styled-components';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [getInfo, setGetInfo] = useState('');
  const [getToken, setGetToken] = useState(
    localStorage.getItem('access_token')
  );
  const [isClicked, setIsClicked] = useState(false);
  const [isTab, setIsTab] = useState(0);
  const location = useLocation();

  if (!window.Kakao.isInitialized()) {
    window.Kakao.init(process.env.REACT_APP_JS_KEY);
  }

  useEffect(() => {
    if (location.pathname === '/postings')
      setGetInfo(JSON.parse(localStorage.getItem('user-info')));
  }, [location.pathname]);

  const handleLogin = () => {
    setIsOpen(!isOpen);
  };

  const handleTab = e => {
    setIsTab(e.target.id);
  };

  const handleList = () => {
    setIsClicked(!isClicked);
  };

  const logoutWithKakao = () => {
    if (window.Kakao.Auth.getAccessToken()) {
      window.Kakao.Auth.logout(() => {
        localStorage.clear();
        setGetToken('');
        setGetInfo('');
      });
    }
  };

  return (
    <>
      {location.pathname !== '/writing' ? (
        <Container>
          <Wrapper>
            <Link to={'/postings'}>
              <Logo alt="로고" src="Images/Logo/오늘의집 로고.png" />
            </Link>
            <Catagory>
              <span>커뮤니티</span>
              <span>스토어</span>
              <span>인테리어시공</span>
            </Catagory>
            <SmallWrapper>
              <InputBox>
                <Input placeholder="오늘은 너네집 통합검색" />
                <i className="fas fa-search" />
              </InputBox>
              {!getInfo && (
                <ButtonBox>
                  <button onClick={handleLogin}>로그인 / 회원가입</button>
                </ButtonBox>
              )}
              {getInfo && (
                <>
                  <BookMark>
                    <i className="far fa-bookmark" />
                  </BookMark>
                  <Bell>
                    <i className="far fa-bell" />
                  </Bell>
                  <ProfileBox onClick={handleList}>
                    <div>
                      <ProfileImg
                        alt="프로필사진"
                        src={getInfo.profile_image}
                      />
                      <PageList isDisplay={isClicked}>
                        <MyPage to={'/mypage'}>마이페이지</MyPage>
                        <LogOut onClick={logoutWithKakao}>로그아웃</LogOut>
                      </PageList>
                    </div>
                    <i className="fas fa-sort-down"></i>
                  </ProfileBox>
                </>
              )}
              <Write>
                <Link to={'/writing'}>글쓰기</Link>
              </Write>
            </SmallWrapper>
          </Wrapper>
          <MenuContainer>
            <Menu>
              {MenuList.map((list, idx) => (
                <MenuItem
                  to={list.path}
                  key={idx}
                  id={list.id}
                  onClick={handleTab}
                  chooseTab={parseInt(isTab) === list.id}
                >
                  {list.name}
                </MenuItem>
              ))}
            </Menu>
          </MenuContainer>
          {isOpen ? (
            <Login
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              getInfo={getToken}
              getToken={getToken}
              setGetInfo={setGetInfo}
              setGetToken={setGetToken}
            />
          ) : (
            ''
          )}
        </Container>
      ) : null}
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 1000;
`;

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 80px;
  padding: 0 320px;
  border-bottom: 1px solid #ededed;
  background-color: #fff;
`;

const Logo = styled.img`
  height: 50px;
`;

const Catagory = styled.div`
  display: flex;
  justify-content: space-around;
  position: relative;
  width: 300px;
  font-weight: 700;
  font-size: 18px;
  color: #424242;

  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 38px;
    left: 17%;
    width: 0;
    height: 0;
    border-style: solid;
  }

  &:before {
    margin: 1px 0 0 -5px;
    border-width: 0 5px 10px;
    border-color: transparent transparent #dbdbdb;
  }

  &:after {
    margin: 2px 0 0 -4px;
    border-width: 0 4.5px 9px;
    border-color: transparent transparent #fff;
    transform: translateX(-0.5px);
  }

  span {
    &:hover {
      color: #3fc5f0;
    }
  }
`;

const MenuContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  position: relative;
  width: 100vw;
  height: 50px;
  padding: 0 320px;
  border-bottom: 1px solid #ededed;
  background-color: #fff;
`;

const MenuItem = styled(Link)`
  display: flex;
  align-items: center;
  height: 50px;
  font-weight: 700;
  font-size: 16px;
  color: #424242;
  border-bottom: 4px solid ${props => (props.chooseTab ? ' #3fc5f0' : 'none')};

  &:hover {
    color: #3fc5f0;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 640px;
`;

const SmallWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 520px;
  background-color: #fff;
`;

const InputBox = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  i {
    position: absolute;
    left: 8px;
    top: 10px;
    color: #757575;
    font-size: 20px;
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

const BookMark = styled.div`
  width: 32px;
  height: 32px;
  text-align: center;
  border-radius: 100%;
  i {
    margin-top: 7px;
    font-size: 20px;
    color: #757575;
  }

  &:hover {
    background-color: #3fc5f0;

    i {
      color: #fff;
    }
  }
`;

const Bell = styled.div`
  width: 32px;
  height: 32px;
  text-align: center;
  border-radius: 100%;
  i {
    margin-top: 5px;
    font-size: 22px;
    color: #757575;
  }

  &:hover {
    background-color: #3fc5f0;

    i {
      color: #fff;
    }
  }
`;

const ProfileBox = styled.button`
  display: flex;
  align-items: center;

  div {
    position: relative;
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
  i {
    margin-left: 4px;
  }
  &:hover {
    i {
      color: #3fc5f0;
    }
    div {
      border: 2px solid #3fc5f0;
    }
  }
`;

const ProfileImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 32px;
  height: 32px;
  border-radius: 100%;
  transform: translate(-50%, -50%);
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;

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
  }
`;

const PageList = styled.aside`
  display: ${props => (props.isDisplay ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  top: 57px;
  left: -57px;
  width: 150px;
  height: 110px;
  padding: 10px;
  background: #fff;
  border-radius: 0.4em;
  border: 1px solid #ebebeb;
  z-index: 1;

  &:before {
    content: '';
    position: absolute;
    top: -1px;
    left: 50%;
    width: 0;
    height: 0;
    border: 14px solid transparent;
    border-bottom-color: #ebebeb;
    border-top: 0;
    margin-left: -14px;
    margin-top: -14px;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 0;
    height: 0;
    border: 14px solid transparent;
    border-bottom-color: #fff;
    border-top: 0;
    margin-left: -14px;
    margin-top: -14px;
  }
`;

const MyPage = styled(Link)`
  padding: 10px 14px 11px;
  border-bottom: 1px solid #ededed;
  font-weight: 400;
  font-size: 15px;
  color: #424242;

  &:hover {
    background-color: #f7f8fa;
  }
`;

const LogOut = styled.p`
  padding: 10px 14px 11px;
  font-weight: 400;
  font-size: 15px;
  color: #424242;

  &:hover {
    background-color: #f7f8fa;
  }
`;

const Write = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 12px;
  background-color: #3fc5f0;

  a {
    font-weight: 700;
    font-size: 16px;
    color: #fff;
  }

  &:hover {
    transform: translateY(-1.5px);
  }
`;

const MenuList = [
  { id: 0, name: '홈', path: '/postings' },
  { id: 1, name: '팔로잉', path: '/postings' },
  { id: 2, name: '사진', path: '/postings' },
  { id: 3, name: '집들이', path: '/postings' },
  { id: 4, name: '노하우', path: '/postings' },
  { id: 5, name: '전문가집들이', path: '/postings' },
  { id: 6, name: '셀프가이드', path: '/postings' },
  { id: 7, name: '질문과답변', path: '/postings' },
];

export default Nav;
