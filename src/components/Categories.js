import classes from './Categories.module.css';

const Categories = (props) => {
  const { data } = props;
  return (
    <ul className={classes['category-list']}>
      {data.map((cat) => {
        return (
          <li key={cat.id} className={classes['category-item']}>
            {cat.name}
          </li>
        );
      })}
    </ul>
  );
};

export default Categories;
