const initialState = {
    cartList : [],
    cartTotal : 0,
}

const calculateCartTotal = cartList => {
    if(cartList.length !== 0) {
        const allprices = cartList.map(item => {
            return item.price * item.quantity
        });
        console.log(allprices);
        const totalPrice = allprices.reduce((accumlator, currentValue) => {
            return accumlator + currentValue;
        });
        return totalPrice;
    } else {
        return 0;
    }
}

const cartListReducer = (state = initialState, actions) => {
    switch(actions.type) {
        case 'add_to_cart': return {
                cartList : [...state.cartList, actions.payload ]
            }
        case 'set_quantity': {
            const newCartList = state.cartList.map(item => {
                if(item.id === actions.payload.id) {
                    item.quantity = item.quantity + actions.payload.data
                    return item;
                }
                return item;
            })
            return { cartList : newCartList, cartTotal : calculateCartTotal(newCartList)}
        }
        case 'set_cartTotal' : {
            return {
                cartTotal : actions.payload
        }
        }
        case 'remove_cartItem': {
            const updatedQuantity = state.cartList.map(item => {
                if(item.id === actions.payload) {
                    item.quantity = 0;
                }
                return item;
            });
            const filteredData = updatedQuantity.filter(item => {
                return item.id !== actions.payload
            });
            return {
                cartList : filteredData,
                cartTotal : calculateCartTotal(filteredData)
            }
        }
        default: return state
    }
}

export default cartListReducer