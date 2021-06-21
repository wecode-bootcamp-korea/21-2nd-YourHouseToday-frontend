import React, { useState } from 'react';
import styled from 'styled-components';
import { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { API } from '../../config';

function Feeds(props) {
  const [isHover, setIsHover] = useState(false);
  const [likeCount, setLikeCount] = useState(props.data.heartCount);
  const [isLike, setIsLike] = useState(false);

  function handleToggle() {
    setIsHover(isHover => !isHover);
  }

  const {
    profileImage,
    profileName,
    introduce,
    title,
    cardImage,
    viewCount,
    commentCount,
    writerImage,
    writerName,
    commentContent,
    id,
  } = props.data;

  function handleLike() {
    setIsLike(isLike => !isLike);
    isLike
      ? setLikeCount(likeCount => likeCount - 1)
      : setLikeCount(likeCount => likeCount + 1);

    isLike
      ? fetch(`${API}/postings/like/${id}`, {
          method: 'delete',
          headers: {
            Authorization:
              'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MjJ9.W0grRe41iPCBjg0AB4vIgyClD0YmHuU9HWhBRW7k_Vc',
          },
        }).then(response => response)
      : fetch(`${API}/postings/like/${id}`, {
          method: 'post',
          headers: {
            Authorization:
              'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MjJ9.W0grRe41iPCBjg0AB4vIgyClD0YmHuU9HWhBRW7k_Vc',
          },
        }).then(response => response);
  }

  return (
    <CardFeed>
      <CardItem>
        <CardItemHead>
          <address>
            <Head>
              <WriteLink to={`/ProdDetail/${id}`}>
                <ProfileImage src={profileImage} />
                <ProfileName>{profileName}</ProfileName>
              </WriteLink>
              s<Follow>팔로우</Follow>
            </Head>
            <Introduce>{introduce}</Introduce>
          </address>
        </CardItemHead>
        <CardItemBody>
          <ContentLink
            to={`/ProdDetail/${id}`}
            onMouseOver={() => handleToggle()}
            onMouseOut={() => handleToggle()}
          />
          <Title isHover={isHover}>{title}</Title>
          <div>
            <ImageWrap>
              <CardImage src={cardImage} isHover={isHover} />
              <ViewCount>조회수 {viewCount.toLocaleString()}</ViewCount>
            </ImageWrap>
          </div>
          <IconList>
            <HeartWrap onClick={() => handleLike()}>
              <HeartImg
                src={
                  isLike ? 'images/Main/blueheart.png' : 'images/Main/heart.png'
                }
              />
              <Count>{likeCount}</Count>
            </HeartWrap>
            <CommentCountWrap to={`/ProdDetail/${id}`}>
              <CommentImg />
              <Count>{commentCount}</Count>
            </CommentCountWrap>
          </IconList>
        </CardItemBody>
        <CommentWrap>
          <CardComment>
            <CommentWriter>
              <WriterLink to={`/ProdDetail/${id}`}>
                <WriterImageBox display={writerImage ? 'block' : 'none'}>
                  <WriterImage src={writerImage} />
                </WriterImageBox>
                <WriterName>{writerName}</WriterName>
              </WriterLink>
            </CommentWriter>
            <CommentLink to={`/ProdDetail/${id}`}>
              <CommentContent>{commentContent}</CommentContent>
            </CommentLink>
          </CardComment>
        </CommentWrap>
      </CardItem>
    </CardFeed>
  );
}
export default Feeds;

const hover = css`
  cursor: pointer;
  transition: opacity 0.1s;
  &:hover {
    opacity: 0.5;
  }
`;

const flexCenter = (flex, justify, align) => css`
  display: ${flex};
  justify-content: ${justify};
  align-items: ${align};
`;

const size = css`
  width: 20px;
  height: 20px;
`;

const iconWrap = css`
  ${flexCenter('flex', 'center', 'center')};
  position: relative;
  padding: 13px 0 16px;
  margin: 0;
  box-flex: 1;
  background: none;
  border: none;
  text-align: center;
  z-index: 2;
  transition: opacity 0.1s;
  flex: 1 0 0px;
  &:hover {
    opacity: 0.5;
  }
`;

const CardFeed = styled.div`
  padding-right: 10px;
  padding-left: 10px;
  max-width: 25%;
  flex: 0 0 25%;
`;

const CardItem = styled.article`
  padding-bottom: 40px;
`;

const CardItemHead = styled.div`
  ${flexCenter('flex', 'center', 'normal')};
  position: relative;
  min-height: 36px;
  margin: 0 0 16px;
  padding: 0 0 0 48px;
  flex-direction: column;

  address {
    margin-top: -5px;
    font-size: 15px;
    line-height: 19px;
    flex: 0 0 auto;
  }
`;

const Head = styled.div`
  display: flex;
`;

const WriteLink = styled(Link)`
  display: inline-block;
  min-width: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  flex: 0 1 auto;
  ${hover}
`;

const ProfileImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 36px;
  height: 36px;
  background-color: #ededed;
  border-radius: 100%;
`;

const ProfileName = styled.span`
  color: #424242;
  font-weight: 500;
`;

const Follow = styled.button`
  margin-left: 10px;
  padding: 0;
  border: none;
  color: #35c5f0;
  background: none;
  flex: 0 0 auto;
  font-weight: 700;
  font: inherit;
  ${hover}
`;

const Introduce = styled.div`
  margin-top: 2px;
  color: #757575;
  white-space: nowrap;
  line-height: 16px;
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CardItemBody = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
`;

const ContentLink = styled(Link)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`;

const Title = styled.div`
  display: -webkit-box;
  margin: 12px 0 0;
  max-height: 66px;
  max-height: 110px;
  line-height: 22px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 15px;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  order: 1;
  opacity: ${props => (props.isHover ? 0.5 : 1)};
`;

const ImageWrap = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 100%;
  background-color: #ededed;
  border-radius: 6px;
  overflow: hidden;
`;

const CardImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transition: transform 0.2s;
  transform: ${props =>
    props.isHover
      ? 'translate(-50%, -50%) scale(1.05)'
      : 'translate(-50%, -50%)'};
`;

const ViewCount = styled.span`
  position: absolute;
  bottom: 12px;
  right: 12px;
  color: #fff;
  text-shadow: 0 0 4px rgb(0 0 0 / 50%);
  font-size: 13px;
`;

const IconList = styled.aside`
  display: flex;
  margin-bottom: -12px;
  flex: 0 0 auto;
`;

const HeartWrap = styled.button`
  ${iconWrap}
`;

const CommentCountWrap = styled(Link)`
  ${iconWrap}
`;

const HeartImg = styled.img`
  ${size}
`;

const Count = styled.span`
  margin-left: 6px;
  font-size: 14px;
  color: #424242;
`;

const CommentImg = styled.img.attrs({
  src: 'images/Main/speech-bubble.png',
})`
  ${size}
`;

const CommentWrap = styled.div`
  ${flexCenter('flex', 'center', 'normal')};
  position: relative;
  margin: 12px 0 0;
  padding: 0 0 0 34px;
  min-height: 24px;
  -webkit-box-orient: vertical;
  flex-direction: column;
`;

const CardComment = styled.article`
  padding: 4px;
  margin: -4px;
  max-height: 66px;
  font-size: 15px;
  color: #424242;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  line-height: 22px;
`;

const CommentWriter = styled.address`
  display: inline;
  font-weight: 700;
`;

const WriterLink = styled(Link)`
  display: inline-block;
  color: #424242;
  ${hover}
`;

const WriterImageBox = styled.div`
  display: ${props => props.display};
  position: absolute;
  top: 0;
  left: 0;
  ${size}
  background-color: #ededed;
  border-radius: 100%;
  overflow: hidden;
`;

const WriterImage = styled.img`
  ${size}
`;

const WriterName = styled.span`
  ${hover}
`;

const CommentLink = styled(Link)`
  ${hover}
  color: #424242;
`;

const CommentContent = styled.p`
  display: inline;
  margin-left: 6px;
`;
