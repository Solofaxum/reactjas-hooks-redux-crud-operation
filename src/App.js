import './App.css';
import Home from './components/Home';
import Create from '../src/components/Update';
import Update from './components/Update';
import {BrowserRouter,  Routes,Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter >
      <Routes >
        CRUD Operation 
        <Route path='/' element={<Home/>}></Route>
        <Route path='/create' element={<Create/>}></Route>
        <Route path='/edit:id' element={<Update/>}></Route>
      </Routes>  
    </BrowserRouter>
  );
}

export default App;
