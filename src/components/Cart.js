import Layout from './Layout';
import classes from './Cart.module.css';
import CardProducts from './CardProducts';
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
  return (
    <Layout>
      <section>
        <div className={classes['cart-main']}>
          <div className={classes['cart-header']}>
            <p>1. Shopping Cart</p>
            <p>2. Shipping Details</p>
            <p>3. Payment Options</p>
          </div>

          <div className={classes['cart-body']}>
            <CardProducts data={DUMMY_PRODUCTS} />

            <div className={classes['cart-body-summary']}>
              <h3>Summary</h3>
              <div className={classes['cart-body-coupon']}>
                Enter Coupon Code
              </div>
              <div className={classes['summary-detail']}>
                <div className={classes['summary-payment']}>
                  <div>Subtotal</div>
                  <div>$600</div>
                </div>
                <div className={classes['summary-payment']}>
                  <div>Shipping</div>
                  <div>Free</div>
                </div>
                <div className={classes['summary-payment']}>
                  <div>Taxes</div>
                  <div>$13</div>
                </div>
              </div>
              <div className={classes['summary-total']}>
                <div>TOTAL</div>
                <div>$613</div>
              </div>
            </div>
          </div>

          <div className={classes['cart-buttons']}>
            <button>Next</button>
            <button>Cancel</button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Cart;
