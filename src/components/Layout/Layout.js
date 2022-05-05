import React, { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import AuthStatus from "../AuthStatus/AuthStatus";
import '../style/Layout.css';
import '../style/Nav.css'
import Nav from '../navbar/Nav'
import Footer from '../foot/Footer'

function Layout() {
  return (
  <Fragment>
    <div >
      <Nav/>
    <AuthStatus />
      
        
        <button type="submit" >
          <Link to="/protected">Cadastre seu Pet</Link>
        </button>
    
      
      <Outlet />
    </div>
      <Footer />
  </Fragment>
  );
}

export default Layout;
