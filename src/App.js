import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import LandingPage from './Components/LandingPage/LandingPage';
import Details from './Components/Detail';
import Formulario from './Components/Formulario/Formulario'
import Login from './Components/Login/Login';
import Productos from './Components/Productos/Productos';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path = '/' element={<LandingPage/>} />
        <Route path = '/Home' element={<Home/>} />
        <Route exact path = '/crear' element={<Formulario/>} />
        <Route exact path='/zapatillas/:id' element={<Details/>}/>
        <Route path = '/zapatillas' element={<Productos/>} />
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
