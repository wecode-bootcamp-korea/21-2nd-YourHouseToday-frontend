import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { GET_EDITINFO_API, GET_SIGNUP_API } from '../../config';

function EditUserName() {
  const [userNickName, setUserNickName] = useState(
    JSON.parse(localStorage.getItem('user-info')).nickname
  );
  const [caution, setCaution] = useState('');
  const [isOverLap, setIsOverLap] = useState(false);
  const [suggestName, setSuggestName] = useState('');
  const history = useHistory();

  const validationCheck = e => {
    setUserNickName(e.target.value);
  };

  useEffect(() => {
    if (userNickName.length === 0) {
      setCaution('필수 항목 입니다.');
      setIsOverLap(false);
    } else if (userNickName.length === 1) {
      setCaution('2자 이상 입력해주세요');
      setIsOverLap(false);
    } else if (isOverLap) {
      setCaution('사용 중인 닉네임입니다.');
    } else {
      setCaution('');
    }
  }, [userNickName, isOverLap]);

  const checkId = () => {
    if (userNickName.length) {
      fetch(`${GET_EDITINFO_API}`, {
        method: 'post',
        body: JSON.stringify({
          nickname: userNickName,
        }),
      })
        .then(res => res.json())
        .then(res => {
          if (res.message === 'NICKNAME ALEADY EXISTS') {
            setSuggestName(res.recommend_nickname);
            setIsOverLap(true);
          } else {
            setIsOverLap(false);
          }
        });
    }
  };

  const chooseName = () => {
    setUserNickName(suggestName);
    setIsOverLap(false);
  };

  const handleSubmit = () => {
    const userInfo = JSON.parse(localStorage.getItem('user-info'));

    fetch(`${GET_SIGNUP_API}`, {
      method: 'post',
      body: JSON.stringify({
        id: userInfo.id,
        profile_image: userInfo.profile_image,
        nickname: userNickName,
        email: userInfo.email,
      }),
    })
      .then(res => {
        if (res.status !== 201) return alert('페이지 로드에 실패 했습니다.');
        alert('로그인 성공!');
        return res.json();
      })
      .then(res => {
        localStorage.setItem('user-info', JSON.stringify(res));
        localStorage.setItem('access_token', res.self_token);
        history.push('/postings');
      });
  };

  return (
    <Container>
      <Wrapper>
        <Header>추가 정보 입력</Header>
        <InputBox>
          <InputNickName
            value={userNickName}
            length={userNickName.length}
            onChange={validationCheck}
            onBlur={checkId}
          />
          <Caution>{caution}</Caution>
        </InputBox>
        {isOverLap && (
          <SuggestBox>
            <Suggest>
              <span>'{suggestName}'</span>이 별명은 어떠신가요?
              <br /> 별명은 언제든 수정하실 수 있습니다.
            </Suggest>
            <UseSuggest onClick={chooseName}>사용하기</UseSuggest>
          </SuggestBox>
        )}
        <Submit onClick={handleSubmit}>완료</Submit>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  height: 360px;
  margin: 200px auto;
`;

const Header = styled.p`
  font-weight: 700;
  font-size: 20px;
  color: #292929;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const InputNickName = styled.input`
  width: 320px;
  height: 40px;
  margin-top: 30px;
  padding-left: 20px;
  border: 1px solid ${props => (props.length < 2 ? '#ff7777' : '#ededed')};
  border-radius: 4px;
  outline: none;

  &:focus {
    box-shadow: 2px 2px 4px 2px rgba(55, 197, 245, 0.4);
  }
`;

const Caution = styled.span`
  margin-top: 17px;
  font-size: 13px;
  color: #ff7777;
`;

const SuggestBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 320px;
  height: 64px;
  margin-top: 20px;
  border-radius: 4px;
  background-color: #f5f5f5;
`;

const Suggest = styled.p`
  margin-left: 25px;
  font-size: 13px;
  color: #424242;
  line-height: 20px;

  span {
    margin-right: 3px;
    font-weight: 700;
    color: #3fc5f0;
  }
`;

const UseSuggest = styled.button`
  display: flex;
  align-items: center;
  height: 31px;
  margin-right: 25px;
  padding: 7px 12px;
  border-radius: 4px;
  background-color: #35c5f0;
  font-weight: 700;
  font-size: 14px;
  color: #fff;
`;

const Submit = styled.button`
  width: 320px;
  height: 50px;
  margin-top: 10px;
  background-color: #3fc5f0;
  border-radius: 4px;
  font-weight: 70;
  font-size: 17px;
  color: white;

  &:hover {
    background-color: #09addb;
  }

  &:active {
    transform: scale(0.98);
  }
`;

export default EditUserName;
