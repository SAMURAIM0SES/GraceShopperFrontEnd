import Layout from './Layout';
import classes from './Home.module.css';
import Categories from './Categories';
const { faker } = require('@faker-js/faker');

//https://graceshopperbackend.herokuapp.com/

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

      <section className={classes.login}>
        <div>
          <form className={classes['login-form']}>
            <div className={classes['login-img']}>
              <img src={`${faker.image.imageUrl()}`} alt="random" />
            </div>
            <div className={classes['login-inputs']}>
              <label>Username</label>
              <input type="text" placeholder="Enter Username" />
              <label>Password</label>
              <input type="text" placeholder="Enter Password" />
            </div>
            <div className={classes['login-btn']}>
              <button>LOGIN</button>
            </div>
          </form>
        </div>

        <div>
          <h3>Do not have an account Sign up here!</h3>
        </div>
      </section>

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
                <p>STARTS</p>
              </div>
              <p className={classes['gallery-product-price']}>$300</p>
            </div>
            <div className={classes['product-2']}>
              <div className={classes['gallery-photo']}>
                <img src={`${faker.image.nature()}`} alt="random" />
              </div>
              <div className={classes['gallery-product-name']}>
                <p>PRODUCT NAME</p>
                <p>STARTS</p>
              </div>
              <p className={classes['gallery-product-price']}>$300</p>
            </div>
            <div className={classes['product-3']}>
              <div className={classes['gallery-photo']}>
                <img src={`${faker.image.business()}`} alt="random" />
              </div>
              <div className={classes['gallery-product-name']}>
                <p>PRODUCT NAME</p>
                <p>STARTS</p>
              </div>
              <p className={classes['gallery-product-price']}>$300</p>
            </div>
            <div className={classes['product-4']}>
              <div className={classes['gallery-photo']}>
                <img src={`${faker.image.abstract()}`} alt="random" />
              </div>
              <div className={classes['gallery-product-name']}>
                <p>PRODUCT NAME</p>
                <p>STARTS</p>
              </div>
              <p className={classes['gallery-product-price']}>$300</p>
            </div>
            <div className={classes['product-5']}>
              <div className={classes['gallery-photo']}>
                <img src={`${faker.image.animals()}`} alt="random" />
              </div>
              <div className={classes['gallery-product-name']}>
                <div>
                  <p>PRODUCT NAME</p>
                  <p>STARTS</p>
                </div>
                <p className={classes['gallery-product-price']}>$300</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>About your shop</section>
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
