import React from 'react';
import StatisticLine from './StatisticLine';

const Statistics = ({ good, neutral, bad }) => {
    return (
      <>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
      </>
      
    )
  };

  export default Statistics;
