import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'
import ItemDetailContainer from "./containers/ItemDetailContainer";

function App() {
  return (
  <div className="App">
    <NavBar />
    {/* <ItemListContainer /> */}
    <ItemDetailContainer />
  </div>
  );
}

export default App;

