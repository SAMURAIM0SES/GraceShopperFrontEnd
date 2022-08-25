import React from "react";
import { updateProduct } from "../api";
import { useState, useEffect } from "react"
import { getCurrentData } from "../utils/auth";
import { getAllCategories } from "../api";
import classes from './EditProduct.module.css'

const EditProduct = (props) => {
    const [editProduct] = useState(props.product)
    const [categories, setCategories] = useState([])
    const [token] = useState(getCurrentData('token'))
    const [productName, setProductName] = useState(props.product.name)
    const [productDescription, setProductDescription] = useState(props.product.description)
    const [productPrice, setProductPrice] = useState(props.product.price)
    const [category_id, setCategory_id] = useState(props.product.category_id)
    const [inventory_id, setInventory_id] = useState(props.product.inventory_id)
    const [product_id, setProduct_id] = useState(props.product.id)

    async function startingData() {
        const allCategories = await getAllCategories()
        setCategories(allCategories)
    }

    useEffect(() => { startingData() }, [])

    function editHandler() {
        updateProduct(
            productName,
            productDescription,
            productPrice,
            category_id,
            inventory_id,
            token,
            product_id
        )
    }

    return (
        <form className={classes['edit-form']} onSubmit={() => { editHandler() }}>
            <input className={classes['edit-name']} type='text' value={productName} onChange={(e) => { setProductName(e.target.value) }}></input>
            <input className={classes['edit-description']} type='text' value={productDescription} onChange={(e) => { setProductDescription(e.target.value) }}></input>
            <input className={classes['edit-price']} type='text' value={productPrice} onChange={(e) => { setProductPrice(e.target.value) }}></input>
            <button className={classes['edit-submit']} type='submit'>Submit</button>
            <button className={classes['edit-cancel']}>Cancel</button>
        </form>
    )
}

export default EditProduct;