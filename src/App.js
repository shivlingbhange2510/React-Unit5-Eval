import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
// import axios from 'axios';
import { Home } from './Components/Home';
import { Register } from './Components/Register';
import { Login } from './Components/Login';
import { Employees } from './Components/Employees';
import {Navbar} from './Components/Navbar'; 
import {store} from './redux/store';
import {Provider} from 'react-redux';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
     <Navbar/>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/employee" element={<Employees />} />
      </Routes>
      </Provider>
    </div>
  );
}

export default App;
