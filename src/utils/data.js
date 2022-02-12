import * as Color from '../style/color';

const getDateGap = (toDate, fromDate) => {
  const diffTime = Math.abs(toDate - fromDate);
  const dateGap = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return dateGap;
};

export const makeDataToChartFormat = (dataset, fromDate, toDate, gap) => {
  const dateGap = getDateGap(toDate, fromDate);
  if (dateGap < gap) return [];

  const result = [];
  const treeInfos = []; // 각 날짜에 해당하는 나무들 저장
  const innerCount = Math.ceil(dateGap / gap);

  new Array(innerCount).fill(0).forEach((_, index) => {
    treeInfos.push({ broken: 0, down: 0 });
    result.push({
      name: `${index}`,
      percentage: 100 / innerCount,
      color: Color.gray,
      textColor: Color.black,
      data: [
        { name: 'broken', percentage: 0, color: Color.gold, textColor: Color.black },
        { name: 'down', percentage: 0, color: Color.black, textColor: Color.gold },
      ],
    });
  });

  dataset.forEach((data) => {
    // TODO: 범위에 없는 애들 예외처리
    const gapOfDataAndFromDate = getDateGap(data.date, fromDate);
    const index = Math.floor(gapOfDataAndFromDate / gap);
    treeInfos[index].broken += data.broken;
    treeInfos[index].down += data.down;
  });

  treeInfos.forEach((info, index) => {
    if (info.broken === 0 && info.down === 0) return;

    result[index].data[0].percentage = Math.floor((info.broken / (info.broken + info.down)) * 100); // broken tree
    result[index].data[1].percentage = Math.floor((info.down / (info.broken + info.down)) * 100); // down tree
  });

  return result;
};

// TODO: 구현하기
export const makeDataToGraphFormat = (dataset, fromDate, toDate, gap) => {
  const dateGap = getDateGap(toDate, fromDate);
  if (dateGap < gap) return [];
  return [];
};
