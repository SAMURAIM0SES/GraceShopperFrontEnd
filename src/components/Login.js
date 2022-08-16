import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './Login.module.css';
import SocialMedia from './SocialMedia';
import { loginUser } from '../api/index';
import { storeCurrentUser } from './../utils/auth';
const { faker } = require('@faker-js/faker');

const Login = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const loginUserHandler = async (event) => {
    event.preventDefault();
    const userLogin = await loginUser(user, password);
    if (userLogin) {
      console.log(userLogin);
      storeCurrentUser('user', userLogin.user.username);
      storeCurrentUser('token', userLogin.token);
      setUser('');
      setPassword('');
    } else {
      console.log('there was an error');
    }
  };

  return (
    <section className={classes.login}>
      <div>
        <form className={classes['login-form']} onSubmit={loginUserHandler}>
          <div className={classes['login-img']}>
            <img src={`${faker.image.abstract()}`} alt="random" />
          </div>
          <div className={classes['login-inputs']}>
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter Username"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
            <label>Password</label>
            <input
              type="text"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={classes['login-btn']}>
            <button>LOGIN</button>
          </div>
          <div className={classes['login-signUp']}>
            <p>No account?</p>
            <p className={classes['signUp-link']}>
              <Link to="/register">Sign up Here</Link>
            </p>
          </div>
        </form>
      </div>

      <div>
        <SocialMedia />
      </div>
    </section>
  );
};

export default Login;
