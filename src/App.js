import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route>
          <ItemListContainer/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
