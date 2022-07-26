import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import Notfound from './components/Notfound/Notfound';
import Services from './components/Services/Services';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Address from './components/address/Address';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/home' element={<Home></Home>}>

          </Route>
          <Route path='/' element={<Home></Home>}>

          </Route>
          <Route exact path='/about' element={<About></About>}>

          </Route>
          <Route path='/services' element={<Services></Services>}>

          </Route>
          <Route path='/address' element={<Address></Address>}>

          </Route>
          <Route path='*' element={<Notfound></Notfound>}>

          </Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div >
  );
}



export default App;
