import './App.css';
import {Routes, Route} from "react-router-dom"
import { Signup } from './components/signup';
import { Login } from './components/login';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
        <h1>Application</h1>
        <Routes>
          <Route path='/signup' element = {<Signup/>}></Route>
          <Route path='/login' element = {<Login/>}></Route>
          <Route path='/' element = {<Home/>}></Route>
         </Routes>
    </div>
   
  );
}

export default App;
