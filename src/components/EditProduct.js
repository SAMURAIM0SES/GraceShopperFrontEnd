import React from 'react';
import { updateProduct } from '../api';
import { useState, useEffect } from 'react';
import { getCurrentData } from '../utils/auth';
import { getAllCategories } from '../api';
import classes from './EditProduct.module.css';

const EditProduct = (props) => {
  const { setEditProduct } = props;
  const [editProduct] = useState(props.product);
  const [categories, setCategories] = useState([]);
  const token = getCurrentData('token');
  const [productName, setProductName] = useState(props.product.name);
  const [productDescription, setProductDescription] = useState(
    props.product.description
  );
  const [productPrice, setProductPrice] = useState(props.product.price);
  const [category_id, setCategory_id] = useState(props.product.category_id);
  const [inventory_id, setInventory_id] = useState(props.product.inventory_id);
  const [product_id, setProduct_id] = useState(props.product.id);

  async function startingData() {
    const allCategories = await getAllCategories();
    setCategories(allCategories);
  }

  useEffect(() => {
    startingData();
  }, []);

  const editHandler = (e) => {
    e.preventDefault();
    updateProduct(
      productName,
      productDescription,
      productPrice,
      category_id,
      inventory_id,
      token,
      product_id
    );
  };

  const closeEditHandler = () => {
    setEditProduct(false);
  };

  return (
    <form
      className={classes['edit-form']}
      onSubmit={(e) => {
        editHandler(e);
      }}
    >
      <div className={classes['edit-field']}>
        <label>Product Name</label>
        <input
          className={classes['edit-name']}
          type="text"
          value={productName}
          onChange={(e) => {
            setProductName(e.target.value);
          }}
        />
      </div>
      <div className={classes['edit-field']}>
        <label>Product Description</label>
        <input
          className={classes['edit-description']}
          type="text"
          value={productDescription}
          onChange={(e) => {
            setProductDescription(e.target.value);
          }}
        />
      </div>
      <div className={classes['edit-field']}>
        <label>Price</label>
        <input
          className={classes['edit-price']}
          type="text"
          value={productPrice}
          onChange={(e) => {
            setProductPrice(e.target.value);
          }}
        />
      </div>
      <div className={classes['edit-btn']}>
        <button type="submit">Submit</button>
        <button onClick={closeEditHandler}>Cancel</button>
      </div>
    </form>
  );
};

export default EditProduct;
