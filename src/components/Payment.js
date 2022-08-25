import Layout from './Layout';
import classes from './Payment.module.css';
import React, { useState, useEffect } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { useNavigate } from 'react-router-dom';
import { getCurrentData, clearCurrentItem } from './../utils/auth';
import CardProducts from './CardProducts';
import { nanoid } from 'nanoid';
import { GiTakeMyMoney } from 'react-icons/gi';
import { HiOutlineReceiptTax } from 'react-icons/hi';
import { TbTruckDelivery } from 'react-icons/tb';
import { updateCart, createShoppingCartProducts } from '../api';

// export const apiURL = 'http://localhost:4000/api';
export const apiURL = 'https://graceshopperbackend.herokuapp.com/api';

const Payment = () => {
  const cartId = getCurrentData('cartId');
  const userId = getCurrentData('userId');
  console.log(cartId, userId);

  const cartStoraged = getCurrentData('cart');
  const [buyNow, setBuyNow] = useState(true);
  const navigate = useNavigate();
  const backNavigateHandler = () => {
    navigate('/shipping');
  };

  const [cartProducts, setCartproducts] = useState(cartStoraged || []);
  const [total, setTotal] = useState(0);
  const [taxes, setTaxes] = useState(0);
  const [initailProducts, setInitialProducts] = useState([]);
  const [showShipping, setShowShipping] = useState(false);
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
    navigate('/');
  };

  const makePayment = (token) => {
    const body = {
      token,
      cartProducts,
    };
    return fetch(`${apiURL}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
      .then((response) => {
        return response.json();
      
      })
      .then((result) => {
        console.log(result, 'result');
      })
      .catch((error) => console.log(error));
  };

  const shippingHandler = () => {
    setShowShipping((prev) => !prev);
  };

  const stripeHandler = async () => {
    
    await cartStoraged.forEach((element) => {
      createShoppingCartProducts(element.id, cartId, element.quantity);
    });
    await updateCart(cartId, userId);
    setBuyNow((prev) => !prev);
  };

  return (
    <Layout>
      <section>
        <div className={classes['payment-main']}>
          <div className={classes['payment-header']}>
            <p>1. Shopping Cart</p>
            <p>2. Shipping Details</p>
            <p>3. Payment Options</p>
          </div>

          <div className={classes['payment-body']}>
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
                      img={prod.img}
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
            <div className={classes['payment-body-shopping']}>
              <h3>Payment Details</h3>
              <div className={classes['payment-detailed-information']}>
                <div className={classes['payment-name']}>
                  <input type="text" placeholder="First Name" />
                  <input type="text" placeholder="Last Name" />
                </div>
                <div className={classes['payment-address']}>
                  <input type="text" placeholder="Address" />
                </div>
                <div className={classes['payment-address']}>
                  <input type="text" placeholder="Address 2" />
                </div>
                <div className={classes['payment-country']}>
                  <input type="text" placeholder="Country" />
                  <input type="text" placeholder="City" />
                </div>
                <div className={classes['payment-postal']}>
                  <input type="text" placeholder="Zip/Postal" />
                  <input type="text" placeholder="Phone Number" />
                </div>
                <div className={classes['payment-methods']}>
                  <div className={classes['radio-container']}>
                    <div className={classes['radio-input']}>
                      <h3>
                        {showShipping ? 'Free Shipping' : 'Next Day Delivery'}
                      </h3>
                    </div>
                    <div className={classes['radio-input']}>
                      <label className={classes.switch}>
                        <input type="checkbox" onChange={shippingHandler} />
                        <span
                          className={`${classes.slider} ${classes.round}`}
                        ></span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={classes['payment-body-summary']}>
              <h3>Summary</h3>

              <div className={classes['summary-detail']}>
                <div className={classes['summary-payment']}>
                  <div>
                    <GiTakeMyMoney /> Subtotal
                  </div>
                  <div>${total}</div>
                </div>
                <div className={classes['summary-payment']}>
                  <div>
                    <HiOutlineReceiptTax />
                    Taxes
                  </div>
                  <div>${taxes.toFixed(2)}</div>
                </div>
                <div className={classes['summary-payment']}>
                  <div>
                    <TbTruckDelivery />
                    Shipping
                  </div>
                  <div className={classes['delivery-type']}>
                    {showShipping ? 'Free Shipping' : 'Next Day Delivery'}
                  </div>
                </div>

                <div className={classes['payment-total']}>
                  <p>Total</p>
                  <p>${(total + taxes).toFixed(2)}</p>
                </div>

                <div className={classes.stripe}>
                  {buyNow ? (
                    <button
                      onClick={stripeHandler}
                      className={classes['btn-buyNow']}
                    >
                      Buy now
                    </button>
                  ) : (
                    <StripeCheckout
                      stripeKey="pk_test_51LXprnBIJA8lOQIHEZrWR5feoiqcUV7QgcMzbFPm6zZd7qqa3RfdDrOsN4TLTy4GxPHfMfWQRdhZhSA5lY2y2E6300R9dcIYL2"
                      token={makePayment}
                      name="Place your order now!"
                      amount={`${total + taxes}` * 100}
                    ></StripeCheckout>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className={classes['payment-buttons']}>
            <button onClick={backNavigateHandler}>Back</button>
            <button
              onClick={deleteAllProductsHandler}
              disabled={cartProducts.length ? false : true}
              className={classes['deleteAll-btn']}
            >
              Cancel All
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Payment;
