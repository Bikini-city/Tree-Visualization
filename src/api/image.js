import axios from 'axios';

export const getDatas = async () => {
  const response = await axios({
    url: '/datas',
    method: 'GET',
    data: {},
  });

  return response.data;
};

export const createDatas = async ({ dataset, lat, lng }) => {
  const response = await axios({
    url: '/datas',
    method: 'POST',
    data: {
      dataset,
      lat,
      lng,
    },
  });

  return response.data;
};

export const deleteDatas = async ({ dataId }) => {
  const response = await axios({
    url: `/datas/${dataId}`,
    method: 'DELETE',
  });

  return response.data;
};

export const getDataImageOrVideo = async ({ dataId }) => {
  const response = await axios({
    url: `/datas/${dataId}`,
    method: 'GET',
  });

  return response.data;
};
