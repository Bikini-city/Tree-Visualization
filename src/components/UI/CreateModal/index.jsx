import React, { useState, useEffect } from 'react';
import ModalContainer from '../../Container/ModalContainer';
import * as Style from './styled';
import { createDatas } from '../../../api/data';

function CreateModal({ closeModal }) {
  const [userFile, setUserFile] = useState({
    file: [],
    previewURL: '',
  });

  const [userData, setUserData] = useState({
    date: new Date().toUTCString(),
    lng: 0,
    lat: 0,
  });

  const uploadFile = (e) => {
    e.stopPropagation();
    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onloadend = () => {
      setUserFile({
        file,
        previewURL: reader.result,
      });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const getPreview = () => {
    if (!userFile.file[0]) return <></>;
    const fileExt = userFile.file[0].name.split('.').pop().toLowerCase();
    const extList = ['mp4', 'jpg', 'png', 'jpeg'];
    let preview = null;

    if (userFile.file.length !== 0 && extList.includes(fileExt)) {
      preview = userFile.file[0].type.includes('image/') ? (
        <Style.ImgFile name="dataset" src={userFile.previewURL} />
      ) : (
        <Style.VideoFile name="dataset" src={userFile.previewURL} controls />
      );
    }
    return preview;
  };

  const inputData = (e, key) => {
    setUserData({
      ...userData,
      [key]: e.target.value,
    });
  };

  // -86 40
  const createDataset = () => {
    const formData = new FormData();
    formData.append('src', userFile.file);
    formData.append('date', userData.date);
    formData.append('lat', userData.lat);
    formData.append('lng', userData.lng);

    createDatas(formData);
  };

  return (
    <ModalContainer closeModal={closeModal}>
      <Style.Container>
        <Style.FileContainer>{getPreview()}</Style.FileContainer>
        <Style.FileInput id="upload-file" type="file" accept="image/*, video/*" multiple onChange={uploadFile} />
        <Style.UploadBtn htmlFor="upload-file">Select a file</Style.UploadBtn>
        <Style.InputContainer>
          <Style.UserData>
            <Style.UserInputLabel htmlFor="date">Date</Style.UserInputLabel>
            <Style.UserInput
              type="date"
              id="date"
              name="date"
              value={userData.date}
              onChange={(e) => inputData(e, 'date')}
            />
          </Style.UserData>
          <Style.UserData>
            <Style.UserInputLabel htmlFor="lng">Longitude</Style.UserInputLabel>
            <Style.UserInput
              type="number"
              id="lng"
              name="lng"
              value={userData.lng}
              onChange={(e) => inputData(e, 'lng')}
            />
          </Style.UserData>
          <Style.UserData>
            <Style.UserInputLabel htmlFor="lat">Latitude</Style.UserInputLabel>
            <Style.UserInput
              type="number"
              id="lat"
              name="lat"
              value={userData.lat}
              onChange={(e) => inputData(e, 'lat')}
            />
          </Style.UserData>
        </Style.InputContainer>
        <Style.SubmitBtn onClick={createDataset}>Submit</Style.SubmitBtn>
      </Style.Container>
    </ModalContainer>
  );
}

export default CreateModal;
