import React, { Component } from 'react'
import { connect } from 'react-redux'
import set_product_list from '../store/actions/ProductListActions';
import productsData from '../ProductsData';
import Styles from '../styles/ProductInfo.module.css'
import {add_to_cart, set_quantity} from '../store/actions/CartListActions';

class ProductInfo extends Component {
    addToCartHandle = (id) => {
        const item = this.props.productList.filter(product => {
            return product.id === id
        })
        this.props.addToCart(item[0]);
        this.props.setQuantity(id, 1);
        console.log(this.props);
    }
    showButtonMessage = (id) => {
        let message = 'Add to Cart';
        const index = this.props.cartList.findIndex(product => {
            return product.id === id
        });
        if(index !== -1) {
            message = 'Added to cart';
        }
        return message;
    }
    render() {
        this.props.setProductList(productsData);
        const perProduct = this.props.productList.filter(product => {
            return product.id === Number(this.props.match.params.id)
        });
        return (
            <React.Fragment>
                {perProduct.map(product => (
                    <div key={product.id} className={Styles.ProductInfoPage}>
                        <div className={Styles.ProductImageWrapper}>
                            <img alt={product.name} className={Styles.ProductDetail_image} src={product.image} />
                        </div>
                        <div className={Styles.ProductDetailWrapper}>
                            <p className={Styles.ProductDetail_name}>{product.name}</p>
                            <p className={Styles.ProductDetail_desc}>{product.description}</p>
                            <p className={Styles.ProductDetail_price}>${product.price}</p>
                            <p className={Styles.ProductDetail_rating}>Rating : {product.rating}</p>
                            <button 
                                onClick={() => this.addToCartHandle(product.id)}
                                disabled={this.showButtonMessage(product.id) !== 'Add to Cart'}
                                className={Styles.ProductDetail_cartBtn}>
                                {this.showButtonMessage(product.id)}
                            </button>
                        </div>
                </div>
                ))}
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        productList : state.ProductListReducer.productList,
        cartList : state.cartListReducer.cartList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setProductList : (products) => dispatch(set_product_list(products)),
        addToCart : (item) => dispatch(add_to_cart(item)),
        setQuantity : (id, data) => dispatch(set_quantity(id, data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductInfo)

