import styled from 'styled-components';
import { useState } from 'react';

const CommentBox = ({
  id,
  addEditComment,
  createDate,
  comment,
  formOpen,
  edittingCommentBoxId,
  formClose,
  isLoggedIn,
  onRemove,
}) => {
  const [newComment, setNewComment] = useState(comment.userComment);

  const handleEdit = e => {
    setNewComment(e.target.value);
    addEditComment(e.target.value, id);
  };

  const handleDate = data => {
    createDate(data);
  };

  const handleOnRemove = () => {
    onRemove(id);
  };

  return (
    <>
      <li className="commentLi">
        <CommentContainer>
          <img src="Images/FeedDetail/profile.png" alt="profile"></img>
          <div className="commentContents">
            {edittingCommentBoxId !== comment.id ? (
              <CommentTop>
                <span className="commentUserId">{comment.user_nickname}</span>

                <span className="commentText">{comment.text}</span>
              </CommentTop>
            ) : (
              <FormEdit onBlur={formClose}>
                <span className="commentUserId">{comment.user}</span>

                <input value={newComment} onChange={e => handleEdit(e)}></input>
                <CommentBtn comment={comment} onClick={formClose}>
                  <span>확인</span>
                </CommentBtn>
              </FormEdit>
            )}
            {edittingCommentBoxId !== comment.id ? (
              <CommentInfo>
                <span className="commentDate">{() => handleDate()}</span>
                <span class="bullit">{'・'}</span>
                <button>좋아요</button>
                <span class="bullit">{'・'}</span>
                <button>답글달기</button>
                {isLoggedIn === true && (
                  <>
                    <span class="bullit">{'・'}</span>
                    <button onClick={() => formOpen(comment.id)}>
                      수정하기
                    </button>
                    <span class="bullit">{'・'}</span>
                    <button onClick={() => handleOnRemove(id)}>삭제하기</button>
                  </>
                )}
              </CommentInfo>
            ) : null}
          </div>
        </CommentContainer>
      </li>
    </>
  );
};
const CommentContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 30px;

  .commentUserId {
    display: flex;
    font-weight: 700;
    padding-right: 16px;
    align-items: flex-start;
  }

  .commentText {
    display: flex;
    align-items: flex-start;
  }

  img {
    display: flex;
    margin-right: 10px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
`;

const CommentInfo = styled.div`
  display: flex;
  height: 19px;
  flex-direction: row;
  align-items: center;
  & .commentDate {
    padding-top: 5px;
    font-size: 12px;
    padding-right: 6px;
    color: #757575;
  }
  span {
    display: flex;
    color: #757575;
    font-size: 12px;
  }
  button {
    display: flex;
    color: #757575;
    font-size: 12px;
    font-weight: 600;
  }
`;

const CommentTop = styled.div`
  display: flex;
  flex-direction: row;
  span {
    display: flex;
  }
  button {
    display: flex;
  }
`;

const FormEdit = styled.div`
  background-color: none;
  display: flex;
  & .commentUserId {
    display: flex;
    font-weight: 700;
    padding-right: 16px;
    align-items: center;
  }
  input {
    display: flex;
    outline: none;
    min-width: 400px;
    width: 550px;
    height: 30px;
    overflow: hidden;
    word-wrap: break-word;
    box-sizing: border-box;
    border-top: 1px solid #ededed;
    border-left: 1px solid #ededed;
    border-right: none;
    border-bottom: 1px solid #ededed;
    border-radius: 5px 0px 5px 5px;
    text-indent: 8px;
  }
`;

const CommentBtn = styled.div`
  display: flex;
  padding: 8px 15px 8px 0;
  margin: 0 -7.5px;
  height: 30px;
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
export default CommentBox;
