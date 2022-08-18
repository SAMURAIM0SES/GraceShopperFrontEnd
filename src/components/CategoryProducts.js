import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from './Layout';
import { getCategory, getAllProducts } from '../api/index';
import { GoHome } from 'react-icons/go';
import { nanoid } from 'nanoid';
import classes from './CategoryProducts.module.css';
import { storeCurrentData, getCurrentData } from './../utils/auth';
const { faker } = require('@faker-js/faker');

const CategoryProducts = () => {
  const { categoryId } = useParams();
  const [categoryInfo, setCategoryInfo] = useState({});
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [singleProduct, setSingleProduct] = useState({});
  const shoppingCart = getCurrentData('cart');
  const [cart, setCart] = useState(shoppingCart || []);

  const fetchCategory = async (id) => {
    const [category] = await getCategory(id);
    if (category) {
      setCategoryInfo(category);
    }
  };

  const fetchAllProducts = async () => {
    const allProducts = await getAllProducts();
    if (allProducts) {
      const productsByCategory = await allProducts.filter(
        (prod) => prod.category_id == categoryId
      );
      setCategoryProducts(productsByCategory);
    }
  };

  const creatingCart = () => {
    const cart = getCurrentData('cart');
    if (!cart) {
      storeCurrentData('cart', []);
    } else {
      return;
    }
  };

  useEffect(() => {
    fetchCategory(categoryId);
    fetchAllProducts();
    creatingCart();
  }, []);

  const addToCartHandler = (e) => {
    const [product] = categoryProducts.filter(
      (prod) => prod.id === +e.target.dataset.id
    );
    if (product) {
      const productSelected = { ...product, quantity: 1 };
      setSingleProduct(productSelected);
      const productAdded = [];
      const isProductInCart = cart.find(
        (prod) => prod.id == productSelected.id
      );
      if (isProductInCart) {
        return;
      }
      productAdded.push(productSelected);
      if (productAdded.length) {
        setCart((prev) => [...prev, ...productAdded]);
      }
    }
    if (cart.length) {
      storeCurrentData('cart', cart);
    }
  };

  return (
    <Layout>
      <section>
        <div className={classes['category-prod-header']}>
          <h2>{categoryInfo.name}</h2>
          <Link to="/">
            Go Home <GoHome />
          </Link>
          <p>{categoryInfo.description}</p>
        </div>
        <div className={classes['category-prod-body']}>
          {categoryProducts.map((prod) => {
            return (
              <div className={classes['product-card']} key={nanoid()}>
                <div className={classes['product-card-img']}>
                  <h4>{prod.name}</h4>
                  <img src={`${faker.image.food(640, 480)}`} alt="random" />
                </div>
                <div className={classes['product-card-info']}>
                  <p className={classes['product-card-description']}>
                    {prod.description}
                  </p>
                  <p className={classes['product-card-price']}>${prod.price}</p>
                  <div className={classes['product-card-btn']}>
                    <button data-id={prod.id} onClick={addToCartHandler}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
};

export default CategoryProducts;

/*
const addToCartHandler = (e) => {
    const [product] = categoryProducts.filter(
      (prod) => prod.id === +e.target.dataset.id
    );
    if (product) {
      const productSelected = { ...product, quantity: 1 };
      setSingleProduct(productSelected);
      const productAdded = [];
      const isProductInCart = cart.find((prod) => prod.id == productSelected.id);
      if (isProductInCart) {
        return;
      }
      productAdded.push(productSelected);
      if (productAdded.length) {
        setCart((prev) => [...prev, ...productAdded]);
      }
    }
    if (cart.length) {
      storeCurrentData('cart', cart);
    }
  };
*/
