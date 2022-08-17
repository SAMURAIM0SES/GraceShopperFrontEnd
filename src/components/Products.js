import React from "react";
import { useState, useEffect } from "react"
import Layout from "./Layout"
import { getAllProducts } from "../api"
import Pagination from "../pagination"

const Products = () => {
    const [products, setProducts] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    const getAllIntialData = async () => {
        const allProducts = await getAllProducts()
        setProducts(allProducts)
    }



    useEffect(() => { getAllIntialData() }, [searchTerm])

    function searchHandler(event) {
        event.preventDefault()
        console.log(searchCategory, searchTerm)
        const searchString = searchTerm.toLowerCase()
        const filteredSearch = products.filter((product) => {
            return product.name.toLowerCase().includes(searchString)
        })
        setProducts(filteredSearch)
    }


    return (
        <Layout>
            <h1>Products</h1>
            <form>
                <input type='text' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search"></input>
                <button onClick={searchHandler}>🔍︎</button>
            </form>
            {
                products.map((product) => {
                    return (
                        <div key={`productHolder${product.id}`}>
                            <h2>{product.name}</h2>
                            <p>{product.description}</p>
                            <p>${product.price}</p>
                        </div>
                    )
                })
            }
        </Layout >
    )
}

export default Products;