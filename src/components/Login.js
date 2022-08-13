import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Login.module.css';
import SocialMedia from './SocialMedia';

const { faker } = require('@faker-js/faker');

const Login = () => {
  return (
    <section className={classes.login}>
      <div>
        <form className={classes['login-form']}>
          <div className={classes['login-img']}>
            <img src={`${faker.image.abstract()}`} alt="random" />
          </div>
          <div className={classes['login-inputs']}>
            <label>Username</label>
            <input type="text" placeholder="Enter Username" />
            <label>Password</label>
            <input type="text" placeholder="Enter Password" />
          </div>
          <div className={classes['login-btn']}>
            <button>LOGIN</button>
          </div>
          <div className={classes['login-signUp']}>
            <p>No account?</p>
            <p className={classes['signUp-link']}>
              <Link to="/">Sign up Here</Link>
            </p>
          </div>
        </form>
      </div>

      <div>
        {/* <h3>Do not have an account Sign up here!</h3> */}
        <SocialMedia />
      </div>
    </section>
  );
};

export default Login;
