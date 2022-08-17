import React, { useState, useEffect, Fragment } from 'react';
import Layout from './Layout';
import classes from './Cart.module.css';
import CardProducts from './CardProducts';
import { useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { getCurrentData } from './../utils/auth';

const { faker } = require('@faker-js/faker');

const DUMMY_PRODUCTS = [
  {
    name: 'Modern Steel Chair',
    description:
      'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
    price: 354,
  },
  {
    name: 'Generic Metal Shoes',
    description:
      'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
    price: 81,
  },
];

const Cart = () => {
  const [total, setTotal] = useState(0);
  const [taxes, setTaxes] = useState(0);
  const [cartProducts, setCartproducts] = useState([]);
  const navigate = useNavigate();

  const cartStoraged = getCurrentData('cart');

  const nextNavigateHandler = () => {
    navigate('/shipping');
  };

  const totalCost = (arr) => {
    const totalSum = arr.reduce((prev, curr) => prev + curr.price * 1, 0);
    setTotal(totalSum);
    setTaxes(totalSum * 0.1);
  };

  useEffect(() => {
    totalCost(cartStoraged);
    setCartproducts(cartStoraged);
  }, []);

  return (
    <Layout>
      <section>
        <div className={classes['cart-main']}>
          <div className={classes['cart-header']}>
            <p>1. Shopping Cart</p>
            <p>2. Shipping Details</p>
            <p>3. Payment Options</p>
          </div>
          <h3>Shopping Cart</h3>
          <div className={classes['cart-body']}>
            <div>
              {cartProducts ? (
                cartProducts.map((prod) => {
                  return (
                    <CardProducts
                      key={nanoid()}
                      name={prod.name}
                      description={prod.description}
                      price={prod.price}
                      id={prod.id}
                      cartProducts={cartProducts}
                      setCartproducts={setCartproducts}
                      setTotal={setTotal}
                      setTaxes={setTaxes}
                    />
                  );
                })
              ) : (
                <p>there are products</p>
              )}
            </div>

            {/* <CardProducts data={DUMMY_PRODUCTS} /> */}

            <div className={classes['cart-body-summary']}>
              <h3>Summary</h3>
              <div className={classes['cart-body-coupon']}>
                Enter Coupon Code
              </div>
              <div className={classes['summary-detail']}>
                <div className={classes['summary-payment']}>
                  <div>Subtotal</div>
                  <div>{total}</div>
                </div>
                <div className={classes['summary-payment']}>
                  <div>Shipping</div>
                  <div>Free</div>
                </div>
                <div className={classes['summary-payment']}>
                  <div>Taxes</div>
                  <div>{taxes.toFixed(2)}</div>
                </div>
              </div>
              <div className={classes['summary-total']}>
                <div>TOTAL</div>
                <div>{(total + taxes).toFixed(2)}</div>
              </div>
            </div>
          </div>

          <div className={classes['cart-buttons']}>
            <button onClick={nextNavigateHandler}>Next</button>
            <button>Cancel</button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Cart;
