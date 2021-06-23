// import React, { useState,useEffect } from 'react';
import React, { useState, useEffect, useParams } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CommentBox from './CommentBox';
import Content from './Content';
import Feeds from './Feeds';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import { withRouter } from 'react-router';
import qs from 'qs';

const createDate = () => {
  const today = new Date();
  const timeValue = new Date();

  const betweenTime = Math.floor(
    (today.getTime() - timeValue.getTime()) / 1000 / 60
  );
  if (betweenTime < 1) return '방금전';
  if (betweenTime < 60) {
    return `${betweenTime}분전`;
  }

  const betweenTimeHour = Math.floor(betweenTime / 60);
  if (betweenTimeHour < 24) {
    return `${betweenTimeHour}시간전`;
  }

  const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
  if (betweenTimeDay < 365) {
    return `${betweenTimeDay}일전`;
  }
};

function FeedDetail() {
  const [feedData, setFeedData] = useState();
  const [commentLists, setCommentLists] = useState([]);
  const [comment, setComment] = useState('');
  const [editComment, setEditComment] = useState('');
  const [edittingCommentBoxId, setEdittingCommentBoxId] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [likeBtn, setLikeBtn] = useState(false);
  const [feedsList, setFeedsList] = useState([]);
  const [items, setItems] = useState(10);

  let location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();
  const feedId = match.params.id;
  console.log(match);

  const formOpen = id => {
    setEdittingCommentBoxId(id);
  };

  const formClose = () => {
    setEdittingCommentBoxId('');
  };

  const LIMIT = 5;

  const API = 'http://10.58.7.179:8000';

  const infiniteScroll = () => {
    let scrollHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight
    );
    let scrollTop = Math.max(
      document.documentElement.scrollTop,
      document.body.scrollTop
    );
    let clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
      setItems(items + 10);
    }
  };

  useEffect(() => {
    fetch(`${API}/postings/${feedId}`)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        setFeedData(res);
      });
  }, []);
  // http://10.58.7.179:8000/postings/1

  useEffect(() => {
    fetch(`${API}/comments/${feedId}`, {
      method: 'POST',
    })
      .then(res => res.json())
      .then(data => {
        setCommentLists(data);
        setEditComment(data.userComment);
        setIsLoggedIn(true);
      });

    window.addEventListener('scroll', infiniteScroll, true);
  }, []);

  useEffect(() => {
    fetch(`${API}/comments/${feedId}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => {
        setCommentLists(res);
        setEditComment(res.userComment);
      });
  }, [location]);

  useEffect(() => {
    fetch('Data/FeedDetail/FeedMockData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => {
        let result = res.slice(0, items);
        setFeedsList([...feedsList, ...result]);
      });
  }, [items]);

  // useEffect(() => {}, []);

  // handleLike = () => {
  //   if (localStorage.getItem('token')) {
  //     fetch(`${API}/like`, {
  //       method: 'POST',
  //       headers: {
  //         Authorization: localStorage.getItem('token'),
  //       },
  //       body: JSON.stringify({
  //         useriId: id,
  //         userProfileImg: profileImg,
  //         date: createDate(),
  //       }),
  //     })
  //       .then(response => response.json())
  //       .then(result => {
  //         if (result.message === 'SUCCESS') {
  //           alert('찜하기 성공.');
  //         } else {
  //           alert('찜하기 실패');
  //         }
  //       });
  //   } else {
  //     alert('로그인 후 사용이 가능합니다.');
  //     this.props.history.push('/login');
  //   }
  // };

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      addComment();
    }
  };

  const handleClickBtn = id => {
    const query = `?limit=${LIMIT}&offset=${id * LIMIT}`;
    history.push(`/feedDetail${query}`);
    console.log(query);
  };

  const addEditComment = (contents, id) => {
    setCommentLists(
      commentLists.map(comment => {
        if (comment.id === id) {
          return { ...comment, userComment: contents };
        } else {
          return comment;
        }
      })
    );
  };

  const onRemove = id => {
    setCommentLists(commentLists.filter(comment => comment.id !== id));
  };

  const addComment = () => {
    setCommentLists([
      {
        userId: 'blackCow',
        userComment: comment,
        Date: createDate(),
      },
      ...commentLists,
    ]);
    setComment('');
  };

  const handleLikeBtn = e => {
    setLikeBtn(!likeBtn);
  };

  if (!feedData) return <>loading</>;
  const {
    posting: {
      size,
      style,
      housing_type,
      image,
      text,
      like,
      view,
      related_user,
    },
  } = feedData;
  console.log(location.search);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(commentLists.length / 5); i++) {
    pageNumbers.push(i);
  }

  console.log(pageNumbers);
  const currentCommentPage = location.search
    ? qs.parse(location.search.slice(1)).offset / 5
    : 1;

  console.log(commentLists);
  return (
    <>
      <Container>
        <Section>
          <Article>
            <ArticleWrap>
              <DetailTopinfo>
                <div>
                  <TopTag>{size}</TopTag>
                  <TopTag>{style}</TopTag>
                  <TopTag>{housing_type}</TopTag>
                </div>
                <TopDate>{createDate()}</TopDate>
              </DetailTopinfo>
              <Content img={image} text={text} />

              <div className="buttonContainer">
                <Link to={`main/feeds=${size}`} className="tagBtn">
                  <span># </span>
                  {size}
                </Link>
                <Link to={`main/feeds=${style}`} className="tagBtn">
                  <span># </span>
                  {style}
                </Link>
                <Link to={`main/feeds=${housing_type}`} className="tagBtn">
                  <span># </span>
                  {housing_type}
                </Link>
              </div>

              <CountWrap>
                <span className="viewCount">
                  조회 {feedData.view?.toLocaleString()}
                </span>
                <span class="bullit">{'・'}</span>
                <span className="commentCount">댓글 {commentLists.length}</span>
                <span class="bullit">{'・'}</span>
                <span classname="shareCount">공유 18</span>
                <span class="bullit">{'・'}</span>
                <button>신고</button>
              </CountWrap>

              <CommentWrap>
                <CommentContainer>
                  <CountComment>
                    댓글 <span> {commentLists.length} </span>
                  </CountComment>
                  <LoginComment>
                    <img
                      src="Images/FeedDetail/profile.png"
                      alt="profile"
                    ></img>
                    <input
                      className="commentInput"
                      placeholder="칭찬과 격려의 댓글은 작성자에게 큰 힘이 됩니다 :)"
                      type="text"
                      value={comment}
                      onKeyPress={handleKeyPress}
                      onChange={e => setComment(e.target.value)}
                    ></input>
                    <CommentBtn
                      comment={comment}
                      onClick={comment => addComment(comment)}
                    >
                      <span>등록</span>
                    </CommentBtn>
                  </LoginComment>
                  <CommentList>
                    <CommentUl>
                      {commentLists.map(comment => (
                        <CommentBox
                          id={comment.id}
                          comment={comment}
                          createDate={createDate}
                          key={comment.id}
                          editComment={editComment}
                          addEditComment={addEditComment}
                          formOpen={formOpen}
                          edittingCommentBoxId={edittingCommentBoxId}
                          formClose={formClose}
                          isLoggedIn={isLoggedIn}
                          onRemove={onRemove}
                        />
                      ))}
                    </CommentUl>
                  </CommentList>
                  <PageNum>
                    {pageNumbers.map(page => {
                      return (
                        <ClickBtn
                          type="button"
                          isSelected={page === currentCommentPage}
                          onClick={() => handleClickBtn(page)}
                        >
                          <span>{page}</span>
                        </ClickBtn>
                      );
                    })}
                  </PageNum>
                </CommentContainer>
              </CommentWrap>
            </ArticleWrap>
          </Article>
          <Aside>
            <AsideContainer>
              <LikeBtn onClick={() => handleLikeBtn()}>
                {likeBtn === true ? (
                  <>
                    <img
                      src="../Images/FeedDetail/strokeLike.png"
                      alt="unlike"
                    ></img>
                    <span>{like}</span>
                  </>
                ) : (
                  <>
                    <img
                      src="../Images/FeedDetail/fillLike.png"
                      alt="like"
                    ></img>
                    <span>{like + 1}</span>
                  </>
                )}
              </LikeBtn>

              <UserProfile>
                <ProfileImg>
                  <img src={related_user[0]?.image_url} alt="userProfile"></img>
                </ProfileImg>
                <ProfileInfo>
                  <span className="id">{related_user[0].nickname}</span>
                  <span>{related_user[0]?.introduction}</span>
                </ProfileInfo>
              </UserProfile>
            </AsideContainer>
          </Aside>
        </Section>
      </Container>
      <Others>
        <TextBox>
          <h2>유저들의 비슷한 콘텐츠</h2>
        </TextBox>
        <FeedsWrap>
          <Feeds feedsList={feedsList} />
        </FeedsWrap>
      </Others>
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Section = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #f5f5f5;
  width: 100%;
  height: 100%;
`;

const Others = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #f5f5f5;
  width: 100%;
  height: 100%;
`;

const TextBox = styled.div`
  width: 1200px;
  h2 {
    margin-left: 13.5px;
    margin-top: 30px;
    font-size: 18px;
    font-weight: 700;
  }
`;

const ArticleWrap = styled.div`
  width: 770px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  letter-spacing: -0.4px;
  padding: 0 10px 0px 10px;
  line-height: 15px;
`;

const CountWrap = styled.div`
  display: flex;
  align-items: center;
  margin-top: 60px;
  color: dimgray;
  font-size: 14px;
  span {
    padding-right: 12px;
  }
  button {
    display: flex;
    font-size: 14px;
    color: dimgray;
    opacity: 50%;
  }
`;

const FeedsWrap = styled.div`
  margin-top: 30px;
  display: inline-block;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #f5f5f5;
  width: 1200px;
  height: 100%;
`;

const DetailTopinfo = styled.div`
  color: DimGray;
  width: 100%;
  margin: 40px 0 40px 0px;
  height: 16px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

const TopTag = styled.span`
  padding-right: 8px;
  margin-left: 8px;
  border-right: 1px solid DimGray;
  :last-child {
    border: none;
  }
  :first-child {
    margin: 0;
  }
`;

const TopDate = styled.div`
  padding-right: 8px;
  margin-left: 8px;
`;

const CommentWrap = styled.div`
  margin-top: 60px;
  padding: 60px 0px 30px 0px;
  border-top: 1px solid #f5f5f5;
  display: flex;
`;

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CountComment = styled.div`
  display: flex;
  margin-bottom: 30px;
  font-size: 18px;
  font-weight: 700;
  color: #333333;
  span {
    padding-left: 5px;
    color: #35c5f0;
  }
`;

const LoginComment = styled.div`
  height: 38px;
  display: flex;
  align-content: center;
  justify-content: center;
  text-align: center;
  img {
    margin-top: 4px;
    margin-right: 10px;
    width: 30px;
    height: 30px;
    border-color: burlywood;
    border-radius: 50%;
  }
  input {
    display: flex;
    outline: none;
    min-width: 400px;
    width: 667px;
    height: 38px;
    overflow: hidden;
    word-wrap: break-word;
    box-sizing: border-box;
    border-top: 1px solid #ededed;
    border-left: 1px solid #ededed;
    border-right: none;
    border-bottom: 1px solid #ededed;
    border-radius: 5px 0px 5px 5px;
    text-indent: 8px;
    &::placeholder {
      text-indent: 8px;
    }
  }
`;

const Article = styled.div`
  padding: 0 auto;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  width: 1256px;
  height: 100%;

  & .tagBtn {
    background-color: #f5f5f5;
    border-radius: 5px;
    height: 32px;
    padding: 4px 10px 4px 10px;
    margin-right: 10px;
    font-size: 16px;
    color: DimGray;
    span {
      font-size: 14px;
      color: Silver;
    }
    &:hover {
      background-color: #ededed;
    }
    text-decoration: none;
  }
`;

const CommentBtn = styled.div`
  display: flex;
  padding: 12px 15px 7px 0;
  margin: 0 -7.5px;
  height: 38px;
  border-top: 1px solid #ededed;
  border-right: 1px solid #ededed;
  border-bottom: 1px solid #ededed;
  border-left: none;
  border-radius: 0px 5px 5px 0px;
  color: #35c5f0;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  span {
    opacity: ${props => (props.comment.length > 0 ? 1 : 0.5)};
  }
`;

const CommentList = styled.div`
  display: flex;
  flex-direction: row;
`;

const CommentUl = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  list-style-type: none;
  .commentLi {
    display: flex;
    margin-bottom: 30px;
  }
`;

const PageNum = styled.button`
  display: flex;
  width: 100%;
  justify-content: center;
  text-align: center;
  padding-top: 30px;
  padding-bottom: 30px;

  span {
    padding: 0;
    text-align: center;
    display: flex;
    padding: 0;
    font-size: 16px;
    font-weight: 500;
  }
`;

const ClickBtn = styled.button`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 30px;
  height: 30px;
  margin: 4px;
  padding: 0;
  border-radius: 10px;
  background-color: ${({ isSelected }) => (isSelected ? '#35c5f0' : 'none')};
  color: ${({ isSelected }) => (isSelected ? 'white' : '#333333')};
`;

const Aside = styled.div`
  border-left: 1px solid #f5f5f5;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 450px;
  height: 1800px;
`;

const LikeBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 280px;
  height: 60px;
  margin-top: 60px;
  color: dimgray;
  background-color: #f5f5f5;
  border-radius: 10px;
  margin-left: 16px;
  img {
    margin-right: 16px;
    width: 24px;
    height: 24px;
  }
`;

const AsideContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserProfile = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 100px;
  margin-left: 16px;
`;

const ProfileImg = styled.div`
  justify-content: center;
  align-items: center;
  width: 45px;
  width: 45px;
  img {
    width: 45px;
    width: 45px;
  }
`;

const ProfileInfo = styled.div`
  padding-left: 16px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  & .id {
    font-size: 18px;
    font-weight: 700;
  }
`;

export default withRouter(FeedDetail);
