import React, { useState, useEffect, useRef } from 'react';
import { registerUser } from '../api/index';
import { useNavigate } from 'react-router-dom';

import classes from './Register.module.css';
import Layout from './Layout';

const Register = () => {
  const username = useRef();
  const password = useRef();
  const firstName = useRef();
  const lastName = useRef();
  const mobile = useRef();
  const email = useRef();
  const navigate = useNavigate();

  const registerUserHandler = async (event) => {
    event.preventDefault();

    if (
      username.current.value &&
      password.current.value &&
      firstName.current.value &&
      lastName.current.value &&
      mobile.current.value &&
      email.current.value
    ) {
      const newUser = await registerUser(
        username.current.value,
        password.current.value,
        firstName.current.value,
        lastName.current.value,
        +mobile.current.value,
        email.current.value
      );
      username.current.value = '';
      password.current.value = '';
      firstName.current.value = '';
      lastName.current.value = '';
      mobile.current.value = '';
      email.current.value = '';

      navigate('/');
    } else {
      console.log('Please fill in all the fields');
    }
  };
  return (
    <Layout>
      <section>
        <div className={classes['register-main']}>
          <h2>Create an Account</h2>
          <form
            onSubmit={registerUserHandler}
            className={classes['register-form']}
          >
            <div className={classes['register-field']}>
              <input type="text" ref={username} />
              <label>Username</label>
            </div>
            <div className={classes['register-field']}>
              <input type="text" ref={password} />
              <label>Password</label>
            </div>
            <div className={classes['register-field']}>
              <input type="text" ref={firstName} />
              <label>First Name</label>
            </div>
            <div className={classes['register-field']}>
              <input type="text" ref={lastName} />
              <label>Last Name</label>
            </div>
            <div className={classes['register-field']}>
              <input type="text" ref={mobile} />
              <label>Phone Number</label>
            </div>
            <div className={classes['register-field']}>
              <input type="text" ref={email} />
              <label>Email</label>
            </div>
            <div className={classes['register-button']}>
              <button type="submit">Create My account</button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Register;

/*
 <div className={classes['register-main']}>
          <h2>Create an Account</h2>
          <form
            onSubmit={registerUserHandler}
            className={classes['register-form']}
          >
            <div className={classes['register-field']}>
              <label>Username</label>
              <input type="text" placeholder="your username" ref={username} />
            </div>
            <div className={classes['register-field']}>
              <label>Password</label>
              <input type="text" placeholder="your password" ref={password} />
            </div>
            <div className={classes['register-field']}>
              <label>First Name</label>
              <input
                type="text"
                placeholder="your First Name"
                ref={firstName}
              />
            </div>
            <div className={classes['register-field']}>
              <label>Last Name</label>
              <input type="text" placeholder="your Last Name" ref={lastName} />
            </div>
            <div className={classes['register-field']}>
              <label>Phone Number</label>
              <input
                type="text"
                placeholder="your phone number "
                ref={mobile}
              />
            </div>
            <div className={classes['register-field']}>
              <label>Email</label>
              <input type="text" placeholder="your email " ref={email} />
            </div>
            <div className={classes['register-button']}>
              <button type="submit">Create My account</button>
            </div>
          </form>
        </div>
*/
