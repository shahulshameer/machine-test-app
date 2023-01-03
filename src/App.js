import './App.scss';
import Home from './pages/home/Home';
import Signin from './pages/signin/Signin';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={ <Signin /> } />
        <Route path="/home"  element={ <Home /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
