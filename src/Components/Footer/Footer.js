import React from 'react';
import styled from 'styled-components';

class Footer extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <CsCenter>
            <CenterLink>고객센터 &#62;</CenterLink>
            <CenterTel>1600-5379</CenterTel>
            <CenterTime>평일 09:00 ~ 18:00 (주말 & 공휴일 제외)</CenterTime>
          </CsCenter>
          <SocialLogo>
            <i className="fab fa-apple"></i>
            <i className="fab fa-google-play"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
          </SocialLogo>
        </Header>
        <div>
          <Category>브랜드 스토리</Category>
          <Category>회사소개</Category>
          <Category>채용정보</Category>
          <Category>이용약관</Category>
          <Category>개인정보처리방cla</Category>
          <Category>공지사항</Category>
          <Category>고객센터</Category>
          <Category>고객의 소리</Category>
          <Category>전문가 등록</Category>
          <Category>사업자 구매회원</Category>
          <Category>제휴/광고 문의</Category>
          <Category>입점신청 문의</Category>
        </div>
        <Info>
          상호명(주)오늘의 너네집 이메일(고객문의) yourhousetoday.net (제휴문의)
          yourhousetoday.net
          대표이사오실장사업자등록번호119-86-9****통신판매업신고번호제2018-서울강남-***8호주소서울
          서초구 강변북로74길 4 삼성
          <br />
          <br />
          생명강변타워 27층 친한은행 채무지급보증안내(주)오늘의 너네집은
          고객님이 현금결제한 금액에 대해 친한은행과 채무지급보증 계약을
          체결하여 안전거래를 보장하고 있습니다. 서비스가입사실 확인 (주)오늘의
          너네집은 통신판매중개자
          <br />
          <br />
          로서 통신판매의 당사자가 아니며, 입점업체가 등록한 상품, 상품정보 및
          거래에 대하여 (주)오늘의 너네집은 일체 책임을 지지 않습니다.
          <br />
          <br />
          <span>
            Copyright 2021. yourhousetoday, Co., Ltd. All rights reserved
          </span>
        </Info>
      </Container>
    );
  }
}

const Container = styled.footer`
  width: 100vw;
  height: 281px;
  padding: 30px 320px 40px;
  background-color: #f5f5f5;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  height: 95px;
  color: #424242;
`;

const CsCenter = styled.div`
  display: flex;
  flex-direction: column;
`;

const CenterLink = styled.span`
  margin-bottom: 10px;
  font-weight: 700;
  font-size: 12px;
`;

const CenterTel = styled.span`
  font-size: 28px;
`;

const CenterTime = styled.span`
  font-size: 12px;
  color: #757575;
`;

const SocialLogo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 264px;

  i {
    font-size: 25px;
  }
`;

const Category = styled.span`
  margin-right: 10px;
  font-size: 10px;
  color: #424242;
`;

const Info = styled.p`
  margin-top: 20px;
  font-size: 10px;
  color: #757575;

  span {
    color: #424242;
  }
`;

export default Footer;
