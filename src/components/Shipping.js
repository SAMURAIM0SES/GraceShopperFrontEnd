import Layout from "./Layout";
import classes from "./Shipping.module.css";

const Shipping = () => {
    return (
        <Layout>
          <section>
            <div className={classes["shipping-main"]}>
              <div className={classes["shipping-header"]}>
                <p>Shopping Cart</p>
                <p>Shipping Details</p>
                <p>Payment Options</p>
              </div>
    
              <div className={classes["shipping-body"]}>
                <div className={classes["shipping-body-shopping"]}>
                  <h3>Shipping Details</h3>
                  <div className={classes["shipping-detailed-information"]}>
                    <div>First Name</div>
                    <div>Last Name</div>
                    <div>Address</div>
                    <div>Address 2</div>
                    <div>Country</div>
                    <div>City</div>
                    <div>Zip/Postal Code</div>
                    <div>Phone Number</div>
                    <div>Free Shipping</div>
                    <div>Next Day Delivery $20</div>
                    <div>24 hours from checkout  </div>
                  </div>
                </div>
                <div className={classes["shipping-body-summary"]}>
                    <h3>Summary</h3>
                    {/* <div>Enter Coupon Code</div> */}
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
                        <div>TOTAL</div>
                        <div>$613</div>
                    </div>
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
