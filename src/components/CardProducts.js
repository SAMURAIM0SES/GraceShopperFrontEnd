import React, { useState } from 'react';
import classes from './CardPrducts.module.css';
import { storeCurrentData, clearCurrentData } from './../utils/auth';
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
    qtn,
    initailProducts,
  } = props;
  const [showProduct, setShowProduct] = useState(true);
  const [productQtn, setProductQtn] = useState(qtn);
  const [productPrice, setProductPrice] = useState(+price);

  const addQuantityHandler = () => {
    const initailProductsCopy = [...initailProducts];
    const initialPrice = initailProductsCopy.find(
      (prod) => prod.id === id
    ).price;

    setProductPrice((prev) => prev + initialPrice * 1);
    setProductQtn((prev) => prev + 1);

    const productSelected = cartProducts.find((prod) => prod.id === id);
    const idxProduct = cartProducts.indexOf(productSelected);

    const updatePriceProduct = {
      ...productSelected,
      price: productPrice + initialPrice * 1,
      quantity: productQtn + 1 * 1,
    };

    console.log(updatePriceProduct);
    const cartProductsCopy = [...cartProducts];
    cartProductsCopy[idxProduct] = updatePriceProduct;
    setCartproducts(cartProductsCopy);
    storeCurrentData('cart', cartProductsCopy);
    const totalSum = cartProductsCopy.reduce(
      (prev, curr) => prev + curr.price * 1,
      0
    );
    setTotal(totalSum);
    setTaxes(totalSum * 0.12);
  };

  const reduceQuantityHandler = () => {
    setProductQtn((prev) => prev - 1);
    const initailProductsCopy = [...initailProducts];
    const initialPrice = initailProductsCopy.find(
      (prod) => prod.id === id
    ).price;
    const productSelected = cartProducts.find((prod) => prod.id === id);
    const idxProduct = cartProducts.indexOf(productSelected);

    console.log(productPrice, 'productPrice');
    console.log(initialPrice, 'initial price');

    const updatePriceProduct = {
      ...productSelected,
      price: productPrice - initialPrice * 1,
      quantity: productQtn - 1 * 1,
    };
    setProductPrice(productPrice - initialPrice * 1);
    const cartProductsCopy = [...cartProducts];
    cartProductsCopy[idxProduct] = updatePriceProduct;
    setCartproducts(cartProductsCopy);
    storeCurrentData('cart', cartProductsCopy);
    const totalSum = cartProductsCopy.reduce(
      (prev, curr) => prev + curr.price * 1,
      0
    );
    setTotal(totalSum);
    setTaxes(totalSum * 0.12);
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

/*

const addQuantityHandler = () => {
    const initailProductsCopy = [...initailProducts];
    const initialPrice = initailProductsCopy.find(
      (prod) => prod.id === id
    ).price;
    setProductQtn((prev) => prev + 1);
    setProductPrice(price * 1 * productQtn + 1);
    setProductPrice(price * 1 + initialPrice);

    const productSelected = cartProducts.find((prod) => prod.id === id);
    const idxProduct = cartProducts.indexOf(productSelected);

    const updatePriceProduct = {
      ...productSelected,
      price: productPrice + price * 1,
      quantity: productQtn + 1 * 1,
    };

    const cartProductsCopy = [...cartProducts];
    cartProductsCopy[idxProduct] = updatePriceProduct;
    setCartproducts(cartProductsCopy);
    storeCurrentData('cart', cartProductsCopy);
    const totalSum = cartProductsCopy.reduce(
      (prev, curr) => prev + curr.price * 1,
      0
    );
    setTotal(totalSum);
    setTaxes(totalSum * 0.12);
  };
*/
