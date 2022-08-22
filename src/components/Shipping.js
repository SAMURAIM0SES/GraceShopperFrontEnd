import Layout from "./Layout";
import classes from "./Shipping.module.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentData, clearCurrentData } from './../utils/auth'
import CardProducts from "./CardProducts"
import { nanoid } from "nanoid";

const Shipping = () => {
  const navigate = useNavigate();
  const nextNavigateHandler = () => {
    navigate('/payment');
   };
    const backNavigateHandler = () => {
      navigate('/cart');
     };

    //  const backNavigateHandler = () => {
    //   navigate('/cart');
    //  };


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
    clearCurrentData();
    setTotal(0);
    setTaxes(0);
  };
  


  return (
    <Layout>
      <section>
        <div className={classes["shipping-main"]}>
          {/* <div>
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
          </div> */}
          <div className={classes["shipping-header"]}>
            <p>1. Shopping Cart</p>
            <p>2. Shipping Details</p>
            <p>3. Payment Options</p>
          </div>

          <div className={classes["shipping-body"]}>
            <div className={classes["shipping-body-shopping"]}>
              <h3>Shipping Details</h3>
              <div className={classes["shipping-detailed-information"]}>
                <div className={classes["shipping-name"]}>
                  <input type="text" placeholder="First Name" />
                  <input type="text" placeholder="Last Name" />
                </div>
                <div className={classes["shipping-address"]}>
                  <input type="text" placeholder="Address" />
                </div>
                <div className={classes["shipping-address"]}>
                  <input type="text" placeholder="Address 2" />
                </div>
                <div className={classes["shipping-country"]}>
                  <input type="text" placeholder="Country" />
                  <input type="text" placeholder="City" />
                </div>
                <div>
                  <input type="text" placeholder="Zip/Postal" />
                  <input type="text" placeholder="Phone Number" />
                </div>
                <div className={classes["shipping-methods"]}>
                  <div>
                    <div class="swipeWrapper clearfix active">
                      <div class="leftColumn">
                        <input
                          type="radio"
                          name="shippingMethodEdit"
                          value="101"
                        />
                      </div>
                      <div class="leftColumnSpacer">
                        <div class="row">
                          <div class="col-xs-9">
                            Free Shipping (7 Day Ground)
                          </div>
                          <div class="col-xs-3 shippingRate">$0.00</div>
                        </div>
                      </div>
                    </div>
                    <div class="swipeWrapper clearfix">
                      <div class="leftColumn">
                        <input
                          type="radio"
                          name="shippingMethodEdit"
                          value="102"
                        />
                      </div>
                      <div class="leftColumnSpacer">
                        <div class="row">
                          <div class="col-xs-9">Next Day Shipping</div>
                          <div class="col-xs-3 shippingRate">$20</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
            <div className={classes['cart-body-summary']}>
              <h3>Summary</h3>
              <div className={classes['cart-body-coupon']}>
                Enter Coupon Code
              </div>
              <div className={classes['summary-detail']}>
                <div className={classes['summary-payment']}>
                  <div>Subtotal</div>
                  <div>total</div>
                </div>
                <div className={classes['summary-payment']}>
                  <div>Shipping</div>
                  <div>Free</div>
                </div>
                <div className={classes['summary-payment']}>
                  <div>Taxes</div>
                  <div>taxes</div>
                </div>
              </div>
              <div className={classes['summary-total']}>
                <div>TOTAL</div>
                <div>Total</div>
              </div>
            </div>
          </div>


            </div>

            {/* <div className={classes["shipping-body-summary"]}>
              <h3>Summary</h3>
              <div>Product Name</div>
              <div>$300</div>
              <div>Product Name</div>
              <div>$300</div>
              <div className={classes["shipping-cart-voucher"]}>
                HAVE A VOUCHER?
              </div>
              <div className={classes["summary-detail"]}>
                <div className={classes["summary-payment"]}>
                  <div>Subtotal</div>
                  <div>$600</div>
                </div>
                <div className={classes["summary-payment"]}>
                  <div>Shipping</div>
                  <div>Free</div>
                </div>
                <div className={classes["summary-payment"]}>
                  <div>Taxes</div>
                  <div>$13</div>
                </div>
                <div className={classes["shipping-total"]}>
                  TOTAL
                  <div></div>$613
                </div>
              </div>
            </div> */}
          </div>

          <div className={classes["shipping-buttons"]}>
          <button onClick={backNavigateHandler}>Back</button>
          <div className={classes["shipping-buttons"]}>
            <button onClick={nextNavigateHandler}>Next</button>
            <button>Cancel</button>
          </div>
          </div>
      </section>
    </Layout>
  );
};

export default Shipping;
