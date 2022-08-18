import React from "react";
import { useState, useEffect } from "react"
import Layout from "./Layout"
import { getAllProducts, deleteProduct } from "../api"
import Pagination from "../pagination"
import { getCurrentData } from "../utils/auth";


const Products = () => {
    const [products, setProducts] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [productsPerPage] = useState(10)
    const [confirmSelect, setConfirmSelect] = useState(false)
    const [editProduct, setEditProduct] = useState(false)
    const [admin] = useState(getCurrentData('admin'))

    const getAllIntialData = async () => {
        const allProducts = await getAllProducts()
        setProducts(allProducts)
    }



    useEffect(() => { getAllIntialData() }, [searchTerm])

    function searchHandler(event) {
        event.preventDefault()
        console.log(searchTerm)
        const searchString = searchTerm.toLowerCase()
        const filteredSearch = products.filter((product) => {
            return product.name.toLowerCase().includes(searchString)
        })
        setProducts(filteredSearch)
    }

    function deleteHandler(productid) {
        deleteProduct(productid)
    }

    function editHandler() {

    }

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct)

    const paginate = (pageNumbers) => setCurrentPage(pageNumbers)


    return (
        <Layout>
            <h1>Products</h1>
            {/* <form>
                <input type='text' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search"></input>
                <button onClick={searchHandler}>🔍︎</button>
            </form> */}
            {currentProducts.map((product) => {
                return (
                    <div key={`productHolder${product.id}`}>
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p>${product.price}</p>
                        {(admin && confirmSelect == false) ? <div>
                            <button onClick={() => {
                                setEditProduct(true)
                            }}>edit</button>
                            <button onClick={() => {
                                setConfirmSelect(true)
                            }}>delete</button>
                        </div> : null}
                        {confirmSelect ? <div>
                            <button onClick={deleteHandler(product.id)}>Confirm</button>
                            <button onClick={setConfirmSelect(false)}>Cancel</button>
                        </div> : null}
                        {editProduct ? <form onSubmit={editHandler}>
                            <input></input>
                            <input></input>
                            <input></input>
                            <button type='submit'></button>
                        </form> : null}
                    </div>
                )
            })
            }
            <Pagination productsPerPage={productsPerPage} totalProducts={products.length} paginate={paginate} />
        </Layout >
    )
}

export default Products;