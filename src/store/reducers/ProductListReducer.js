const initialState = {
    productList : []
}

const ProductListReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'set_product_list' : {
            return {
                productList : action.payload
            }
        }
        default : return state
    }
}

export default ProductListReducer