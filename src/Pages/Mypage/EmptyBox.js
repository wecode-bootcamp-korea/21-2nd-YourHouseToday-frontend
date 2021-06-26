import React from 'react';
import styled from 'styled-components';

function EmptyBox() {
  return (
    <>
      <CardItemWrap>
        <CardItem>
          <Empty />
        </CardItem>
        <CardItem>
          <Empty />
        </CardItem>
        <CardItem>
          <Empty />
        </CardItem>
        <CardItem>
          <Empty />
        </CardItem>
      </CardItemWrap>
    </>
  );
}

export default EmptyBox;

const CardItemWrap = styled.div`
  display: flex;
`;

const CardItem = styled.div`
  position: absolute;
  padding-right: 10px;
  padding-left: 10px;
  width: 100%;
  min-height: 1px;
  flex: 0 0 25%;
  max-width: 25%;
  z-index: 0;

  &:nth-child(2) {
    left: 25%;
  }

  &:nth-child(3) {
    left: 50%;
  }

  &:nth-child(4) {
    left: 75%;
  }
`;

const Empty = styled.div`
  &:after {
    display: block;
    padding-top: 100%;
    background-color: #f5f5f5;
    content: '';
  }
`;
