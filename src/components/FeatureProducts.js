import classes from './FeatureProducts.module.css';
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from 'react-icons/io';
const { faker } = require('@faker-js/faker');

const FeatureProducts = () => {
  return (
    <section>
      <div className={classes['features-main']}>
        <h2 className={classes['features-title']}>Feature Products</h2>
        <div className={classes['features-product-header']}>
          <div className={classes['features-product-container']}>
            <div className={classes['features-product-image']}>
              <img src={`${faker.image.animals()}`} alt="random" />
            </div>
            <div className={classes['features-product-description']}>
              <p>PRODUCT NAME</p>
              <p>$300</p>
            </div>
          </div>

          <div className={classes['features-product-container']}>
            <div className={classes['features-product-image']}>
              <img src={`${faker.image.food()}`} alt="random" />
            </div>
            <div className={classes['features-product-description']}>
              <p>PRODUCT NAME</p>
              <p>$300</p>
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
  );
};

export default FeatureProducts;
