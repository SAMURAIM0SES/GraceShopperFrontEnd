import React, { useState } from 'react';
import classes from './CardPrducts.module.css';
const { faker } = require('@faker-js/faker');

const CardProducts = (props) => {
  const { name, description, price } = props;
  const [productQtn, setProductQtn] = useState(1);

  const removeProductHandler = () => {};
  return (
    <div className={classes['cart-body-shopping']}>
      <h3>Shopping Cart</h3>
      <div className={classes['cart-shopping-products']}>
        <div className={classes['cart-product-image']}>
          <img src={`${faker.image.nature()}`} alt="random" />
        </div>
        <div className={classes['cart-product-description']}>
          <h4>{name}</h4>
          <p>{description}</p>
          <p>${price}</p>
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
    </div>
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
