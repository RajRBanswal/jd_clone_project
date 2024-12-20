import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/website/layouts/Layout';
import Home from './components/website/Home';
import About from './components/website/About';
import Contact from './components/website/Contact';

import Signup from './components/website/Signup';
import AdminLogin from './components/adminpanel/AdminLogin';
import Sidebar from './components/adminpanel/layouts/Sidebar';
import AdminDashboard from './components/adminpanel/AdminDashboard';
import Vendor from './components/vendorpanel/layouts/Vendor';
import VendorLogin from './components/vendorpanel/VendorLogin';
import VendorSignup from './components/vendorpanel/VendorSignup';
import Login from './components/website/Login';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Layout}>
          <Route index Component={Home} />
          <Route path="about" Component={About} />
          <Route path="contact" Component={Contact} />
          <Route path="signup" Component={Signup} />
          <Route path="Login" Component={Login} />
        </Route>
        <Route path="/admin-login" Component={AdminLogin} />
        <Route path="/admins" Component={Sidebar}>
          <Route index Component={AdminDashboard} />
        </Route>
        <Route path="/vendor-login" Component={VendorLogin} />
        <Route path="/vendor-Signup" Component={VendorSignup} />
        <Route path="/vendors" Component={Vendor}>
          <Route index Component={AdminDashboard} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
