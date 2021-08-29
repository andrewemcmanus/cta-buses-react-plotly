import './App.css';
import Home from './components/Home';
import GetBusData from './scripts/getData';

function App() {
  const busData = GetBusData();
  return (
    <div className="App">
      <header className="App-header">
        <Home boardings={busData.boardings} alightings={busData.alightings} latitudes={busData.latitudes} longitudes={busData.longitudes}/>
      </header>
    </div>
  );
}

export default App;
