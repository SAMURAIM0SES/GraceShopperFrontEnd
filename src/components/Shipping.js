import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import classes from './Shipping.module.css';
import { useNavigate } from 'react-router-dom';
import { getCurrentData, clearCurrentData } from './../utils/auth';
import CardProducts from './CardProducts';
import { nanoid } from 'nanoid';

export const apiURL = 'https://graceshopperbackend.herokuapp.com/api';

const Shipping = () => {
  const navigate = useNavigate();
  const backNavigateHandler = () => {
    navigate('/cart');
  };

  const nextNavigateHandler = () => {
    navigate('/payment');
  };
  const cartStoraged = getCurrentData('cart');
  const [cartProducts, setCartproducts] = useState(cartStoraged || []);
  const [total, setTotal] = useState(0);
  const [taxes, setTaxes] = useState(0);
  const [initailProducts, setInitialProducts] = useState([]);
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
  }, [cartStoraged]);

  const deleteAllProductsHandler = () => {
    setCartproducts([]);
    clearCurrentData('cart');
    setTotal(0);
    setTaxes(0);
  };

  return (
    <Layout>
      <section>
        <div className={classes['shipping-main']}>
          <div className={classes['shipping-header']}>
            <p>1. Shopping Cart</p>
            <p>2. Shipping Details</p>
            <p>3. Payment Options</p>
          </div>

          <div className={classes['shipping-body']}>
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
            <div className={classes['shipping-body-shopping']}>
              <h3>Shipping Details</h3>
              <div className={classes['shipping-detailed-information']}>
                <div className={classes['shipping-name']}>
                  <input type="text" placeholder="First Name" />
                  <input type="text" placeholder="Last Name" />
                </div>
                <div className={classes['shipping-address']}>
                  <input type="text" placeholder="Address" />
                </div>
                <div className={classes['shipping-address']}>
                  <input type="text" placeholder="Address 2" />
                </div>
                <div className={classes['shipping-country']}>
                  <input type="text" placeholder="Country" />
                  <input type="text" placeholder="City" />
                </div>
                <div>
                  <input type="text" placeholder="Zip/Postal" />
                  <input type="text" placeholder="Phone Number" />
                </div>
                <div className={classes['shipping-methods']}>
                  <div>
                    <input type="radio" />
                    <span>Free Shipping</span>
                  </div>
                  <div>
                    <input type="radio" />
                    <span>Next Day Delivery</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={classes['shipping-body-summary']}>
              <div className={classes['shipping-cart-voucher']}>
                HAVE A VOUCHER?
              </div>

              <h3>Summary</h3>

              <div className={classes['summary-detail']}>
                <div className={classes['summary-shipping']}>
                  <div>Subtotal</div>
                  <div>${total}</div>
                </div>
                <div className={classes['summary-shipping']}>
                  <div>Shipping</div>
                  <div>Free</div>
                </div>
                <div className={classes['summary-shipping']}>
                  <div>Taxes</div>
                  <div>${taxes.toFixed(2)}</div>
                </div>
                <div className={classes['shipping-total']}>TOTAL</div>
                <div>${(total + taxes).toFixed(2)}</div>
              </div>
            </div>
          </div>

          <div className={classes['shipping-buttons']}>
            <button onClick={backNavigateHandler}>Back</button>
            <button
              className={classes['next-page-button']}
              onClick={nextNavigateHandler}
            >
              Next
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

export default Shipping;
