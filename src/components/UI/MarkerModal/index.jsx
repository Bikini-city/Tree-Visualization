import React from 'react';
import Icon from '../Icon';
import ModalContainer from '../../Container/ModalContainer';
import * as Style from './styled';

function MarkerModal({ imgSrc, closeModal }) {
  return (
    <ModalContainer>
      <Style.CloseButton onClick={closeModal}>
        <Icon icon="close" />
      </Style.CloseButton>
      <Style.Container>
        <Style.ImgContainer>
          <Style.Img src={imgSrc} alt="marker image" />
        </Style.ImgContainer>
      </Style.Container>
    </ModalContainer>
  );
}

export default MarkerModal;
