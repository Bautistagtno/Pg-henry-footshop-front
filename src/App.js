import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import LandingPage from './Components/LandingPage/LandingPage';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        
    <Route exact path = '/' element={<LandingPage/>} />
    <Route path = '/Home' element={<Home/>} />
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
