import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={classes['navbar-main']}>
      <ul className={classes['navbar-list']}>
        <li>Home</li>
        <li>About</li>
        <li>Shop</li>
        <li>Help</li>
        <li>Admin</li>
      </ul>
    </nav>
  );
};

export default Navbar;
