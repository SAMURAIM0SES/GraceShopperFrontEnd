import React, { useState } from 'react';
import classes from './CardPrducts.module.css';
const { faker } = require('@faker-js/faker');

const CardProducts = (props) => {
  const {
    name,
    description,
    price,
    id,
    cartProducts,
    setCartproducts,
    setTotal,
    setTaxes,
  } = props;
  const [showProduct, setShowProduct] = useState(true);
  const [productQtn, setProductQtn] = useState(1);
  const [productPrice, setProductPrice] = useState(price);

  const addQuantityHandler = () => {
    setProductQtn((prev) => prev + 1);
    setProductPrice(price * (productQtn + 1));

    const productSelected = cartProducts.find((prod) => prod.id === id);
    const idxProduct = cartProducts.indexOf(productSelected);

    const updatePrice = price * (productQtn + 1);
    const updatePriceProduct = { ...productSelected, price: updatePrice };
    const cartProductsCopy = [...cartProducts];

    cartProductsCopy[idxProduct] = updatePriceProduct;
    setCartproducts(cartProductsCopy);
    const totalSum = cartProductsCopy.reduce(
      (prev, curr) => prev + curr.price * 1,
      0
    );
    setTotal(totalSum);
    setTaxes(totalSum * 0.1);
  };

  const reduceQuantityHandler = () => {
    setProductQtn((prev) => prev - 1);

    setProductPrice(productPrice - price);
  };

  return (
    <div>
      {showProduct && (
        <div className={classes['cart-body-shopping']}>
          <div className={classes['cart-shopping-products']}>
            <div className={classes['cart-product-image']}>
              <img src={`${faker.image.food(340, 240)}`} alt="random" />
            </div>
            <div className={classes['cart-product-description']}>
              <h4>{name}</h4>
              <p>{description}</p>
              <p>${productPrice}</p>
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
    </div>
  );
};

export default CardProducts;
