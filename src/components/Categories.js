import React, { useState, useEffect, Fragment } from 'react';
import { getAllCategories } from '../api/index';
import classes from './Categories.module.css';
import { Link } from 'react-router-dom';

const Categories = (props) => {
  const [categories, setCategories] = useState([]);

  const fetchAllCategories = async () => {
    const allCategories = await getAllCategories();
    const onlyTenCategories = allCategories.slice(0, 10);
    setCategories(onlyTenCategories);
  };

  useEffect(() => {
    fetchAllCategories();
  }, []);

  return (
    <Fragment>
      {categories.length ? (
        <ul className={classes['category-list']}>
          {categories.map((cat) => {
            return (
              <li key={cat.id} className={classes['category-item']}>
                <Link to={`/category/${cat.id}`}> {cat.name}</Link>
              </li>
            );
          })}
        </ul>
      ) : (
        <h2>There are no categories Available</h2>
      )}
    </Fragment>
  );
};

export default Categories;
