import Layout from "./Layout";
import classes from "./Shipping.module.css";

// const { faker } = require('@faker-js/faker');

// const DUMMY_PRODUCTS = [
//   {
//     name: 'Modern Steel Chair',
//     description:
//       'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
//     price: 354,
//   },
//   {
//     name: 'Generic Metal Shoes',
//     description:
//       'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
//     price: 81,
//   },
// ];


const Shipping = () => {
  return (
    <Layout>
      <section>
        <div className={classes["shipping-main"]}>
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
            
            <div className={classes["shipping-body-summary"]}>
              <h3>Summary</h3>
              <div>Product Name</div>
              <div>$300</div>
              <div>Product Name</div>
              <div>$300</div>
              <div className={classes["shipping-cart-voucher"]}>HAVE A VOUCHER?</div>
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
                  <div className={classes['shipping-total']}>TOTAL 
                  <div></div>$613</div>
              </div>
            </div>
          </div>

          <div className={classes["shipping-buttons"]}>
            <button>Next</button>
            <button>Cancel</button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Shipping;
