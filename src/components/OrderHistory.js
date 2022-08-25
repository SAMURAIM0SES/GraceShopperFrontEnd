import React, { useState, useEffect } from 'react';

import Layout from './Layout';
import { getMyOrderDetails } from '../api/index';
import { getCurrentData } from '../utils/auth';
import classes from './OrderHistory.module.css';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { BsClockHistory } from 'react-icons/bs';
import { nanoid } from 'nanoid';

const OrderHistory = () => {
  const token = getCurrentData('token');
  const userId = getCurrentData('userId');
  const user = getCurrentData('user');
  const [myOrderHistory, setMyOrderHistory] = useState([]);

  const getUserOrderHistory = async () => {
    const orderHistory = await getMyOrderDetails(userId, token);

    if (orderHistory) {
      setMyOrderHistory(orderHistory);
    }
  };

  useEffect(() => {
    getUserOrderHistory();
  }, []);

  return (
    <Layout>
      <section>
        <div className={classes['history-main']}>
          <div className={classes['history-header']}>
            <h2>{user}</h2>
            <h3>
              Order History{' '}
              <span>
                <BsClockHistory />
              </span>
            </h3>
          </div>
          <div className={classes['history-body']}>
            {myOrderHistory.map((data) => {
              return (
                <div key={nanoid()} className={classes['history-card']}>
                  <div className={classes['history-photo']}>
                    <img
                      src={'https://loremflickr.com/400/400/food?17370'}
                      alt="random"
                    />
                  </div>
                  <div className={classes['history-name']}>
                    <p>Product</p>
                    <p>{data.name}</p>
                  </div>
                  <div className={classes['history-price']}>
                    <p>Price</p>
                    <p>${data.price}</p>
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
