import React, { useState } from 'react';
import Map from '../../components/UI/Map';
import Icon from '../../components/UI/Icon';
import * as Style from './styled';

function Main() {
  const [map, setMap] = useState();

  return (
    <Style.Container>
      <Map getMap={setMap} />
      <Style.AddButton>
        <Icon icon="plus" />
      </Style.AddButton>
    </Style.Container>
  );
}

export default Main;
