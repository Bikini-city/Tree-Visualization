import styled from '@emotion/styled';
import * as Color from '../../../style/color';

export const Container = styled.div`
  width: 40rem;
  height: 40rem;
  border: 1px solid ${Color.gray};
  border-radius: 3px;
  background-color: ${Color.white};
  position: relative;
`;

export const ImgContainer = styled.div`
  width: 100%;
`;

export const Img = styled.img`
  width: 100%;
  object-fit: contain;
  background-color: #000;
`;

export const CloseButton = styled.button`
  position: absolute;
  padding: 0;
  top: 1rem;
  right: 1rem;
  width: 2.5rem;
  height: 2.5rem;

  z-index: 100;
  border: none;
  background-color: transparent;
`;
