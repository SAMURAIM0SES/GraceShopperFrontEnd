import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import classes from './Cart.module.css';
import CardProducts from './CardProducts';
import { useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid';
import {
  getCurrentData,
  clearCurrentItem,
  storeCurrentData,
} from './../utils/auth';
import { createShoppingCart } from '../api/index';

const Cart = () => {
  const [total, setTotal] = useState(0);
  const [taxes, setTaxes] = useState(0);
  const [initailProducts, setInitialProducts] = useState([]);
  const navigate = useNavigate();
  const cartStoraged = getCurrentData('cart');
  const cartUserId = getCurrentData('cartUserId');
  const userId = getCurrentData('userId');
  const [cartProducts, setCartproducts] = useState(cartStoraged || []);

  const nextNavigateHandler = async () => {
    if (userId) {
      const cartCreated = await createShoppingCart(userId, false, '2022-08-23');
      storeCurrentData('cartId', cartCreated[0].id);
      console.log('cartCreated', cartCreated);
    }

    navigate('/shipping');
  };

  const totalCost = (arr) => {
    const totalSum = arr.reduce((prev, curr) => prev + curr.price * 1, 0);
    setTotal(totalSum);
    setTaxes(totalSum * 0.12);
  };

  useEffect(() => {
    if (!cartStoraged) {
      setTotal(0);
      setTaxes(0);
    }
    if (cartStoraged) {
      totalCost(cartStoraged);
      setCartproducts(cartStoraged);
      setInitialProducts(cartStoraged);
    }
  }, []);

  const deleteAllProductsHandler = () => {
    setCartproducts([]);
    clearCurrentItem('cart');
    setTotal(0);
    setTaxes(0);
  };

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
              {cartProducts.length ? (
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
                      qtn={prod.quantity}
                      initailProducts={initailProducts}
                    />
                  );
                })
              ) : (
                <p>there are no products</p>
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
            <button
              onClick={nextNavigateHandler}
              disabled={cartProducts.length ? false : true}
              className={classes['checkout-btn']}
            >
              Checkout
            </button>
            <button
              onClick={deleteAllProductsHandler}
              disabled={cartProducts.length ? false : true}
              className={classes['deleteAll-btn']}
            >
              Delete All
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Cart;

// getCurrentData()
