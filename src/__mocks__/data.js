export const makeDataMockup = ({
  id = Math.floor(Math.random() * 100),
  lat = 40.42409882753435,
  lng = -86.91777942906364,
  src = '/media/%EC%84%9C%EB%AA%85_gtv1QSR.jpg',
  date = '2022-02-09',
  broken = 4,
  down = 3,
} = {}) => ({
  id,
  lat,
  lng,
  src,
  date,
  broken,
  down,
});
