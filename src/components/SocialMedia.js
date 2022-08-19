import classes from './SocialMedia.module.css';
import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaInstagram,
} from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <section className={classes['social-container']}>
      <h2 className={classes['socialMedia-title']}>Our Social Media</h2>
      <div className={classes['socialMedia-main']}>
        <ul className={classes['socialMedia-list']}>
          <li>
            <Link to="/" className={classes['socialMedia-link']}>
              <span className={classes.fa}>
                <FaFacebookF />
              </span>

              <span> - Facebook</span>
            </Link>
          </li>
          <li>
            <Link to="/" className={classes['socialMedia-link']}>
              <span className={classes.fa}>
                <FaTwitter />
              </span>
              <span> - Twitter</span>
            </Link>
          </li>
          <li>
            <Link to="/" className={classes['socialMedia-link']}>
              <span className={classes.fa}>
                <FaGooglePlusG />
              </span>
              <span> - Google</span>
            </Link>
          </li>
          <li>
            <Link to="/" className={classes['socialMedia-link']}>
              <span className={classes.fa}>
                <FaInstagram />
              </span>

              <span> - Instagram</span>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SocialMedia;
