import React, { useState } from 'react';
import classes from './CardPrducts.module.css';
import { storeCurrentData } from './../utils/auth';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
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
    const initailProductsCopy = [...initailProducts];
    const initialPrice = initailProductsCopy.find(
      (prod) => prod.id === id
    ).price;

    setProductPrice((prev) => prev - initialPrice * 1);
    setProductQtn((prev) => prev - 1);

    const productSelected = cartProducts.find((prod) => prod.id === id);
    const idxProduct = cartProducts.indexOf(productSelected);

    const updatePriceProduct = {
      ...productSelected,
      price: productPrice - initialPrice * 1,
      quantity: productQtn - 1 * 1,
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

    if (productQtn === 1) {
      console.log('delete');
      const remainPorducts = cartProductsCopy.splice(idxProduct, 1);
      storeCurrentData('cart', cartProductsCopy);
    }
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
              <button onClick={addQuantityHandler}>
                <AiOutlinePlus />
              </button>
              <input
                type="text"
                value={productQtn}
                onChange={(e) => e.target.value}
              />
              <button onClick={reduceQuantityHandler}>
                <AiOutlineMinus />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardProducts;
