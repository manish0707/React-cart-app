import React, { Component } from 'react'
import { connect } from 'react-redux'
import set_product_list from '../store/actions/ProductListActions';
import ProductCard from './ProductCard';
import Styles from '../styles/ProductList.module.css';
import productsData from '../ProductsData';

class ProductList extends Component {
    componentDidMount() {
        const products = productsData
        this.props.setProductList(products);
    }
    render() {
        const productListCards = this.props.productList.map(product => (
            <ProductCard
                key={product.id}
                id={product.id} 
                name={product.name} 
                price={product.price} 
                image={product.image}
        />
         ))
         
        return (
            <div className={Styles.productListWrapper}>
                {productListCards}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        productList : state.ProductListReducer.productList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setProductList : (products) => dispatch(set_product_list(products))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)