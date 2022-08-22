import React, { useState, useEffect } from 'react';
import { getAllProducts } from '../api/index';
import classes from './FeatureProducts.module.css';
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from 'react-icons/io';
import { MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { nanoid } from 'nanoid';
const { faker } = require('@faker-js/faker');

const FeatureProducts = () => {
  const [initialProducts, setinitialProducts] = useState([]);
  const [randomProducts, setRandomProducts] = useState([]);

  const fetchProducts = async () => {
    const featureProducts = await getAllProducts();
    if (featureProducts) {
      setinitialProducts(featureProducts.slice(0, 2));
      setRandomProducts(featureProducts.slice(0, 5));
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <section>
      <div className={classes['features-main']}>
        <h2 className={classes['features-title']}>
          Feature Products <MdOutlineProductionQuantityLimits />
        </h2>
        <div className={classes['features-product-header']}>
          {initialProducts.map((prod, idx) => {
            return (
              <div
                className={classes['features-product-container']}
                key={`${prod.name}+${prod.id}`}
              >
                <div className={classes['features-product-image']}>
                  <img
                    src={`${faker.image.food(640, 480, true)}`}
                    alt="random"
                  />
                </div>
                <div className={classes['features-product-description']}>
                  <p>{prod.name}</p>
                  <p>{prod.price}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className={classes['features-product-footer']}>
          {randomProducts.map((prod, idx) => {
            return (
              <div className={classes[`product-${idx + 1}`]} key={nanoid()}>
                <div className={classes['gallery-photo']}>
                  <img
                    src={`${faker.image.food(640, 480, true)}`}
                    alt="random"
                  />
                </div>
                <div className={classes['gallery-product-name']}>
                  <p>{prod.name}</p>
                  <div>
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStarHalf />
                    <IoIosStarOutline />
                  </div>
                </div>
                <p className={classes['gallery-product-price']}>{prod.price}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureProducts;

/*
<section>
      <div className={classes['features-main']}>
        <h2 className={classes['features-title']}>Feature Products</h2>
        <div className={classes['features-product-header']}>
          <div className={classes['features-product-container']}>
            <div className={classes['features-product-image']}>
              <img src={`${faker.image.animals()}`} alt="random" />
            </div>
            <div className={classes['features-product-description']}>
              <p>Name</p>
              <p>Price</p>
            </div>
          </div>

          <div className={classes['features-product-container']}>
            <div className={classes['features-product-image']}>
              <img src={`${faker.image.food()}`} alt="random" />
            </div>
            <div className={classes['features-product-description']}>
              <p>Name</p>
              <p>Price</p>
            </div>
          </div>
        </div>

        <div className={classes['features-product-footer']}>
          <div className={classes['product-1']}>
            <div className={classes['gallery-photo']}>
              <img src={`${faker.image.food()}`} alt="random" />
            </div>
            <div className={classes['gallery-product-name']}>
              <p>PRODUCT NAME</p>
              <div>
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStarHalf />
                <IoIosStarOutline />
              </div>
            </div>
            <p className={classes['gallery-product-price']}>$300</p>
          </div>
          <div className={classes['product-2']}>
            <div className={classes['gallery-photo']}>
              <img src={`${faker.image.nature()}`} alt="random" />
            </div>
            <div className={classes['gallery-product-name']}>
              <p>PRODUCT NAME</p>
              <p>
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStarHalf />
                <IoIosStarHalf />
              </p>
            </div>
            <p className={classes['gallery-product-price']}>$300</p>
          </div>
          <div className={classes['product-3']}>
            <div className={classes['gallery-photo']}>
              <img src={`${faker.image.business()}`} alt="random" />
            </div>
            <div className={classes['gallery-product-name']}>
              <p>PRODUCT NAME</p>
              <p>
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStarHalf />
                <IoIosStarHalf />
              </p>
            </div>
            <p className={classes['gallery-product-price']}>$300</p>
          </div>
          <div className={classes['product-4']}>
            <div className={classes['gallery-photo']}>
              <img src={`${faker.image.abstract()}`} alt="random" />
            </div>
            <div className={classes['gallery-product-name']}>
              <p>PRODUCT NAME</p>
              <p>
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStarHalf />
                <IoIosStarOutline />
              </p>
            </div>
            <p className={classes['gallery-product-price']}>$300</p>
          </div>
          <div className={classes['product-5']}>
            <div className={classes['gallery-photo']}>
              <img src={`${faker.image.animals()}`} alt="random" />
            </div>
            <div className={classes['gallery-product-name']}>
              <p>PRODUCT NAME</p>
              <p>
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStarHalf />
                <IoIosStarOutline />
              </p>
            </div>
            <p className={classes['gallery-product-price']}>$300</p>
          </div>
        </div>
      </div>
    </section>

*/
