import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/home/Home';
import RegisterComponent from './components/register/RegisterComponent';
import LoginComponent from './components/login/LoginComponent';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<RegisterComponent/>}/>
        <Route path="/login" element={<LoginComponent/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
