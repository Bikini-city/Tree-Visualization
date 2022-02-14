import React, { useEffect, useState } from 'react';
import Map from '../../components/UI/Map';
import CreateModal from '../../components/UI/CreateModal'

import Icon from '../../components/UI/Icon';
import { getDatas } from '../../api/data';
import * as Style from './styled';
import * as Color from '../../style/color';
import MarkerModal from '../../components/UI/MarkerModal';

function Main() {
  const [dataset, setDataset] = useState([{ id: 1, lng: -86.89871737888747, lat: 40.41866254968954, src: '' }]);
  const [selectedData, setSelectedData] = useState();
  const [map, setMap] = useState();
  const [showTree, setShowTree] = useState(false);

  const initDataset = async () => {
    const datasetFromServer = await getDatas();
    setDataset(datasetFromServer);
  };

  useEffect(() => {
    initDataset();
  }, []);

  const onClickMarker = (id) => {
    const data = dataset.find((d) => d.id === id);
    setSelectedData(data);
  };

  const closeModal = () => {
    setSelectedData(undefined);
  };

  return (
    <Style.Container>
      {selectedData && <MarkerModal data={selectedData} closeModal={closeModal} />}
      <CreateModal />
      <Map getMap={setMap} markers={dataset} onClickMarker={onClickMarker} />
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
