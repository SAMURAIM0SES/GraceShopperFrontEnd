import classes from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={classes['footer-main']}>
      <div className={classes['footer-content']}>
        <div>LOGO</div>
        <div className={classes['footer-container']}>
          <div className={classes['footer-title']}>MAIN MENU</div>
          <div>
            <ul className={classes['footer-list']}>
              <li>Home</li>
              <li>About</li>
              <li>Help</li>
              <li>Shop</li>
            </ul>
          </div>
        </div>
        <div className={classes['footer-container']}>
          <div className={classes['footer-title']}>COMPANY</div>
          <div>
            <ul className={classes['footer-list']}>
              <li>The company</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>
        </div>
        <div className={classes['footer-container']}>
          <div className={classes['footer-title']}>DISCOVER</div>
          <div>
            <ul className={classes['footer-list']}>
              <li>The Team</li>
              <li>Our History</li>
              <li>Brand Motto</li>
            </ul>
          </div>
        </div>
        <div className={classes['footer-container']}>
          <div className={classes['footer-title']}>FIND US ON</div>
          <div>
            <ul className={classes['footer-list']}>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instragram</li>
            </ul>
          </div>
        </div>
      </div>
      <h2 className={classes['footer-end']}>RestWant Supplies</h2>
    </footer>
  );
};

export default Footer;
