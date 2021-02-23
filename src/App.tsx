import logo from './logo.svg';
import './App.css';
import { DateTime } from 'luxon';

import Example from './components/LineChat'

export const data01 = [
  { date: DateTime.local(2021, 2, 1), max: 10, min: 1 },
  { date: DateTime.local(2021, 2, 2), max: 12, min: 4 },
  { date: DateTime.local(2021, 2, 3), max: 18, min: 8 },
  { date: DateTime.local(2021, 2, 4), max: 10, min: 0 },
  { date: DateTime.local(2021, 2, 5), max: 9, min: 1 },
  { date: DateTime.local(2021, 2, 6), max: 13, min: 2 },
  { date: DateTime.local(2021, 2, 7), max: 16, min: 5 },
]

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header> */}
      <div>
        <h1>test</h1>
        <Example />
      </div>
    </div>
  );
}

export default App;
