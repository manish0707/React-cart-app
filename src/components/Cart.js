import React, { Component } from 'react'
import { connect } from 'react-redux'
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import Styles from '../styles/Cart.module.css';

class Cart extends Component {
    render() {
        return (
            <div>
                {
                    this.props.cartList.map(item => (
                        <CartItem
                            quantity={item.quantity}
                            key={item.id}
                            id={item.id}
                            name={item.name} 
                            price={item.price}
                            image={item.image}
                        />
                    ))
                }
                {this.props.cartList.length !== 0 ? (<div className={Styles.grandTotalWrapper}>
                    <h1>Grand Total is $ {this.props.cartTotal}.</h1>
                    <Link
                        to="/cart/complete"
                        className={Styles.buyNowButton}
                    >Buy Now</Link>
                </div>) : (
                    <div style={{textAlign : "center"}}>
                        <h1>Cart is Empty!!</h1>
                        <Link style={{fontSize : "18px", color : "white"}} to="/products">Click to Add</Link>
                    </div>
                )}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        cartList : state.cartListReducer.cartList,
        cartTotal : state.cartListReducer.cartTotal
    }
}


export default connect(mapStateToProps)(Cart)

