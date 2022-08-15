import React from "react";
import { useState } from "react"

const Products = async () => {
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [searchCategory, setSearchCategory] = useState(0)

    async function submitHandler(event) {
        event.preventDefault()
    }

    return (
        <div>
            <form onSubmit={submitHandler()}>
                <label>Categories</label>
                <select>
                    {categories.map((category) => {
                        return (
                            <option key={`categoryHolder${category.id}`} onChange={setSearchCategory(category.id)}>{category.name}</option>
                        )
                    })}
                </select>
                <input type='text' value={searchTerm} onChange={setSearchTerm(searchTerm)} placeholder="Search"></input>
                <button type="submit">🔍︎</button>
            </form>
            {products.map((product) => {
                return (
                    <div key={`productHolder${product.id}`}>
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p>${product.price}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Products;