import {useReducer} from 'react'
import CartContext from './CartContext'
import CartReducer from './CartReducer'
import {SHOW_HIDE_CART, REMOVE_ITEM, ADD_TO_CART} from '../Types'

const CartState = ({children}) => { 
    const initialState = {  
        showCart: false, 
        cartItems: []
    }
    const [state, dispatch] = useReducer(CartReducer, initialState); 
    const addToCart = item => {  
        dispatch({type: ADD_TO_CART, payload: item})
    }
    const showHideCart = () => { 
        dispatch({type: SHOW_HIDE_CART})
    }
    const removeItem = id => { 
        dispatch({type: REMOVE_ITEM, payload:id})
    }
   return (
    <CartContext.Provider value={{showCart: state.showCart, cartItems: state.cartItem, addToCart, showHideCart, removeItem}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartState

