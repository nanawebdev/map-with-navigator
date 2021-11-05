import Map from './components/Map/Map';
import MapForm from './components/MapForm';
import MapState from './context/map/MapState';
import ShopsState from './context/shops/ShopsState';

function App() {

  return (
    <MapState>
      <ShopsState>
        <div className="App container">
          <h1 className="text-center">
            Карта с навигацией
            <p className="text-muted fs-4">
              <small>Выберите точку входа и желаемый магазин</small>
            </p>
          </h1>
          <Map />
          <MapForm />
        </div>
      </ShopsState>
    </MapState>
  );
}

export default App;
