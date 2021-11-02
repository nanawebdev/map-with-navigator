import Map from './components/Map/Map';
import './App.scss'
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <h1 className="text-center">
        Карта с навигацией
        <p className="text-muted">
          <small>Выберите точку входа и желаемый магазин</small>
        </p>
      </h1>
      <Map />

      <Search />
    </div>
  );
}

export default App;
