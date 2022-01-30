import React, { useState } from 'react';
import Map from '../components/UI/Map';

function Main() {
  const [map, setMap] = useState();

  return <Map getMap={setMap} />;
}

export default Main;
