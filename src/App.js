import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer';
import HomeContainer from './components/HomeContainer';
import { CartContextProvider } from './context/CartContext';
import CartContainer from './components/CartContainer';
import data from '../src/data/data'
import db from '../src/firebase/firebase'
import { collection, addDoc } from '@firebase/firestore';
import { fileUpload } from '../src/firebase/fileUpload'
import OrderContainer from './components/OrderContainer';


function App() {

  const arrayUpload = () => {

    data.forEach(async (element) => {
      const imgUrl = await fileUpload(element.imagen)
      addDoc(collection(db, 'productos'), {...element, imagen: imgUrl})
      console.log('subido correctamente');
    })
  }

  return (
    <div className="App">
      <BrowserRouter>
      <CartContextProvider>
      <NavBar/>
      {/* <button className='upload' onClick={arrayUpload}>UPLOAD</button> */}
      <Routes>
        <Route path='/' element={<HomeContainer/>}/>
        <Route path='/productos/:colorId' element={<ItemListContainer/>}/>
        <Route path= '/productos' element={<ItemListContainer/>} />
        <Route path='/producto/:itemId' element={<ItemDetailContainer />} />
        <Route path='/cart' element={<CartContainer />}/>
        <Route path='/checkout' element={<OrderContainer />} />
      </Routes>
      </ CartContextProvider>
      </BrowserRouter>
    </div>
  )
}

export default App;
