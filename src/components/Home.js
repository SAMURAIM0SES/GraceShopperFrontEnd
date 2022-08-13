import Layout from './Layout';
import classes from './Home.module.css';
import Categories from './Categories';
import Login from './Login';
import FeatureProducts from './FeatureProducts';
import { BsSearch } from 'react-icons/bs';

const { faker } = require('@faker-js/faker');

//https://graceshopperbackend.herokuapp.com/
// npm install react-icons --save

const DUMMY_DATA = [
  {
    id: 1,
    name: 'Electronics',
    description:
      'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
  },

  {
    id: 2,
    name: 'Home',
    description:
      'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
  },

  {
    id: 3,
    name: 'Movies',
    description:
      'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
  },

  {
    id: 4,
    name: 'Jewelery',
    description:
      'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
  },

  {
    id: 5,
    name: 'Industrial',
    description: 'The Football Is Good For Training And Recreational Purposes',
  },

  {
    id: 6,
    name: 'Clothing',
    description:
      'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
  },

  {
    id: 7,
    name: 'Electronics',
    description:
      'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
  },

  {
    id: 8,
    name: 'Outdoors',
    description:
      'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
  },

  {
    id: 9,
    name: 'Health',
    description:
      'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
  },

  {
    id: 10,
    name: 'Kids',
    description:
      'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality',
  },
];

const Home = () => {
  return (
    <Layout>
      <section>
        <div className={classes.filter}>
          <span>
            <BsSearch />
          </span>
          <input type="text" placeholder="Search..." />
          <button>Search</button>
        </div>
      </section>
      <Categories data={DUMMY_DATA} />

      <section>
        <div className={classes.deal}>
          <h2 className={classes['deal-title']}>TRIPLE DEAL OF THE DAY</h2>
          <div className={classes['deal-gallery']}>
            <div className={classes['deal-gallery-photo']}>
              <img src={`${faker.image.food()}`} alt="random" />
            </div>
            <div className={classes['deal-gallery-photo']}>
              <img src={`${faker.image.nature()}`} alt="random" />
            </div>
            <div className={classes['deal-gallery-photo']}>
              <img src={`${faker.image.animals()}`} alt="random" />
            </div>
          </div>
          <div className={classes['deal-button']}>
            <button>SHOP NOW</button>
          </div>
        </div>
      </section>
      <Login />
      <FeatureProducts />

      <section>
        <div className={classes['aboutShop-main']}>
          <h2 className={classes['aboutShop-title']}>About Our Shop</h2>
          <p className={classes['aboutShop-description']}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Home;

/*
   <div className={classes['gallery-product-name']}>
                <p>PRODUCT NAME</p>
                <p>STARTS</p>
              </div>
              <p className={classes['gallery-product-price']}>$300</p>
*/
