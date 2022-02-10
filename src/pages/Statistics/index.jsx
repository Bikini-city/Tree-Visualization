import React, { useState, useEffect, useRef } from 'react';
import DatePicker from 'react-datepicker';
import makePieChart from 'arc-pie-chart';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import DateButton from '../../components/UI/DateButton';
import * as Style from './styled';
import { chartDummyData, graphDummyData } from '../../common/data';

import 'react-datepicker/dist/react-datepicker.css';

const DATA_DEPTH = 3;
const ARC_CHART_SIZE = 430;
const RANGE_MAPPINDG = {
  1: '10D',
  2: '1M',
  3: '3M',
  4: '6M',
  5: '1Y',
};

function Statistics() {
  const svg = useRef(null);
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [range, setRange] = useState(3);

  const changeFromDate = (date) => {
    setFromDate(date);
  };

  const changeToDate = (date) => {
    if (fromDate > date) {
      setFromDate(date);
    }
    setToDate(date);
  };

  useEffect(() => {
    if (svg.current) {
      svg.current.appendChild(makePieChart(chartDummyData, DATA_DEPTH, ARC_CHART_SIZE));
    }
  }, []);

  return (
    <Style.Container>
      <Style.TitleWrapper>
        <Style.Title>Statistics</Style.Title>
        <Style.DateList>
          <Style.DateItem>
            <Style.DateTitle>From</Style.DateTitle>
            <DatePicker selected={fromDate} onChange={changeFromDate} customInput={<DateButton />} maxDate={toDate} />
          </Style.DateItem>
          <Style.DateItem>
            <Style.DateTitle>To</Style.DateTitle>
            <DatePicker selected={toDate} onChange={changeToDate} customInput={<DateButton />} maxDate={new Date()} />
          </Style.DateItem>
        </Style.DateList>
      </Style.TitleWrapper>
      <Style.GraphWrapper>
        <Style.RangeWrapper>
          <Style.RangeInput type="range" min={1} max={5} value={range} onChange={(e) => setRange(e.target.value)} />
          <Style.RangeText>{RANGE_MAPPINDG[range]}</Style.RangeText>
        </Style.RangeWrapper>
        <LineChart
          width={800}
          height={300}
          data={graphDummyData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </Style.GraphWrapper>
      <Style.ChartWrapper ref={svg} />
      <Style.CountWrapper>
        <Style.CountList>
          <Style.CountItem>
            <Style.CountTitle>Fallen</Style.CountTitle>
            <Style.CountValue>12</Style.CountValue>
          </Style.CountItem>
          <Style.CountItem>
            <Style.CountTitle>Broken</Style.CountTitle>
            <Style.CountValue>12</Style.CountValue>
          </Style.CountItem>
        </Style.CountList>
      </Style.CountWrapper>
    </Style.Container>
  );
}

export default Statistics;
