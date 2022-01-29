import React from 'react';
import * as Style from './styled';

function Layout({ children }) {
  return (
    <Style.Container>
      <Style.Header />
      <Style.Nav />
      {children}
    </Style.Container>
  );
}

export default Layout;
