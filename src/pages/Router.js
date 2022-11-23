import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyPage from './MyPage/MyPage';

import Detail from './Detail/Detail';
import Company from './Company/Company';
import Main from './Main/Main';

import Home from './Home/Home';
import Resume from './Resume/Resume';
import Footer from '../components/Footer/Footer';
import Signup from '../components/Signup/Signup';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/MyPage" element={<MyPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/footer" element={<Footer />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> */}
        <Route path="/detail" element={<Detail />} />
        <Route path="/company" element={<Company />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
