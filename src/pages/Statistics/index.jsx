import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import DateButton from '../../components/UI/DateButton';
import * as Style from './styled';

import 'react-datepicker/dist/react-datepicker.css';

function Statistics() {
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());

  const changeFromDate = (date) => {
    setFromDate(date);
  };

  const changeToDate = (date) => {
    if (fromDate > date) {
      setFromDate(date);
    }
    setToDate(date);
  };

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
          <Style.RangeInput type="range" min={0} max={5} />
        </Style.RangeWrapper>
      </Style.GraphWrapper>
      <Style.ChartWrapper />
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
