import React from "react";
import { updateProduct } from "../api";

const EditProduct = (props) => {

    const [productName, setProductName] = useState(props.productName, props.setProductName)
    const [productDescription, setProductDescription] = useState(props.productDescription, props.setProductDescription)
    const [productPrice, setProductPrice] = useState(props.productPrice, props.setProductPrice)
    const [category_id, setCategory_id] = useState(props.category_id, props.setCategory_id)
    const [inventory_id, setInventory_id] = useState(props.inventory_id, props.setInventory_id)
    const [product_id, setProduct_id] = useState(props.product_id, props.setProduct_id)

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
        <form onSubmit={editHandler}>
            <input type='text' value={productName} onChange={(e) => { setProductName(e.target.value) }}></input>
            <input type='text' value={productDescription} onChange={(e) => { setProductDescription(e.target.value) }}></input>
            <input type='text' value={productPrice} onChange={(e) => { setProductPrice(e.target.value) }}></input>
            <select value={category_id}>
                {categories.map((category) => {
                    return (
                        <option key={`category ${category.id}`} onClick={setCategory_id(category.id)}>{category.name}</option>
                    )
                })}
            </select>
            <button type='submit'>Submit</button>
            <button>Cancel</button>
        </form>
    )
}

export default EditProduct;