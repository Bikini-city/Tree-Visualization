import React from 'react';
import { Routes, Route } from 'react-router-dom';
import * as Path from './Routes';
import MainPage from './pages/Main';
import StatisticsPage from './pages/Statistics';

function App() {
  return (
    <Routes>
      <Route exact path={Path.mainPath} element={<MainPage />} />
      <Route path={Path.statisticsPath} element={<StatisticsPage />} />
    </Routes>
  );
}

export default App;
