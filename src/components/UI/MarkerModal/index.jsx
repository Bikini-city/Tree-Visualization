import React from 'react';
import Icon from '../Icon';
import ModalContainer from '../../Container/ModalContainer';
import * as Style from './styled';

function MarkerModal({ data, closeModal }) {
  const imgExtList = ['jpg', 'png', 'jpeg'];
  const dataExt = data.src.replace(/(\w|-|_|\/)+./, '');

  return (
    <ModalContainer closeModal={closeModal}>
      <Style.CloseButton onClick={closeModal}>
        <Icon icon="close" />
      </Style.CloseButton>
      <Style.Container>
        {imgExtList.includes(dataExt) ? <Style.Img src={data.src} /> : <Style.Video src={data.src} controls />}
      </Style.Container>
    </ModalContainer>
  );
}

export default MarkerModal;
