import React, { useState } from 'react';
import classes from './CardPrducts.module.css';
const { faker } = require('@faker-js/faker');

const CardProducts = (props) => {
  const { name, description, price } = props;
  const [showProduct, setShowProduct] = useState(true);
  const [productQtn, setProductQtn] = useState(1);
  const [updatePrice, setUpdatedPrice] = useState(price);

  const addQuantityHandler = () => {
    setProductQtn((prev) => prev + 1);
    setUpdatedPrice(price * (productQtn + 1));
    props.onTotalSum(updatePrice);
  };

  const reduceQuantityHandler = () => {
    setProductQtn((prev) => prev - 1);
    setUpdatedPrice(updatePrice - price);
    if (productQtn == 1) {
      setShowProduct(false);
    }
    props.onTotalSum(updatePrice);
  };

  return (
    <>
      {showProduct && (
        <div className={classes['cart-body-shopping']}>
          <div className={classes['cart-shopping-products']}>
            <div className={classes['cart-product-image']}>
              <img src={`${faker.image.food(340, 240)}`} alt="random" />
            </div>
            <div className={classes['cart-product-description']}>
              <h4>{name}</h4>
              <p>{description}</p>
              <p>${updatePrice}</p>
            </div>
            <div className={classes['cart-product-quantity']}>
              <button onClick={addQuantityHandler}>+</button>
              <input
                type="text"
                value={productQtn}
                onChange={(e) => e.target.value}
              />
              <button onClick={reduceQuantityHandler}>-</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CardProducts;

/*
const CardProducts = (props) => {
  const { data } = props;
  const [productQtn, setProductQtn] = useState(1);

  const removeProductHandler = () => {};
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
              <input
                type="number"
                max="50"
                min="0"
                value={productQtn}
                onChange={(e) => setProductQtn(e.target.value)}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
*/
