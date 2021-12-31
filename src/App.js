import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer';
import HomeContainer from './components/HomeContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomeContainer/>}/>
        <Route path='/productos/:colorId' element={<ItemListContainer/>}/>
        <Route path= '/productos' element={<ItemListContainer/>} />
        <Route path='/producto/:itemId' element={<ItemDetailContainer />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
