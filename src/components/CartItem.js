import React, { Component } from 'react'
import Styles from '../styles/CartItem.module.css';
import { connect } from 'react-redux'
import { set_quantity, set_cartTotal, remove_cartItem } from '../store/actions/CartListActions';

class CartItem extends Component {
    setNumberOfItem = (id, number) => {
        if(number === -1) {
            if(this.props.quantity !== 1) {
                this.props.setQuantity(id, number);
            }
        }else {
            this.props.setQuantity(id, number);
        }
    }
    removeCartItem = id => {
        this.props.removeCartItem(id)
        this.props.setQuantity(id, 0);
    }
    render() {
        console.log(this.props);
        const { name, price, image, id, quantity } = this.props;
        return (
            <div className={Styles.CartItemWrapper}>
                <div className={Styles.CartItemImageWrapper}>
                    <img src={image} alt={name} />
                </div>
                <div className={Styles.CartItemInfo}>
                    <p>{name}</p>
                    <p>${price}</p>
                </div>
                <div className={Styles.quantity}>
                    <button onClick={() => this.setNumberOfItem(id, 1)}>+</button>
                    <p>{quantity}</p>
                    <button onClick={() => this.setNumberOfItem(id, -1)}>-</button>
                    <button style={{color : "red"}} onClick={() => this.removeCartItem(id)}>X</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        cartList : state.cartListReducer.cartList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setQuantity : (id, data) => dispatch(set_quantity(id, data)),
        removeCartItem : (id) => dispatch(remove_cartItem(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItem)