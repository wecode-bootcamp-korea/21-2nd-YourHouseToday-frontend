import React from 'react';
import styled from 'styled-components';

function UploadPhoto({ showImg, previewUrl, imgFile }) {
  return (
    <PhotoBox>
      <InputLable htmlFor="uploadbutton" isfile={previewUrl !== ''}>
        <i className="fas fa-camera"></i>
        사진 올리기
        <span>(*최대 1장까지)</span>
      </InputLable>
      <PhotoInput
        id="uploadbutton"
        type="file"
        accept="image/jpg,image/png,image/jpeg,image/gif"
        onChange={showImg}
      />
      {previewUrl && <ViewImg alt="업로드이미지" src={previewUrl} />}
    </PhotoBox>
  );
}

const PhotoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const InputLable = styled.label`
  display: ${props => (props.isfile ? 'none' : 'flex')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 500px;
  margin-top: 70px;
  border: 1px solid #ebebeb;
  border-bottom-color: #e2e2e2;
  border-radius: 10px;
  vertical-align: middle;
  background-color: #ededed;
  font-weight: 700;
  font-size: 16px;
  color: #828c94;
  cursor: pointer;

  i {
    margin-bottom: 20px;
    font-size: 60px;
  }

  span {
    margin-top: 20px;
    font-weight: 400;
    font-size: 12px;
  }
`;

const PhotoInput = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
`;

const ViewImg = styled.img`
  position: absolute;
  width: 500px;
  margin-top: 70px;
  border-radius: 10px;
  z-index: 1;
`;
export default UploadPhoto;
