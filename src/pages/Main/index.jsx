import React, { useEffect, useState } from 'react';
import Map from '../../components/UI/Map';
import { addMarkersToMap } from '../../components/UI/Map/Marker';

import Icon from '../../components/UI/Icon';
import * as Style from './styled';

// FIXME: remove
const DUMMY_MARKERS = [{ lng: -86.89871737888747, lat: 40.41866254968954 }];

function Main() {
  const [map, setMap] = useState();

  useEffect(() => {
    if (map) {
      addMarkersToMap({ map, markers: DUMMY_MARKERS });
    }
  }, [map]);

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
