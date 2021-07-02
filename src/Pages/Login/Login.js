import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { GET_SIGNIN_API } from '../../config';

function Login({ isOpen, setIsOpen, setGetInfo, setGetToken }) {
  const history = useHistory();
  const loginModal = useRef(null);

  const loginWithKakao = () => {
    setIsOpen(false);
    window.Kakao.Auth.login({
      success: auth => {
        fetch(`${GET_SIGNIN_API}`, {
          method: 'post',
          headers: {
            Authorization: auth.access_token,
          },
        })
          .then(res => res.json())
          .then(res => {
            if (res.self_token) {
              localStorage.setItem('user-info', JSON.stringify(res));
              localStorage.setItem('access_token', res.self_token);
              setGetInfo(JSON.parse(localStorage.getItem('user-info')));
              setGetToken(localStorage.getItem('access_token'));
            } else {
              localStorage.setItem('user-info', JSON.stringify(res));
              history.push('/editusername');
            }
          });
      },
      fail: err => {
        console.error(err);
      },
    });
  };

  const handleClickOutside = ({ target }) => {
    if (loginModal.current === null) return;

    if (isOpen && !loginModal.current.contains(target)) {
      return setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <Modal isDisplay={isOpen} ref={loginModal}>
      <Subject>로그인</Subject>
      <InputBox>
        <input placeholder="아이디" />
        <input placeholder="비밀번호" />
      </InputBox>
      <LoginBtn>로그인</LoginBtn>
      <Social>
        <span>SNS계정으로 간편 로그인/회원가입</span>
        <Logo>
          <button>
            <img alt="페이스북로고" src="/Images/Social/facebook_logo.jpg" />
          </button>
          <button onClick={loginWithKakao}>
            <img alt="카카오로고" src="/Images/Social/kakaotalk_logo.jpg" />
          </button>
          <button>
            <img alt="라인로고" src="/Images/Social/Line_logo.jpg" />
          </button>
        </Logo>
      </Social>
    </Modal>
  );
}

const Modal = styled.div`
  display: ${props => (props.isDisplay ? 'block' : 'none')};
  position: relative;
  top: -40px;
  left: 22%;
  width: 400px;
  height: 450px;
  background: #fff;
  border-radius: 0.4em;
  border: 1px solid #ebebeb;
  box-shadow: 5px 5px 5px 5px #ededed;

  &:before {
    content: '';
    position: absolute;
    top: -1px;
    left: 50%;
    width: 0;
    height: 0;
    border: 16px solid transparent;
    border-bottom-color: #ebebeb;
    border-top: 0;
    margin-left: -16px;
    margin-top: -16px;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 0;
    height: 0;
    border: 16px solid transparent;
    border-bottom-color: #fff;
    border-top: 0;
    margin-left: -16px;
    margin-top: -16px;
  }
`;

const Subject = styled.p`
  margin: 25px;
  font-weight: 700;
  font-size: 25px;
  color: #424242;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    width: 350px;
    height: 55px;
    margin-top: 15px;
    padding-left: 20px;
    border: 1px solid #ededed;
    border-radius: 4px;
    outline: none;
    font-size: 15px;

    &::placeholder {
      color: #dbdbdb;
    }

    &:focus {
      box-shadow: 5px 5px 5px 2px #dbdbdb;
    }
  }
`;

const LoginBtn = styled.button`
  width: 350px;
  height: 50px;
  margin: 15px 0px 0px 24px;
  background-color: #35c5f0;
  border-radius: 4px;
  font-size: 15px;
  color: #fff;

  &:hover {
    transform: translateY(-1.5px);
  }
`;

const Social = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;

  span {
    font-size: 12px;
    color: #757575;
  }
`;

const Logo = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin-top: 15px;

  img {
    width: 63px;

    &:hover {
      cursor: pointer;
    }
  }
`;

export default Login;
