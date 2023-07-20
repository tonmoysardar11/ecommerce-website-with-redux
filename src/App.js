
import './App.css';
import Navbar from './components/layout/Navbar';
import Cart from './components/pages/Cart';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/pages/Home';


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/cart' element={<Cart/>}/>
      </Routes>
      
      
    </BrowserRouter>
  );
}

export default App;
