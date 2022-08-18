import React from "react";
import { useState, useEffect } from "react"
import Layout from "./Layout"
import { getAllProducts, deleteProduct, updateProduct } from "../api"
import Pagination from "../pagination"
import { getCurrentData } from "../utils/auth";
import EditProduct from "./EditProduct";


const Products = () => {
    const [products, setProducts] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [productsPerPage] = useState(10)
    const [confirmSelect, setConfirmSelect] = useState(false)
    const [editProduct, setEditProduct] = useState(false)
    const [admin] = useState(getCurrentData('admin'))
    const [token] = useState(getCurrentData('token'))

    //Edit useStates
    const [productName, setProductName] = useState('')
    const [productDescription, setProductDescription] = useState('')
    const [productPrice, setProductPrice] = useState(0)
    const [category_id, setCategory_id] = useState(0)
    const [inventory_id, setInventory_id] = useState(0)
    const [product_id, setProduct_id] = useState(0)

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


    // function editHandler() {
    //     updateProduct(
    //         productName,
    //         productDescription,
    //         productPrice,
    //         category_id,
    //         inventory_id,
    //         token,
    //         product_id
    //     )
    //     setEditProduct(false)
    // }

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
                        {(admin && confirmSelect === false && editProduct === false) ? <div>
                            <button onClick={() => {
                                setEditProduct(true)
                                setProductName(product.name)
                                setProductDescription(product.description)
                                setProductPrice(product.price)
                                setCategory_id(product.category_id)
                                setInventory_id(product.inventory_id)
                                setProduct_id(product.id)
                            }}>edit</button>
                            <button onClick={() => {
                                setConfirmSelect(true)
                            }}>delete</button>
                        </div> : null}
                        {confirmSelect ? <div>
                            <button onClick={() => {
                                deleteProduct(product.id)
                                setConfirmSelect(false)
                            }}>Confirm</button>
                            <button onClick={() => { setConfirmSelect(false) }}>Cancel</button>
                        </div> : null}
                        {/* {editProduct ? <EditProduct
                            productName={productName}
                            setProductName={setProductName}
                            productDescription={productDescription}
                            setProductDescription={setProductDescription}
                            productPricd={productPrice}
                            setProductPrice={productPrice}
                            category_id={category_id}
                            setCategory_id={setCategory_id}
                            inventory_id={inventory_id}

                        /> : null} */}
                    </div>
                )
            })
            }
            <Pagination productsPerPage={productsPerPage} totalProducts={products.length} paginate={paginate} />
        </Layout >
    )
}

export default Products;