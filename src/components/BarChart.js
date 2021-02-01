import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  BarSeries,
  Title,
} from '@devexpress/dx-react-chart-material-ui';

import { ValueScale } from '@devexpress/dx-react-chart';


const data = [
  { hari: 'Senin', population: 0 },
  { hari: 'Selasa', population: 0 },
  { hari: 'Rabu', population: 0 },
  { hari: 'Kamis', population: 20 },
  { hari: 'Jumat', population: 0 },
  { hari: 'Sabtu', population: 0 },
  { hari: 'Minggu', population: 0 },
];

const modifyDomain = () => [0, 100];

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  render() {
    const { data: chartData } = this.state;
  

    return (
      <Paper>
        <Chart
          data={chartData}
        >
          <ValueScale name="population" modifyDomain={modifyDomain} />
          <ArgumentAxis/>
          <ValueAxis scaleName="population" position="right"/> 
          <BarSeries
            valueField="population"
            scaleName="population"
            argumentField="hari"
          />
          <Title
          text="Data Task"
          />
        </Chart>
      </Paper>
    );
  }
}
