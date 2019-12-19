import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProductCard from './ProductCard'
import Styles from '../styles/Home.module.css';
import set_product_list from '../store/actions/ProductListActions'
import productsData from '../ProductsData';

class Home extends Component {
    componentDidMount() {
        this.props.setProductList(productsData);
    }
    render() {
        const homeCards = this.props.homeProducts.map((product, index) => {
            if(index < 4) {
                return <ProductCard
                key={product.id}
                id={product.id} 
                name={product.name} 
                price={product.price} 
                image={product.image}
        />
            } else {
                return ""
            }
        }
        )
        return (
            <div>
                <div>
                    <h1 className={Styles.frontHeading}>Welcome to our online store!</h1>
                </div>
                <div className={Styles.homeWrapper}>
                    {homeCards}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        homeProducts : state.ProductListReducer.productList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setProductList : (products) => dispatch(set_product_list(products))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

