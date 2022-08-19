import React, { useState, useRef } from 'react';
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
  const navigate = useNavigate();
  const [showError, setShowError] = useState(false);
  const [email, setEmail] = useState('');

  const registerUserHandler = async (event) => {
    event.preventDefault();

    if (
      username.current.value &&
      password.current.value &&
      firstName.current.value &&
      lastName.current.value &&
      mobile.current.value &&
      email
    ) {
      const newUser = await registerUser(
        username.current.value,
        password.current.value,
        firstName.current.value,
        lastName.current.value,
        +mobile.current.value,
        email
      );

      if (newUser.name === 'EmailExistsError') {
        setShowError(true);
      } else {
        username.current.value = '';
        password.current.value = '';
        firstName.current.value = '';
        lastName.current.value = '';
        mobile.current.value = '';
        setEmail('');
        navigate('/');
      }
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
            <p>All fields are required</p>
            <div className={classes['register-field']}>
              <input type="text" ref={username} required />
              <label>Username</label>
            </div>
            <div className={classes['register-field']}>
              <input type="text" ref={password} required />
              <label>Password</label>
            </div>
            <div className={classes['register-field']}>
              <input type="text" ref={firstName} required />
              <label>First Name</label>
            </div>
            <div className={classes['register-field']}>
              <input type="text" ref={lastName} required />
              <label>Last Name</label>
            </div>
            <div className={classes['register-field']}>
              <input type="text" ref={mobile} required />
              <label>Phone Number</label>
            </div>
            <div className={classes['register-field']}>
              <input
                type="text"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setShowError(false);
                }}
                required
              />
              <label>Email</label>
              {showError && <p>This email is already taken</p>}
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
