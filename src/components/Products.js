import React from "react";
import { useState, useEffect } from "react"
import Layout from "./Layout"
import { getAllProducts, deleteProduct, updateProduct } from "../api"
import Pagination from "../pagination"
import { getCurrentData, storeCurrentData } from "../utils/auth";
import EditProduct from "./EditProduct";
import classes from './Products.module.css'


const Products = () => {
    const [products, setProducts] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [productsPerPage] = useState(15)
    const [confirmSelect, setConfirmSelect] = useState(false)
    const [editProduct, setEditProduct] = useState(false)
    const [admin] = useState(getCurrentData('admin'))
    const [token] = useState(getCurrentData('token'))
    const [cartQtn, setCartQtn] = useState(0);
    const [singleProduct, setSingleProduct] = useState({});
    const shoppingCart = getCurrentData('cart');
    const [cart, setCart] = useState(shoppingCart || []);

    //Edit useStates
    const [currentProduct, setCurrentProduct] = useState({})

    const getAllIntialData = async () => {
        const allProducts = await getAllProducts()
        setProducts(allProducts)
    }

    const setShoppingCart = async () => {
        getCurrentData('cart')
    }



    useEffect(() => { getAllIntialData() }, [])

    function searchHandler(event) {
        event.preventDefault()
        console.log(searchTerm)
        const searchString = searchTerm.toLowerCase()
        const filteredSearch = products.filter((product) => {
            return product.name.toLowerCase().includes(searchString)
        })
        setProducts(filteredSearch)
    }

    function deleteHandler(productId) {
        deleteProduct(productId)
        setConfirmSelect(false)
    }

    const addToCartHandler = (e) => {
        const [product] = products.filter(
            (prod) => prod.id === +e.target.dataset.id
        );
        const productAdded = [];
        const productSelected = { ...product, quantity: 1 };
        setSingleProduct(productSelected);
        productAdded.push(productSelected);

        const isProductInCart = shoppingCart.find(
            (prod) => prod.id == productSelected.id
        );
        if (isProductInCart) {
            return;
        }
        setCart((prev) => [...prev, ...productAdded]);
        setCartQtn((prev) => prev + 1);
    };

    storeCurrentData('cart', cart);

    {/* <form>
                <input type='text' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search"></input>
                <button onClick={searchHandler}>🔍︎</button>
            </form> */}

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct)

    const paginate = (pageNumbers) => setCurrentPage(pageNumbers)


    return (
        <Layout>
            <h1 className={classes['product-title']}>Products</h1>
            {editProduct ? <EditProduct product={currentProduct} /> : null}
            <div className={classes['product-header']}>
                {currentProducts.map((product) => {
                    return (
                        <div key={`productHolder${product.id}`} className={classes['product-card']}>
                            <h2 className={classes['product-name']}>{product.name}</h2>
                            <div className={classes['product-card-info']}>
                                <p className={classes['product-card-description']}>{product.description}</p>
                                <p className={classes['product-card-price']}>${product.price}</p>
                            </div>
                            <button className={classes['product-button']} data-id={product.id} onClick={addToCartHandler}>Purchase</button>
                            {(admin && confirmSelect === false && editProduct === false) ? <div>
                                <button className={classes['product-admin-button-edit']} onClick={() => {
                                    setEditProduct(true)
                                    setCurrentProduct(product)
                                }}>edit</button>
                                <button className={classes['product-admin-button-delete']} onClick={() => {
                                    setConfirmSelect(true)
                                }}>delete</button>
                            </div> : null}
                            {confirmSelect ? <div>
                                <button onClick={() => {
                                    deleteHandler(product.id)
                                    console.log(product.id)
                                }}>Confirm</button>
                                <button onClick={() => { setConfirmSelect(false) }}>Cancel</button>
                            </div> : null}
                        </div>
                    )
                })
                }
            </div>
            <Pagination productsPerPage={productsPerPage} totalProducts={products.length} paginate={paginate} className={classes['product-paginate']} />
        </Layout >
    )
}

export default Products;