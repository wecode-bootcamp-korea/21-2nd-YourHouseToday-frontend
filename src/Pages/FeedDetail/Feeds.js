import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

const Feeds = ({ feedsList }) => {
  const history = useHistory();
  return (
    <>
      {feedsList.length &&
        feedsList.map(feed => (
          <FeedsWrap>
            <img
              onClick={() => history.push(`FeedDetail/${feed.id}`)}
              alt="contents"
              src={feed.img}
            />
          </FeedsWrap>
        ))}
    </>
  );
};

const FeedsWrap = styled.div`
  display: inline-block;
  position: relative;
  width: 250px;
  max-width: 250px;
  max-height: 250px;
  margin: 13.5px;
  border-radius: 10px;
  overflow: hidden;
  flex-wrap: wrap;
  &:nth-child(4n) {
    flex-basis: 0;
  }

  img {
    position: relative;
    width: 250px;
    max-width: 100%;
    height: 250px;
    margin-bottom: 8px;
    border-radius: 10px;
    object-fit: cover;
    cursor: pointer;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    &:hover {
      -webkit-transform: scale(1.05);
      transform: scale(1.05);
    }
  }
`;
export default withRouter(Feeds);
