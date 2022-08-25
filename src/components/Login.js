import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './Login.module.css';
import SocialMedia from './SocialMedia';
import { loginUser, getAllCartInfo, createShoppingCart } from '../api/index';
import { storeCurrentData, clearCurrentData } from './../utils/auth';


const Login = (props) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const { setUserLogged } = props;

  const loginUserHandler = async (event) => {
    event.preventDefault();
    try {
      const userLogin = await loginUser(user, password);
      if (userLogin.name === 'TypeError') {
        setShowError(true);
        throw new Error('Username or Password are Incorrect - Try Again !!');
      }

      if (userLogin.token) {
        clearCurrentData();
        storeCurrentData('user', userLogin.user.username);
        storeCurrentData('token', userLogin.token);
        storeCurrentData('admin', userLogin.user.admin);
        storeCurrentData('userId', userLogin.user.id);
        setUserLogged(userLogin.user.username);

        setUser('');
        setPassword('');
      } else {
        setShowError(true);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <section className={classes.login}>
      <div>
        <form className={classes['login-form']} onSubmit={loginUserHandler}>
          <div className={classes['login-img']}>
            <img src={'https://loremflickr.com/400/400/abstract?8080'} alt="random" />
          </div>
          <div className={classes['login-inputs']}>
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter Username"
              value={user}
              onChange={(e) => {
                setUser(e.target.value);
                setShowError(false);
              }}
            />
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setShowError(false);
              }}
            />
          </div>
          {showError && (
            <span className={classes['login-error']}>
              Username or Password Incorrect
            </span>
          )}
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
