import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import LandingPage from './Components/LandingPage/LandingPage';
import Details from './Components/Detail';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route exact path = '/' element={<LandingPage/>} />
        <Route path = '/Home' element={<Home/>} />
        <Route exact path='/zapatillas/:id' element={<Details/>}/>
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
