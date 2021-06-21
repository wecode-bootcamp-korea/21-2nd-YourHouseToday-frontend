import React from 'react';
import styled from 'styled-components';

function Badge(props) {
  return (
    <TagListItem onClick={() => props.deleteFilter(props.tapId, props.item)}>
      <TagButton>
        {props.name}
        {props.color && <ColorIcon color={props.color} />}
        <Svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
          <path d="M6 4.94L3.879 2.817l-1.061 1.06L4.939 6 2.818 8.121l1.06 1.061L6 7.061l2.121 2.121 1.061-1.06L7.061 6l2.121-2.121-1.06-1.061L6 4.939zM6 12A6 6 0 1 1 6 0a6 6 0 0 1 0 12z" />
        </Svg>
      </TagButton>
    </TagListItem>
  );
}

export default Badge;

const TagButton = styled.button`
  display: block;
  padding: 3px 8px;
  background-color: #35c5f0;
  color: #fff;
  border-color: #35c5f0;
  font-size: 15px;
  line-height: 18px;
  font-weight: 700;
  border-radius: 26px;
`;

const Svg = styled.svg`
  margin: 0 -4px 0 7px;
  vertical-align: -1px;
  color: #fff;
`;

const TagListItem = styled.li`
  display: inline-block;
  margin: 0 2px;
  padding: 2px 0;
`;

const ColorIcon = styled.span`
  position: relative;
  vertical-align: -4px;
  display: inline-block;
  width: 18px;
  height: 18px;
  margin-left: 5px;
  background-color: ${props => props.color};
  border-radius: 18px;
`;
