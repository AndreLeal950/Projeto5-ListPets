import React, { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import AuthStatus from "../AuthStatus/AuthStatus";
import Dog from '../../image/Dog.png';
import '../style/Layout.css';
import '../style/Nav.css'
import Nav from '../navbar/Nav'
import Footer from '../foot/Footer'

function Layout() {
  return (
  <Fragment>
    <div>
      <Nav/>
    <AuthStatus />
      <ul>
        <li>
          <Link to="/">Public Page</Link>
        </li>
        <li>
          <Link to="/protected">Protected Page</Link>
        </li>
      </ul>
      
      <Outlet />
    </div>
      <Footer />
  </Fragment>
  );
}

export default Layout;
