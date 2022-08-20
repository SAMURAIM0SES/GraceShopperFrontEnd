import React, { useState, useEffect } from 'react';

import Layout from './Layout';
import { getMyOrderDetails } from '../api/index';
import { getCurrentData } from '../utils/auth';
import classes from './OrderHistory.module.css';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
const { faker } = require('@faker-js/faker');

const DUMMY_DATA = [
  {
    name: '24" Cast Iron Skillet',
    price: '50.00',
    quantity: 200,
    date: '2022-08-17',
  },
  {
    name: 'Rustic Rubber Cheese',
    price: '693.00',
    quantity: 300,
    date: '2022-08-17',
  },
  {
    name: '24" Cast Iron Skillet',
    price: '50.00',
    quantity: 600,
    date: '2022-08-17',
  },
];

const OrderHistory = () => {
  const token = getCurrentData('token');
  const userId = getCurrentData('userId');
  const user = getCurrentData('user');

  const getUserOrderHistory = async () => {
    const orderHistory = await getMyOrderDetails(userId, token);
    console.log(orderHistory);
  };

  useEffect(() => {
    getMyOrderDetails();
    console.log(token);
  }, []);
  return (
    <Layout>
      <section>
        <div className={classes['history-main']}>
          <div className={classes['history-header']}>
            <h2>{user}</h2>
            <h3>Order History</h3>
          </div>
          <div className={classes['history-body']}>
            {DUMMY_DATA.map((data) => {
              return (
                <div className={classes['history-card']}>
                  <div className={classes['history-photo']}>
                    <img
                      src={`${faker.image.food(300, 300, true)}`}
                      alt="random"
                    />
                  </div>
                  <div className={classes['history-name']}>
                    <p>Product</p>
                    <p>{data.name}</p>
                  </div>
                  <div className={classes['history-price']}>
                    <p>Price</p>
                    <p>{data.price}</p>
                  </div>
                  <div className={classes['history-quantity']}>
                    <p>Quantity</p>
                    <p>{data.quantity}</p>
                  </div>
                  <div className={classes['history-date']}>
                    <p>Date</p>
                    <p>{data.date}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OrderHistory;

/*
<div className={classes['history-card']}>
              <div className={classes['history-photo']}>
                <img src={`${faker.image.food(300, 300, true)}`} alt="random" />
              </div>
              <div className={classes['history-price']}>
                <p>Price</p>
                <p>Price</p>
              </div>
              <div className={classes['history-quantity']}>
                <p>Quantity</p>
                <p>Quantity</p>
              </div>
              <div className={classes['history-date']}>
                <p>Date</p>
                <p>Date</p>
              </div>
            </div>
*/
