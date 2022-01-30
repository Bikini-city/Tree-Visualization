import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../UI/Icon';
import * as Style from './styled';

function Layout({ children }) {
  return (
    <Style.Container>
      <Style.Header>
        <Icon icon="purdue" width="7rem" />
      </Style.Header>
      <Style.Nav>
        <Style.IconWrapper>
          <Link to="/">
            <Icon color="#9e7715" icon="home" width="70%" />
          </Link>
        </Style.IconWrapper>
        <Style.IconWrapper>
          <Link to="/statistics">
            <Icon color="#9e7715" icon="statistics" width="70%" />
          </Link>
        </Style.IconWrapper>
      </Style.Nav>
      <Style.Children>{children}</Style.Children>
    </Style.Container>
  );
}

export default Layout;
