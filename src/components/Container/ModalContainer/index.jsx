import React from 'react';
import ReactDOM from 'react-dom';
import * as Style from './styled';

function ModalContainer({ active, children }) {
  const modalTag = document.getElementById('modal');

  return (
    modalTag &&
    ReactDOM.createPortal(
      <Style.Overlay active={active}>
        <Style.Container>{children}</Style.Container>
      </Style.Overlay>,
      modalTag,
    )
  );
}

export default ModalContainer;
