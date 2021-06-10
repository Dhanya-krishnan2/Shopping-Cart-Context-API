import {useContext} from 'react'
import './Cart.css';
import CartContext from './context/cart/CartContext'
import FormatCurrency from 'format-currency'

const Cart = () => {
    const {showCart,cartItems,showHideCart } = useContext(CartContext);
    let opts = {format: "%s%v", Symbol: "$"};
    return (
        <>
       { showCart && ( 
           <div className="cart__wrapper"> 
           <div style={{textAlign:"right"}}>
               <i style={{cursor: 'pointer'}} className="fa fa-times"></i>
           </div>
           </div>
       )}            
        </>
    )
}

export default Cart
