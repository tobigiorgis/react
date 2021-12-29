import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path= '/productos' element={<ItemListContainer/>} />
        <Route path='/productos/:id' element={<ItemDetailContainer />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
