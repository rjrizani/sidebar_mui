import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  PieSeries,
  Title,
  Legend, 
  Tooltip,
} from '@devexpress/dx-react-chart-material-ui';

import { Animation, EventTracker } from '@devexpress/dx-react-chart';

const data = [
  { name: 'Do', task: 15 },
  { name: 'Progress', task: 20 },
  { name: 'Done', task: 250 },
  { name: 'Cancel', task: 50 },
];

export default class PieChart extends React.PureComponent {
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
          <PieSeries
            valueField="task"
            argumentField="name"
          />
          <Title
            text="Data Task Bulan ini"
          />
          <Animation />
          <EventTracker />
          <Tooltip />
          <Legend />
        </Chart>
      </Paper>
    );
  }
}