import styled from '@emotion/styled';
import * as Color from '../../../style/color';

export const Container = styled.div`
  width: 40rem;
  height: 40rem;
  border: 1px solid ${Color.gray};
  border-radius: 3px;
  background-color: ${Color.white};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 36rem;
`;

export const FileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 37rem;
  height: 21rem;
  border: 2px solid #CFB991;
  margin-bottom: 5px;
`;

export const UploadBtn = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #CFB991;
  width: 10rem;
  height: 3rem;
  border-radius: 3px;
  font-size: 11px;
  cursor: pointer;
`;

export const FileInput = styled.input`
  display: none;
`;

export const ImgFile = styled.img`
  width: 37rem;
  height: 21rem;
`;

export const VideoFile = styled.video`
  width: 37rem;
  height: 21rem;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 37rem;
`;

export const UserData = styled.div`
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  margin-right: 5px;
`

export const userInputLabel = styled.label`

`
export const userInput = styled.input`
  width: 11rem;
  border: none;
  border-bottom: 1px solid ${Color.gray};

  &:focus{
    outline: none;
    border-bottom: 2px solid #CFB991;
  }
`
export const SubmitBtn = styled.input`
  width: 23rem;
  height: 3.5rem;
  background-color: white;
  border-radius: 15px;
  margin-top: 5px;
  border: 2px solid #CFB991;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

  &:hover {
    background-color: #CFB991;
    cursor: pointer;
  }
`;
