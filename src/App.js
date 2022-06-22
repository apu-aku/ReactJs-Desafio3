//@ts-check
import './App.css';
import NavBar from './Components/NavBar/NavBar.jsx';
import CartWidget from './Components/CartWidget/CartWidget.jsx';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <main> 
      <NavBar>
        <CartWidget/>
      </NavBar>
      
      <ItemListContainer/>
    </main>
  );
}

export default App;
