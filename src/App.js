import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer';
import HomeContainer from './components/HomeContainer';
import { CartContextProvider } from './context/CartContext';
import CartContainer from './components/CartContainer';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <CartContextProvider>
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomeContainer/>}/>
        <Route path='/productos/:colorId' element={<ItemListContainer/>}/>
        <Route path= '/productos' element={<ItemListContainer/>} />
        <Route path='/producto/:itemId' element={<ItemDetailContainer />} />
        <Route path='/cart' element={<CartContainer />}/>
      </Routes>
      </ CartContextProvider>
      </BrowserRouter>
    </div>
  )
}

export default App;
