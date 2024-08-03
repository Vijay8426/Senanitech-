import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';
import Semiconductor from './components/Semiconductor';
import Footer from './components/Footer';
import Technical from './components/Technical';
import SysSoln from './components/SysSoln';
import './App.css';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div >
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about-us' element={<AboutUs/>}></Route>
        <Route path='/semiconductor' element={<Semiconductor/>}></Route>
        <Route path='/technological-services' element={<Technical/>}></Route>
        <Route path='/system-soln' element={<SysSoln/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
      <Footer/>
      
    </div>
  );
}

export default App;
