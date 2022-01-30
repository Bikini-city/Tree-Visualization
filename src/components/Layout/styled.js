import styled from '@emotion/styled';

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-areas:
    'header header'
    'nav main';
  grid-template-columns: 8rem 20fr;
  grid-template-rows: 8rem 10fr;
`;

export const Header = styled.header`
  grid-area: header;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-left: 0.5rem;
  z-index: 1000;
  background-color: #fff;
  border-bottom: 2px solid #9e7715;
`;

export const Nav = styled.nav`
  grid-area: nav;
  padding: 2rem 0;
  width: 100%;
  height: 100%;
  z-index: 500;
  background-color: #fff;
  border-right: 2px solid #9e7715;
`;

export const IconWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  cursor: pointer;

  a {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Children = styled.div`
  grid-area: main;
`;
