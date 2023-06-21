import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import React from 'react';
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignIn/SignUp";
import Dashboard from "./components/Dashboard/Dashboard";
import Profile from "./components/Profile/Profile";
import DashBody from './components/Dashboard/body/DashBody';
import Tokens from './components/Tokens/Tokens';
import Main from './components/Main/Main';
import Home from './components/Home/HomePagePart2';
import Blog from './components/Blog/BlogPage';
import Investments from './components/Investesment/InvestmentsPage';
import PrivacyPolicyContent from './components/PrivacyPolicy/PrivacyPolicyContent';
import TermsOfUse from './components/TOU/TermsOfUsePage';
import Body from './components/Suscribe/Body';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main />}>
          <Route index element={<Home />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/investment' element={<Investments />} />
          <Route path='/privacy-policy' element={<PrivacyPolicyContent />} />
          <Route path='/terms-of-use' element={<TermsOfUse />} />
        </Route>
        <Route path='/suscribe' element={<Body />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<DashBody />} />
          <Route path='/dashboard/token' element={<Tokens />} />
        </Route>

        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />


      </Routes>
    </>
  );
}

export default App;
