import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MyPageData from './MyPageData';
import EmptyBox from './EmptyBox';

function Mypage() {
  const [active, SetActive] = useState(0);
  const [trendList, setTrendList] = useState([]);
  const [myPhoto, setMyPhoto] = useState([]);
  const [heartCount, setHeartCount] = useState();

  useEffect(() => {
    fetch('/data/Mypage/mypage.json')
      .then(response => response.json())
      .then(data => {
        setMyPhoto(data.result);
      });

    fetch('/data/Mypage/main.json')
      .then(response => response.json())
      .then(data => {
        setTrendList(data.result);
      });
  }, []);

  const CUT_ITEM = [
    { id: 1, name: '스크랩북', count: 122, url: 'images/MyPage/ribbon.png' },
    { id: 2, name: '좋아요', count: 1301, url: 'images/MyPage/heart.png' },
    { id: 3, name: '내쿠폰', count: 10, url: 'images/MyPage/tickets.png' },
  ];

  return (
    <>
      <UserShowLayOut>
        <WrapNav>
          <NavOwner>
            <NavOwnerContents>
              {MyPageData[0].navOwnerMenu.map(item => {
                return (
                  <NavItem key={item.id}>
                    <OwnerItem>{item.name}</OwnerItem>
                  </NavItem>
                );
              })}
            </NavOwnerContents>
          </NavOwner>
          <NavContent>
            <NavContents>
              {MyPageData[1].navContentList.map(item => {
                return (
                  <NavItem key={item.id}>
                    <ContentItem onClick={() => SetActive(item.id - 1)}>
                      {item.name}
                      <BarItem display={active === item.id - 1} />
                    </ContentItem>
                  </NavItem>
                );
              })}
            </NavContents>
          </NavContent>
        </WrapNav>
        <Container>
          <Row>
            <WrapProfile>
              <StikyContainer>
                <StikyChild>
                  <UserName>
                    <UserNameShare>
                      <ShareButton>
                        <Icon />
                      </ShareButton>
                    </UserNameShare>
                    <UserNameContainer>
                      <ProfileImageContent>
                        <ProfileImage />
                      </ProfileImageContent>
                      <ProfileInfo>
                        <ProfileInfoName>
                          <span>Rnanfsid</span>
                        </ProfileInfoName>
                        <ProfileInfoFollow>
                          <FollowText>
                            <a>
                              팔로워
                              <HighLight> 81</HighLight>
                            </a>
                          </FollowText>
                          <FollowBar></FollowBar>
                          <FollowText>
                            <a>
                              팔로잉
                              <HighLight> 39</HighLight>
                            </a>
                          </FollowText>
                        </ProfileInfoFollow>
                        <ProfileInfoActions>
                          <ProfileInfoBtn>설정</ProfileInfoBtn>
                        </ProfileInfoActions>
                      </ProfileInfo>
                    </UserNameContainer>
                    <UserNameLinks>
                      <ShortCut>
                        {CUT_ITEM.map(item => {
                          return (
                            <ShortCutItem key={item.id}>
                              <CutItemLink>
                                <ShortCutIconWrap>
                                  <ShortCutIcon src={item.url} />
                                </ShortCutIconWrap>
                                <ShortCutText>{item.name}</ShortCutText>
                                <ShortCutText>
                                  <BoldText>{item.count}</BoldText>
                                </ShortCutText>
                              </CutItemLink>
                            </ShortCutItem>
                          );
                        })}
                      </ShortCut>
                    </UserNameLinks>
                  </UserName>
                  <FooterInfo>
                    <FooterLink>
                      친구 초대하고
                      <BoldPoint> 5,000P </BoldPoint>
                      받기
                      <ArrowIcon src="images/MyPage/right-arrow.png" />
                    </FooterLink>
                  </FooterInfo>
                </StikyChild>
              </StikyContainer>
            </WrapProfile>
            <WrapContents>
              <Contents>
                <PostCard>
                  <PostTitle>
                    사진
                    <strong> {myPhoto.length}</strong>
                  </PostTitle>
                  <PostCardList margin={myPhoto.length === 0}>
                    {myPhoto.length === 0 ? (
                      <PostUpload>
                        <UploadIcon src="images/MyPage/plus.png" />첫 번째
                        사진을 올려보세요
                      </PostUpload>
                    ) : (
                      <EmptyBox />
                    )}
                    {myPhoto.map((item, index) => {
                      return (
                        <React.Fragment key={index}>
                          <CardItem>
                            <CardImageWrap>
                              <CardImage src={item.cardImage} />
                            </CardImageWrap>
                          </CardItem>
                        </React.Fragment>
                      );
                    })}
                  </PostCardList>
                  <PostUploadBtn>
                    <UploadIcon src="images/MyPage/plus.png" />
                    사진 올리기
                  </PostUploadBtn>
                </PostCard>
                <PostCard>
                  <PostTitle>트렌드</PostTitle>
                  <PostCardList>
                    {trendList.map((item, index) => {
                      return (
                        <CardItem key={index}>
                          <CardImageWrap>
                            <CardImage src={item.cardImage} />
                          </CardImageWrap>
                        </CardItem>
                      );
                    })}
                  </PostCardList>
                  <PostUploadBtn>
                    전체 보기
                    <MoreIcon src="images/MyPage/right-arrow.png" />
                  </PostUploadBtn>
                </PostCard>
              </Contents>
            </WrapContents>
          </Row>
        </Container>
      </UserShowLayOut>
    </>
  );
}

export default Mypage;

const UserShowLayOut = styled.div`
  position: relative;
`;

const WrapNav = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
`;

const NavOwner = styled.nav`
  width: 100%;
  border-bottom: 1px solid #ededed;
  font-size: 18px;
`;

const NavOwnerContents = styled.ul`
  text-align: center;
  white-space: nowrap;
`;

const NavItem = styled.li`
  display: inline-block;
  margin-left: 30px;

  &:first-child {
    margin-left: 0;
  }
`;

const OwnerItem = styled.a`
  position: relative;
  display: block;
  padding: 0 10px;
  height: 60px;
  font-weight: 700;
  line-height: 60px;
  transition: color 0.15s ease;

  &:hover {
    color: #35c5f0;
  }
`;

const NavContent = styled.nav`
  width: 100%;
  border-bottom: 1px solid #ededed;
  overflow: hidden;
`;

const NavContents = styled.ul`
  text-align: center;
  white-space: nowrap;
`;

const ContentItem = styled.a`
  position: relative;
  display: block;
  padding: 0 10px;
  height: 60px;
  font-weight: 700;
  line-height: 60px;
  transition: color 0.15s ease;

  &:hover {
    color: #35c5f0;
  }
`;

const BarItem = styled.div`
  position: absolute;
  display: ${props => (props.display ? 'block' : 'none')};
  width: 100%;
  height: 4px;
  left: 0;
  bottom: 0;
  background: #35c5f0;
`;

const Container = styled.div`
  width: 1136px;
  margin-right: auto;
  margin-left: auto;
  max-width: 100%;
  min-height: 1px;
  margin-bottom: 40px;
`;

const Row = styled.div`
  display: flex;
  margin-right: -10px;
  margin-left: -10px;
  flex-wrap: wrap;
`;

const WrapProfile = styled.div`
  position: relative;
  padding: 30px 10px 0;
  width: 100%;
  min-height: 1px;
  order: 1;
  flex: 0 0 25%;
`;

const StikyContainer = styled.div`
  position: sticky;
  top: 81px;
`;

const StikyChild = styled.div`
  position: relative;
`;

const UserName = styled.div`
  margin-top: 20px;
  padding: 30px 25px 0;
  border: 1px solid #dadce0;
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgb(63 71 77 / 6%);
`;

const UserNameShare = styled.div`
  position: absolute;
  top: 18px;
  right: 12px;
`;

const ShareButton = styled.button`
  background: transparent;
  transition: opacity 0.1s;
  border: none;
`;

const Icon = styled.img.attrs({
  src: 'images/MyPage/share.png',
})`
  width: 24px;
  height: 24px;
`;

const UserNameContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  flex-direction: column;
  align-items: center;
`;

const ProfileImageContent = styled.div`
  margin-right: 0;
  margin-bottom: 24px;
  width: 120px;
  height: 120px;
  border-radius: 100%;
  border: 1px solid rgba(0, 0, 0, 0.07);
  overflow: hidden;
`;

const ProfileImage = styled.img.attrs({
  src: 'https://image.ohou.se/i/bucketplace-v2-development/uploads/default_images/avatar.png?gif=1&w=144&h=144&c=c',
})`
  width: 100%;
  height: 100%;
`;

const ProfileInfo = styled.div`
  display: flex;
  max-width: 100%;
  align-items: center;
  flex-direction: column;
`;

const ProfileInfoName = styled.div`
  display: flex;
  margin-bottom: 10px;
  color: #292929;
  font-size: 26px;
  line-height: 1.15;
  font-weight: 700;
  word-break: break-all;
  letter-spacing: normal;
  font-stretch: normal;
  font-style: normal;
  align-items: center;
  text-align: center;
  overflow-wrap: break-word;
`;

const ProfileInfoFollow = styled.div`
  display: flex;
  margin-bottom: 16px;
  color: #828c94;
  font-weight: 400;
  font-size: 13px;
  line-height: 1;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  align-self: center;
  align-items: center;
`;

const FollowText = styled.div`
  display: inline-block;
  padding-left: 10px;
  padding-right: 10px;
  transition: opacity 0.1s;
`;

const HighLight = styled.span`
  margin-top: 10px;
  color: #525b61;
  font-weight: 700;
`;

const FollowBar = styled.div`
  margin-top: 1px;
  margin-left: 2px;
  margin-right: 2px;
  width: 1px;
  height: 9px;
  background-color: #dadce0;
`;

const ProfileInfoActions = styled.div`
  display: flex;
  justify-content: center;
`;

const ProfileInfoBtn = styled.a`
  display: block;
  padding: 6px 16px;
  min-width: 28px;
  background-color: #fff;
  color: #292929;
  border-radius: 4px;
  border: 1px solid #eaebef;
  font-size: 12px;
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  transition: background-color 0.3s ease, color 0.3s ease, border 0.3s;
`;

const UserNameLinks = styled.div`
  display: flex;
  padding: 24px 0;
  justify-content: center;
  border-top: 1px solid #eaebef;
`;

const ShortCut = styled.div`
  display: flex;
  width: 100%;
`;

const ShortCutItem = styled.div`
  max-width: 33.33333%;
  font-weight: 700;
  text-align: center;
  flex: 1;
  transition: opacity 0.1s;
`;

const CutItemLink = styled.a`
  display: block;
  width: 100%;
`;

const ShortCutIconWrap = styled.div`
  position: relative;
  margin: 0 auto 4px;
`;

const ShortCutText = styled.div`
  color: #424242;
  font-size: 13px;
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
`;

const BoldText = styled.b`
  display: block;
  margin: 0 2px;
  font-size: 15px;
`;

const FooterInfo = styled.div`
  margin-top: 14px;
`;

const FooterLink = styled.a`
  display: block;
  padding: 14px 0;
  min-width: 28px;
  background-color: #effbff;
  color: #3f474d;
  font-size: 14px;
  border: 1px solid #effbff;
  border-radius: 4px;
  font-stretch: normal;
  font-style: normal;
  text-align: center;
  transition: background-color 0.3s ease, color 0.3s ease, border 0.3s;
  line-height: 1.5;
  letter-spacing: -0.28px;
`;

const BoldPoint = styled.span`
  color: #35c5f0;
  font-weight: 700;
`;

const WrapContents = styled.div`
  position: relative;
  width: 100%;
  max-width: 66.6666666667%;
  padding-right: 10px;
  padding-left: 10px;
  margin-left: 8.3333333333%;
  min-height: 1px;
  flex: 0 0 66.6666666667%;
  order: 2;
`;

const Contents = styled.div`
  padding-top: 50px;
`;

const PostCard = styled.section`
  position: relative;
  margin-bottom: 60px;
`;

const PostTitle = styled.h5`
  position: relative;
  margin-bottom: 20px;
  color: #000;
  font-weight: 700;
  font-size: 18px;

  strong {
    color: #35c5f0;
  }
`;

const PostUpload = styled.a`
  display: flex;
  width: 100%;
  padding: 80px 0;
  color: #757575;
  border: 1px dashed #dbdbdb;
  font-weight: 700;
  font-size: 13px;
  align-items: center;
  justify-content: center;
  &:hover {
    text-decoration: underline;
  }
`;

const ShortCutIcon = styled.img`
  width: 28px;
  height: 28px;
`;

const UploadIcon = styled.img`
  margin-right: 5px;
  width: 12px;
  height: 12px;
  margin-top: -3px;
`;

const ArrowIcon = styled.img`
  margin-left: 10px;
  margin-bottom: 3px;
  width: 12px;
  height: 12px;
  vertical-align: middle;
`;

const PostCardList = styled.div`
  display: flex;
  margin: ${props => (props.margin ? '0 ' : '0 -10px')};
  flex-wrap: wrap;
`;

const CardItem = styled.div`
  position: relative;
  padding-right: 10px;
  padding-left: 10px;
  width: 100%;
  min-height: 1px;
  flex: 0 0 25%;
  max-width: 25%;
`;

const CardImageWrap = styled.div`
  position: relative;
  margin-bottom: 20px;
  overflow: hidden;
  &:after {
    display: block;
    padding-bottom: 100%;
    content: '';
    background-color: #f5f5f5;
  }
`;

const CardImage = styled.img`
  position: absolute;
  display: block;
  left: 50%;
  top: 50%;
  width: 100%;
  border-radius: 6px;
  transform: translate(-50%, -50%);
`;

const Empty = styled.div`
  &:after {
    display: block;
    padding-top: 100%;
    background-color: #f5f5f5;
    content: '';
  }
`;

const PostUploadBtn = styled.a`
  display: inline-block;
  margin-top: 30px;
  padding: 21px 0;
  height: 60px;
  width: 100%;
  background-color: #ffffff;
  color: #757575;
  border-radius: 4px;
  border-color: #dbdbdb;
  line-height: 1;
  font-size: 15px;
  border-width: 1px;
  border-style: solid;
  text-align: center;
  font-weight: bold;
`;

const MoreIcon = styled.img`
  margin-left: 5px;
  width: 12px;
  height: 12px;
`;
