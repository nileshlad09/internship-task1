import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Loginpage from './Components/LoginPage/Loginpage';
import Navbar from './Components/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
        <Navbar/>
        <Routes>
          <Route path="/"   element={<Loginpage/> } />
          <Route path="/dashboard"   element={<Dashboard/> } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
