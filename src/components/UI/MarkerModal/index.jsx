import React from 'react';
import Icon from '../Icon';
import ModalContainer from '../../Container/ModalContainer';
import * as Style from './styled';

function MarkerModal({ data, closeModal }) {
  return (
    <ModalContainer closeModal={closeModal}>
      <Style.CloseButton onClick={closeModal}>
        <Icon icon="close" />
      </Style.CloseButton>
      <Style.Container>
        <Style.ImgContainer>
          <Style.Img src={data.src} alt="marker image" />
        </Style.ImgContainer>
      </Style.Container>
    </ModalContainer>
  );
}

export default MarkerModal;
