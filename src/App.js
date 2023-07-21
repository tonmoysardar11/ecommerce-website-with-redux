
import './App.css';
import Navbar from './components/layout/Navbar';
import Cart from './components/pages/Cart';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Electronics from './components/pages/Electronics';


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/cart' element={<Cart/>}/>
        <Route exact path='/electronics' element={<Electronics/>}/>
      </Routes>
      
      
    </BrowserRouter>
  );
}

export default App;
