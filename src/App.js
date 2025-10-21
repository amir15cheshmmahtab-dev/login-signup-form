// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import SignUp from './component/SignUp';
import Login from './component/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/signup' element={ <SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Login/>}/>
      </Routes>
     
      
    </div>
  );
}

export default App;
