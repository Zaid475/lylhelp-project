import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Templatelist from './components/Templatelist';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App">
    
      
      <Routes>
      <Route path='/' element={<HomePage/>} ></Route>

        <Route path='/templatelist' element={<Templatelist/>} ></Route>




      </Routes>
      
    </div>
  );
}

export default App;
