import { ADD_PRODUCT, ADD_TO_CART, LOAD_PRODUCT, REMOVE_FROM_CART, REMOVE_PRODUCT } from "../actionTypes/actionTypes";

const initialState ={
    cart :[]
}

const productReducer = (state = initialState , action) =>{

    const selectedProduct = state.cart.find(
        (product)=>product._id === action.payload._id
    )
    // console.log(action.payload)
    switch(action.type){
         case LOAD_PRODUCT :
              return {
                ...state,
                products : action.payload
              }
         case ADD_PRODUCT :
              return {
                ...state,
                products : [...state.product, action.payload],
              }
              case REMOVE_PRODUCT:
                return {
                  ...state,
                  products: state.products.filter(
                    (product) => product._id !== action.payload
                  ),
                };

        case ADD_TO_CART :
            if(selectedProduct){
                const newCart = state.cart.filter(
                    (product)=>product._id !== selectedProduct._id
                )
                selectedProduct.quantity=selectedProduct.quantity +1;

                return {
                    ...state,
                    cart : [...newCart, selectedProduct],
                }
            }
            return {
                ...state,
                cart : [...state.cart, {...action.payload , quantity :1}]
            };
        case REMOVE_FROM_CART :
            if(selectedProduct.quantity >1){
                const newCart = state.cart.filter(
                    (product)=>product._id !== selectedProduct._id
                )
                selectedProduct.quantity=selectedProduct.quantity - 1;

                return {
                    ...state,
                    cart : [...newCart, selectedProduct],
                }
            }
            return {
                ...state,
                cart:state.cart.filter(
                    (product)=> product._id !== action.payload._id
                )
            };
            default:return state;
    }
}
export default productReducer;