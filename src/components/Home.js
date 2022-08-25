import React, { useState } from 'react';
import Layout from './Layout';
import classes from './Home.module.css';
import Categories from './Categories';
import Login from './Login';
import FeatureProducts from './FeatureProducts';
import { BsSearch } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

//https://graceshopperbackend.herokuapp.com/

const Home = () => {
  const navigate = useNavigate();
  const [userLogged, setUserLogged] = useState('');

  const shopHandler = () => {
    navigate('/products');
  };

  return (
    <Layout userLogged={userLogged} setUserLogged={setUserLogged}>
      <section>
        <div className={classes.filter}>
          <span>
            <BsSearch />
          </span>
          <input type="text" placeholder="Search..." />
          <button>Search</button>
        </div>
      </section>
      <Categories />

      <section>
        <div className={classes.deal}>
          <h2 className={classes['deal-title']}>TRIPLE DEAL OF THE DAY</h2>
          <div className={classes['deal-gallery']}>
            <div className={classes['deal-gallery-photo']}>
              <img
                src={'https://loremflickr.com/600/600/food?17370'}
                alt="random"
              />
            </div>
            <div className={classes['deal-gallery-photo']}>
              <img
                src={'https://loremflickr.com/600/600/food?19334'}
                alt="random"
              />
            </div>
            <div className={classes['deal-gallery-photo']}>
              <img
                src={'https://loremflickr.com/600/600/food?63756'}
                alt="random"
              />
            </div>
          </div>
          <div className={classes['deal-button']}>
            <button onClick={shopHandler}>SHOP NOW</button>
          </div>
        </div>
      </section>
      <Login setUserLogged={setUserLogged} />
      <FeatureProducts />

      <section>
        <div className={classes['aboutShop-main']}>
          <h2 className={classes['aboutShop-title']}>About Our Shop</h2>
          <p className={classes['aboutShop-description']}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
