import React from 'react';
import Footer from './Footer';
import NavbarInstance from './NavBar';

const Root = ({ children }) => (
  <div id="main" className="container-fluid">
    <NavbarInstance />
    {children}
    <Footer />
  </div>
);

export default Root;
