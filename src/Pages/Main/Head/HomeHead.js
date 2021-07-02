import React, { useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BANNER_SLIDER = [
  { id: 1, url: 'images/Main/slide1.webp' },
  { id: 2, url: 'images/Main/slide2.jpeg' },
  { id: 3, url: 'images/Main/slide3.jpeg' },
  { id: 4, url: 'images/Main/slide4.webp' },
  { id: 5, url: 'images/Main/slide5.webp' },
];

function HomeHead() {
  const [isHover, setIsHover] = useState(false);

  function handleToggle() {
    setIsHover(isHover => !isHover);
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dotsClass: 'slickDots',
    pauseOnHover: true,
  };

  return (
    <Container>
      <Row>
        <BannerLeft
          onMouseOver={() => handleToggle()}
          onMouseOut={() => handleToggle()}
        >
          <StoryLink href="/">
            <BannerImage isHover={isHover} />
            <ContentWrap>
              <Content>
                <SubTitle>내집은 처음이라</SubTitle>
                <Title>자취생활 10년 차의 첫 내 집 마련기</Title>
                <ContentProfile>
                  <ProfileImage />
                  <span>rain98</span>
                </ContentProfile>
              </Content>
              <More isHover={isHover}>보러가기</More>
            </ContentWrap>
          </StoryLink>
        </BannerLeft>
        <BannerRight>
          <StyledSlider {...settings}>
            {BANNER_SLIDER.map(item => {
              return (
                <div key={item.id}>
                  <ImageContainer>
                    <Image src={item.url} />
                  </ImageContainer>
                </div>
              );
            })}
          </StyledSlider>
          <BannerLeftBottom />
        </BannerRight>
      </Row>
    </Container>
  );
}

export default HomeHead;

const Container = styled.section`
  padding: 30px 0 0;
  width: 1136px;
  margin: 130px auto 0;
  max-width: 100%;
`;

const Row = styled.div`
  display: flex;
  height: 505px;
`;

const BannerLeft = styled.div`
  position: relative;
  min-width: 850px;
  border-radius: 10px;
  overflow: hidden;

  &:hover {
  }
`;

const StoryLink = styled.a`
  width: 100%;
  &:after {
    content: '';
    position: absolute;
    height: 230px;
    left: 0;
    right: 0;
    bottom: 0;
    top: auto;
    background: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.5));
    z-index: 1;
    border-radius: 10px;
  }
`;

const BannerImage = styled.img.attrs({
  src: '/images/Main/main2.webp',
})`
  width: 100%;
  height: 505px;
  transition: transform 0.2s;
  border-radius: 10px;
  transform: ${props => (props.isHover ? 'scale(1.05)' : null)};
`;

const ContentWrap = styled.div`
  position: absolute;
  padding: 40px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
`;

const Content = styled.div`
  position: absolute;
  bottom: 40px;
  color: #fff;
  font-weight: 700;
`;

const SubTitle = styled.div`
  font-size: 15px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  line-height: 1.2;
`;

const Title = styled.div`
  margin: 8px 0 10px;
  max-height: 88px;
  font-size: 32px;
`;

const ContentProfile = styled.div`
  display: block;
  font-size: 12px;
  font-weight: 400;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const ProfileImage = styled.img.attrs({
  src: '/images/Main/avatar.png',
})`
  display: inline-block;
  width: 22px;
  height: 22px;
  margin-right: 3px;
  border-radius: 100%;
  vertical-align: -6px;
  background-size: cover;
  background-position: 50%;
`;

const More = styled.div`
  position: absolute;
  bottom: 40px;
  right: 40px;
  width: 140px;
  padding: 18px 0 17px;
  text-align: center;
  font-size: 15px;
  background-color: ${props => (props.isHover ? '#35c5f0' : 'transparent')};
  border: ${props => (props.isHover ? 'none' : '1px solid #fff')};
  border-radius: 4px;
  color: #fff;
  transition: background-color 0.1s, border 0.1s;
  font-weight: 700;
`;

const BannerRight = styled.div`
  width: 267px;
  margin-left: 16px;

  .slick-prev,
  .slick-next {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    transition: 0.2s;
  }

  .slick-prev:hover,
  .slick-next:hover {
    background-color: #35c5f0;
  }

  .slick-next:before,
  .slick-prev:before {
    position: absolute;
    transform: translate(-50%, -50%);
    font-size: 40px;
  }

  .slick-prev,
  .slick-next {
    top: 470px;
    z-index: 101;
  }

  .slick-prev {
    left: 10px;
  }

  .slick-next {
    right: 10px;
  }
`;

const ImageContainer = styled.div`
  margin: 0;
  overflow: hidden;
  border-radius: 10px;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  transition: 0.2s;
  overflow: hidden;
  &:hover {
    transform: scale(1.05);
  }
`;

const StyledSlider = styled(Slider)`
  .slickDots {
    position: absolute;
    padding: 0;
    width: 100%;
    bottom: 20px;
    list-style: none;
    text-align: center;
    z-index: 100;
  }
  .slickDots li {
    display: inline-block;
    position: relative;
    padding: 0;
    width: 20px;
    height: 20px;
    cursor: pointer;
  }

  .slickDots li button {
    display: block;
    width: 20px;
    height: 20px;
    padding: 5px;
    font-size: 0;
    line-height: 0;
    color: transparent;
    border: 0;
    outline: 0;
    background: 0 0;
    cursor: pointer;
  }

  .slickDots li button:before {
    content: '•';
    position: absolute;
    width: 20px;
    height: 20px;
    top: 0;
    left: 0;
    color: #fff;
    font-size: 2.7rem;
    line-height: 20px;
    text-align: center;
    opacity: 0.75;
  }

  .slickDots li.slick-active button:before {
    opacity: 0.75;
    color: #35c5f0;
  }
`;

const BannerLeftBottom = styled.div`
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  -moz-align-items: center;
  align-items: center;
  z-index: 0;
  top: -64px;
  width: 267px;
  border-radius: 10px;
  position: relative;
  height: 60px;
  padding: 10px 5px;
  background: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.3));
`;
