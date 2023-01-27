import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, ColumnSeries, DataLabel} from '@syncfusion/ej2-react-charts';

import { Header, Pie as PieChart } from '../../components';
import { pieChartData } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

const Pie = () => {
  const { currentMode } = useStateContext();

  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category="Pie" title="Project Cost Breakdown" />
      <div className='w-full'>
        <PieChart
          id='chart-pie'
          data={pieChartData}
          legendVisibility height="full" 
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
          />
      </div>
    </div>
  )
}

export default Pie