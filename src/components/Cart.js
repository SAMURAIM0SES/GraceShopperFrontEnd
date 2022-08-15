import Layout from "./Layout";
import classes from "./Cart.module.css";

const Cart = () => {
  return (
    <Layout>
      <section>
        <div className={classes["cart-main"]}>
          <div className={classes["cart-header"]}>
            <p>Shopping Cart</p>
            <p>Shipping Details</p>
            <p>Payment Options</p>
          </div>

          <div className={classes["cart-body"]}>
            <div className={classes["cart-body-shopping"]}>
              <h3>Shopping Cart</h3>
              <div className={classes["cart-shopping-products"]}>
                <div>Image</div>
                <div>Product Name</div>
                <div>Product Quantity</div>
              </div>
            </div>
            <div className={classes["cart-body-summary"]}>
                <h3>Summary</h3>
                <div>Enter Coupon Code</div>
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
                </div>
            </div>
          </div>

          <div className={classes["cart-buttons"]}>
            <button>Next</button>
            <button>Cancel</button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Cart;

