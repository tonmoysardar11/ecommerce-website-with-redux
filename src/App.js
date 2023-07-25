
import './App.css';
import Navbar from './components/layout/Navbar';
import Cart from './components/pages/Cart';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Electronics from './components/pages/Electronics';
import Jewelery from './components/pages/Jewelery';
import Mens from './components/pages/Mens';
import Womens from './components/pages/Womens';
import Viewer from './components/pages/Viewer';


function App() {
  return (


    
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/cart' element={<Cart/>}/>
        <Route exact path='/electronics' element={<Electronics/>}/>
        <Route exact path='/jewelery' element={<Jewelery/>} />
        <Route exact path='/mens' element={<Mens/>}/>
        <Route exact path='/womens' element={<Womens/>}/>
        <Route exact path='/view' element={<Viewer/>}/>
      </Routes>
      
      
    </BrowserRouter>
  );
}

export default App;
