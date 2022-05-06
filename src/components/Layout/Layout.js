import React, { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import AuthStatus from "../AuthStatus/AuthStatus";
import '../style/Layout.css';
import '../style/Nav.css'
import Nav from '../navbar/Nav'
import Footer from '../foot/Footer';

function Layout() {
  return (
    <Fragment>
      

    <div >
      <Nav/>
    <AuthStatus />
      
        
        <button type="submit" className="button">
          <Link to="/protected">Cadastre seu Pet</Link>
        </button>
    
      
    </div>
      <Footer />
      <Outlet />
  </Fragment>
  );
}

export default Layout;
