import React, { useState } from 'react';
import classes from './Layout.module.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { FaUserAlt } from 'react-icons/fa';
import { getCurrentData } from '../utils/auth';

const Layout = (props) => {
  const { userLogged, setUserLogged, cartQtn } = props;

  return (
    <div className={classes['layout-main']}>
      <header className={classes['layout-header']}>
        <nav className={classes['layout-navbar']}>
          <Navbar
            userLogged={userLogged}
            setUserLogged={setUserLogged}
            cartQtn={cartQtn}
          />
        </nav>
        <h1 className={classes['layout-title']}>RestaWant Supplies</h1>
        {userLogged && (
          <h4 className={classes['layout-welcome']}>
            <FaUserAlt />
            Welcome {userLogged}
          </h4>
        )}
      </header>
      <main className={classes['layout-body']}>{props.children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
