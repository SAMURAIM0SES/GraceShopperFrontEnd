import classes from './NotFound.module.css';
import { useNavigate } from 'react-router-dom';

const NotFound = (props) => {
  const navigate = useNavigate();
  if (!props.show) {
    return null;
  }

  const closeModalHandler = () => {
    navigate('/');
  };
  return (
    <div className={classes.NotFound}>
      <div className={classes['NotFound-content']}>
        <div className={classes['NotFound-header']}>
          <h4 className={classes['NotFound-title']}>{props.title}</h4>
        </div>
        <div className={classes['NotFound-body']}>{props.body}</div>
        <div className={classes['NotFound-footer']}>
          <button
            className={classes['NotFound-btn']}
            onClick={closeModalHandler}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
