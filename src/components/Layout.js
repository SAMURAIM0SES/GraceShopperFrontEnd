import classes from './Layout.module.css';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = (props) => {
  return (
    <div className={classes['layout-main']}>
      <header className={classes['layout-header']}>
        <nav className={classes['layout-navbar']}>
          <Navbar />
        </nav>
        <h1 className={classes['layout-title']}>RestaWant Supplies</h1>
      </header>
      <main className={classes['layout-body']}>{props.children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
