import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
  <div className="App">
    <NavBar />
    <ItemListContainer greeting="Espacio provisto para insertar la galeria de productos" />
  </div>
  );
}

export default App;

