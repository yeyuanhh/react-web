import React from 'react'
import { Route } from 'react-router-dom'
import { Outlet, Link } from "react-router-dom";

const Layout = (props) => {
    // 1.登录 去 Layout
    // const goLayoutHandler = () => {
    //     props.history.push('/layout')
    // }
    return  <>
    <nav>
      <ul direction='vertical'>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>

    <Outlet />
  </>
};
export default Layout