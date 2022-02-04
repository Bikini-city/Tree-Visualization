import React, { useEffect, useState } from 'react';
import Map from '../../components/UI/Map';

import Icon from '../../components/UI/Icon';
import * as Style from './styled';
import * as Color from '../../style/color';

// FIXME: remove
const DUMMY_MARKERS = [{ lng: -86.89871737888747, lat: 40.41866254968954 }];

function Main() {
  const [map, setMap] = useState();
  const [showTree, setShowTree] = useState(false);

  return (
    <Style.Container>
      <Map getMap={setMap} markers={DUMMY_MARKERS} />
      <Style.AddButton>
        <Icon icon="plus" />
      </Style.AddButton>
      <Style.TreeButton onClick={() => setShowTree(!showTree)}>
        <Icon icon="tree" color={showTree ? Color.gray : Color.black} />
      </Style.TreeButton>
    </Style.Container>
  );
}

export default Main;
