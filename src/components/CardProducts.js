import classes from './CardPrducts.module.css';
const { faker } = require('@faker-js/faker');

const CardProducts = (props) => {
  const { data } = props;
  return (
    <div className={classes['cart-body-shopping']}>
      <h3>Shopping Cart</h3>

      {data.map((prod) => {
        return (
          <div className={classes['cart-shopping-products']}>
            <div className={classes['cart-product-image']}>
              <img src={`${faker.image.nature()}`} alt="random" />
            </div>
            <div className={classes['cart-product-description']}>
              <h4>{prod.name}</h4>
              <p>{prod.description}</p>
              <p>${prod.price}</p>
            </div>
            <div className={classes['cart-product-quantity']}>
              <input type="number" max="50" min="0" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardProducts;

/*

<div className={classes['cart-body-shopping']}>
      <h3>Shopping Cart</h3>
      <div className={classes['cart-shopping-products']}>
        <div className={classes['cart-product-image']}>
          <img src={`${faker.image.nature()}`} alt="random" />
        </div>
        <div className={classes['cart-product-description']}>
          <h4>PRODUCT NAME</h4>
          <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet</p>
          <p>$300</p>
        </div>
        <div className={classes['cart-product-quantity']}>
          <input type="number" max="50" min="0" />
        </div>
      </div>
      <div className={classes['cart-shopping-products']}>
        <div className={classes['cart-product-image']}>
          <img src={`${faker.image.nature()}`} alt="random" />
        </div>
        <div className={classes['cart-product-description']}>
          <h4>PRODUCT NAME</h4>
          <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet</p>
          <p>$300</p>
        </div>
        <div className={classes['cart-product-quantity']}>
          <input type="number" max="50" min="0" />
        </div>
      </div>
    </div>
*/
