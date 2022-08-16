import classes from './Navbar.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { GiShoppingCart } from 'react-icons/gi';
import { VscHistory, VscListSelection } from 'react-icons/vsc';
import { AiOutlineHome } from 'react-icons/ai';
import { BsChatDots } from 'react-icons/bs';
import { getCurrentData, clearCurrentData } from '../utils/auth';

const Navbar = (props) => {
  const token = getCurrentData('token');
  const { userLogged, setUserLogged } = props;
  const navigate = useNavigate();

  const logoutHandler = () => {
    navigate('/');
    clearCurrentData();
    setUserLogged('');
  };

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
        {userLogged || token ? (
          <li className={classes['navbar-item']}>
            <Link to="/">
              Order History <VscHistory />
            </Link>
          </li>
        ) : null}

        <li className={classes['navbar-item']}>
          <Link to="/">
            help <BsChatDots />
          </Link>
        </li>
        {userLogged || token ? (
          <li className={classes['navbar-item']}>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        ) : null}
      </ul>
    </nav>
  );
};

export default Navbar;
