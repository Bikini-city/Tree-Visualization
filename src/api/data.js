import axios from 'axios';

/**
 * id : number
 * lat : number
 * lng : number
 * src : string
 * date: string
 * broken : number
 * down : number
 */
export const getDatas = async () => {
  const response = await axios({
    url: '/datas',
    method: 'GET',
  });

  return response.data;
};

export const createDatas = async ({ dataset, date, lat, lng }) => {
  const response = await axios({
    url: '/datas/uploads',
    method: 'POST',
    data: {
      dataset,
      date,
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
