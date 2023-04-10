
// import PersonIcon from '@mui/icons-material/Person';

import Login from "./pages/login/Login";

import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";


import Home from "./pages/home/Home";

import {
  BrowserRouter as Router,
  // Switch,
  Routes,
  Route,
  // Redirect,
  Navigate,
  
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
   
      <Routes>
      {/* <Route path='*' element={<PageNotFound/>}/>{} */}
      <Route path="/" element={user ? <Home /> : <Register />}/>

        {/* <Route  path="/">
          {user ? <Home /> : <Register />}
        </Route> */}
        <Route path="/login"   element={user ? <Navigate  to="/" /> : <Login />} />
        <Route path="/register" element=
          {user ? <Navigate  to="/" /> : <Register />}/>
        

     
        <Route path="/profile/:username" element={<Profile />}/>
          
        


        </Routes>
     
    </Router>
  );
}

export default App;