
import './App.css';
import React from 'react'
// 导入路由 react-router-dom@5.2.1
import { BrowserRouter, Route, Routes} from 'react-router-dom'
// 导入登录页
import Users from './views/page/users'
// 导入首页
import Home from './views/page/home'
import Layout from './views/Layout'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return <div className='app'>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/users" element={<Users />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
}

export default App;
