
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
import Category from './components/pages/Category';


function App() {
  return (


    
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/cart' element={<Cart/>}/>
        <Route exact path='/electronics' element={<Category input='electronics'/>}/>
        <Route exact path='/jewelery' element={<Category input='jewelery'/>} />
        <Route exact path='/mens' element={<Category input="men's clothing"/>}/>
        <Route exact path='/womens' element={<Category input="women's clothing"/>}/>
      </Routes>
      
      
    </BrowserRouter>
  );
}

export default App;
