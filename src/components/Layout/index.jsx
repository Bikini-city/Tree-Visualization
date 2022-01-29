import React from 'react';
import Icon from '../UI/Icon';
import * as Style from './styled';

function Layout({ children }) {
  return (
    <Style.Container>
      <Style.Header>
        <Icon icon="purdue" width="5rem" />
      </Style.Header>
      <Style.Nav>
        <Style.IconWrapper>
          <Icon color="#9e7715" icon="home" width="70%" />
        </Style.IconWrapper>
        <Style.IconWrapper>
          <Icon color="#9e7715" icon="statistics" width="70%" />
        </Style.IconWrapper>
      </Style.Nav>
      {children}
    </Style.Container>
  );
}

export default Layout;
