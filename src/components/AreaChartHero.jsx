// components/AreaChartHero.js or .jsx
import React from 'react';
import { AreaChart } from '@tremor/react';

const chartdata = [
  {
    date: 'Jan 22',
    SemiAnalysis: 2890,
    'The Pragmatic Engineer': 2338,
  },
  // diğer veri noktaları
];

const dataFormatter = (number) =>
  `$${Intl.NumberFormat('us').format(number).toString()}`;

export const AreaChartHero = () => {
  return (
    <AreaChart
      className="h-80"
      data={chartdata}
      index="date"
      categories={['SemiAnalysis', 'The Pragmatic Engineer']}
      colors={['indigo', 'rose']}
      valueFormatter={dataFormatter}
      yAxisWidth={60}
      onValueChange={(v) => console.log(v)}
    />
  );
};
