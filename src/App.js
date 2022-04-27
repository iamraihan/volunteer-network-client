import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Navbar from './pages/Shared/Navbar/Navbar';
import Login from './pages/Shared/Login/Login';
import Register from './pages/Shared/Register/Register';
import AddVolunteer from './pages/Home/AddVolunteer/AddVolunteer';
import RequireAuth from './pages/RequreAuth/RequireAuth';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/add-volunteer' element={
          <RequireAuth>
            <AddVolunteer></AddVolunteer>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
    </div>
  );
}

export default App;
