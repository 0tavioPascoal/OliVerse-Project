//imports
import {BrowserRouter, Routes, Route } from 'react-router-dom'

//components
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

//Pages
import Loja from  './pages/Loja/Loja';
import Contact from  './pages/Contatos/Contact';
import Mapa from  './pages/Mapa/Mapa';
import Regras from  './pages/Regras/Regras';
import Wiki from  './pages/wiki/Wiki';
import Home from  './pages/Home/Home';

//css
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Loja' element={<Loja/>}/>
          <Route path='/wiki' element={<Wiki/>}/>
          <Route path='/mapa' element={<Mapa/>}/>
          <Route path='/regras' element={<Regras/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </div>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
