import React from "react";
import { useState, useEffect } from "react"
import Layout from "./Layout"

const Products = () => {
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [searchCategory, setSearchCategory] = useState(0)

    const getAllIntialData = async () => {
        const allProducts = await {/* fetchcall */ }
        setProducts(allProducts)
        const allCategories = await {/* fetchcall */ }
        setCategories(allCategories)
    }



    useEffect(() => { getAllIntialData() }, [])

    async function submitHandler(event) {
        event.preventDefault()
    }

    return (
        <Layout>
            <h1>Products</h1>
            {/* <form onSubmit={() => submitHandler}>
                <label>Categories</label>
                <select>
                    {categories.map((category) => {
                        return (
                            <option key={`categoryHolder${category.id}`} onChange={(e) => setSearchCategory(category.id)}>{category.name}</option>
                        )
                    })}
                </select>
                <input type='text' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search"></input>
                <button type="submit">🔍︎</button>
            </form> */}
            {/* {products.map((product) => {
                return (
                    <div key={`productHolder${product.id}`}>
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p>${product.price}</p>
                    </div>
                )
            })} */}
        </Layout>
    )
}

export default Products;