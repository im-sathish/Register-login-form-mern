import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Login from './Login';
import Register from './Register';

function App() {
  return (
   <>
   <Header/>
   <Routes>
          <Route path="/Register" element={<Register/>}/>
          <Route path="/Login" element={<Login/>}/>
       </Routes>   
   </>
  );
}
export default App;
