import Layout from "./Layout";
import classes from "./Payment.module.css";
import React, {useState, useEffect} from "react";
import StripeCheckout from "react-stripe-checkout";
const { faker } = require('@faker-js/faker');
export const apiURL = 'https://graceshopperbackend.herokuapp.com/api';

const Payment = () => {

    const [product , setProduct] = useState({
        name: 'Awesome Oven',
        description: 'this oven is so awesome!',
        price: 5000
    })

    const makePayment = token => {
        const body = {
            token,
            product
        }
        const headers = {
            "Content-Type": "application/json"
        }
        return fetch(`${apiURL}/payment`,{
            method: "POST",
            headers,
            body: JSON.stringify(body)
        }).then(response => {
            console.log("RESPONSE", response)
            const {status} = response 
            console.log("status", status)
    })
    .catch(error => console.log(error))
    }

  return (
    <Layout>
      <section>
        <div className={classes["payment-main"]}>
          <div className={classes["payment-header"]}>
          <p>1. Shopping Cart</p>
            <p>2. Shipping Details</p>
            <p>3. Payment Options</p>
          </div>

          <div className={classes["payment-body"]}>
            <div className={classes["payment-body-shopping"]}>
              <h3>Payment Details</h3>
              <div className={classes["payment-detailed-information"]}>
                <div className={classes["payment-name"]}>
                  <input type="text" placeholder="First Name" />
                  <input type="text" placeholder="Last Name" />
                </div>
                <div className={classes["payment-address"]}>
                  <input type="text" placeholder="Address" />
                </div>
                <div className={classes["payment-address"]}>
                  <input type="text" placeholder="Address 2" />
                </div>
                <div className={classes["payment-country"]}>
                  <input type="text" placeholder="Country" />
                  <input type="text" placeholder="City" />
                </div>
                <div>
                  <input type="text" placeholder="Zip/Postal" />
                  <input type="text" placeholder="Phone Number" />
                </div>
                <div className={classes["payment-methods"]}>
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
            
            <div className={classes["payment-body-summary"]}>
              <h3>Summary</h3>
              <div>Product Name</div>
              <div>$300</div>
              <div>Product Name</div>
              <div>$300</div>
              <div className={classes["payment-cart-voucher"]}>HAVE A VOUCHER?</div>
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
                  <div className={classes['payment-total']}>TOTAL</div>
                  <div>$613</div>
              </div>
            </div>
          </div>

          <div className={classes["payment-buttons"]}>
            <button>Next</button>
            <button>Cancel</button>
          </div>
        </div>
        <StripeCheckout 
        stripeKey="pk_test_51LXprnBIJA8lOQIHEZrWR5feoiqcUV7QgcMzbFPm6zZd7qqa3RfdDrOsN4TLTy4GxPHfMfWQRdhZhSA5lY2y2E6300R9dcIYL2"
        token={makePayment}
        name="Place your order now!"
        amount={product.price}>


        </StripeCheckout>
      </section>
    </Layout>
  );
};

export default Payment;
