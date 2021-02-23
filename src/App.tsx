import { DateTime } from 'luxon';

import Example from './components/LineChat'

export const data01 = [
  {
      name: 'Page A',
      date: DateTime.local(2021, 2, 1).toFormat('yyyy/MM/dd'),
      uv: 4000,
      pv: 2400,
      amt: 2400,
  },
  {
      name: 'Page B',
      date: DateTime.local(2021, 2, 2).toFormat('yyyy/MM/dd'),
      uv: 3000,
      pv: 1398,
      amt: 2210,
  },
  {
      name: 'Page C',
      date: DateTime.local(2021, 2, 3).toFormat('yyyy/MM/dd'),
      uv: 2000,
      pv: 9800,
      amt: 2290,
  },
  {
      name: 'Page D',
      date: DateTime.local(2021, 2, 4).toFormat('yyyy/MM/dd'),
      uv: 2780,
      pv: 3908,
      amt: 2000,
  },
  {
      name: 'Page E',
      date: DateTime.local(2021, 2, 5).toFormat('yyyy/MM/dd'),
      uv: 1890,
      pv: 4800,
      amt: 2181,
  },
  {
      name: 'Page F',
      date: DateTime.local(2021, 2, 6).toFormat('yyyy/MM/dd'),
      uv: 2390,
      pv: 3800,
      amt: 2500,
  },
  {
      name: 'Page G',
      date: DateTime.local(2021, 2, 7).toFormat('yyyy/MM/dd'),
      uv: 3490,
      pv: 4300,
      amt: 2100,
  },
];

function App() {
  return (
    <div className="App">
      <div>
        <h1>サンプルグラフ０１</h1>
        <Example data={data01} />
      </div>
    </div>
  );
}

export default App;
