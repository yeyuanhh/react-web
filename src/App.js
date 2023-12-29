
import './App.css';
import React from 'react'
// 导入路由 react-router-dom@5.2.1
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './components/home/home.css'
import Header from './components/shares/header'
import Footer from './components/shares/footer'
import Home from './components/home/home'
import NoPage from './components/shares/nopage'
//https://blog.csdn.net/qq_34297287/article/details/124206365

function App() {
  return <div className='app'>
    <BrowserRouter>
    <Header />
      <Routes>    
        <Route index element={<Home />} />
        {/* <Route path='financeuserinterest' index element={<FinanceUserInterest />} /> */}
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </div>
}

export default App;
