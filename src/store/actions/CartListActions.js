const add_to_cart = (data) => {
    return {
        type : 'add_to_cart',
        payload : data
    }
}

const set_quantity = (id, data) => {
    return {
        type : 'set_quantity',
        payload : {id : id, data : data}
    }
}

const remove_cartItem = (id) => {
    return {
        type : 'remove_cartItem',
        payload : id
    }
}

export { add_to_cart, set_quantity , remove_cartItem}