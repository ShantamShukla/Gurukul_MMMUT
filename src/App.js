import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Videos from './components/Videos';
import Upload from './components/Upload';
import Login from './components/Login';
import Signup from './components/Signup';
import Form from './components/form';
import AssessmentForm from './components/Assessmentresult';
import Profile from './components/Profile';
import Admin from './components/Adminside/Admin';
function App() {
  return (
   <Router>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/videos" element={<Videos />} />
      <Route path="/Profile" element={<Profile />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/form" element={<Form />} />
        <Route path="/Adminside/Admin" element={<Admin />} />
        <Route path="/assessmentresult" element={<AssessmentForm />} />
    </Routes>
    <Footer />
   </Router>
  );
}

export default App;
