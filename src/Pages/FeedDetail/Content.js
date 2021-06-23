import React from 'react';
import styled from 'styled-components';

class Content extends React.Component {
  render() {
    const { img, text } = this.props;
    return (
      <ContentWrap>
        <img alt="content" src={img} />
        <ContentsText> {text} </ContentsText>
      </ContentWrap>
    );
  }
}

const ContentWrap = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  img {
    display: flex;
    width: 100%;
  }
`;

const ContentsText = styled.div`
  margin: 30px 0 30px 0;
  display: flex;
  width: 100%;
  white-space: pre-line;
`;

export default Content;
