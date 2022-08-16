import classes from './Navbar.module.css';
import { Link } from 'react-router-dom';
import { GiShoppingCart } from 'react-icons/gi';
import { VscHistory, VscListSelection } from 'react-icons/vsc';
import { AiOutlineHome } from 'react-icons/ai';
import { BsChatDots } from 'react-icons/bs';

const Navbar = () => {
  return (
    <nav className={classes['navbar-main']}>
      <ul className={classes['navbar-list']}>
        <li className={classes['navbar-item']}>
          <Link to="/">
            Home <AiOutlineHome />
          </Link>
        </li>
        <li className={classes['navbar-item']}>
          <Link to="/products">
            Products <VscListSelection />
          </Link>
        </li>
        <li className={classes['navbar-item']}>
          <Link to="/cart">
            Cart <GiShoppingCart />
          </Link>
        </li>
        <li className={classes['navbar-item']}>
          <Link to="/">
            Order History <VscHistory />
          </Link>
        </li>
        <li className={classes['navbar-item']}>
          <Link to="/">
            help <BsChatDots />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
