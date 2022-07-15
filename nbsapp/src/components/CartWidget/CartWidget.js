import { Link } from 'react-router-dom';
import { UseCart } from '../../store/CartContext';
import { useEffect } from 'react';
import './CartWidget.css';


function CartWidget(){

    const contexto = UseCart()

    useEffect(() => {
      contexto.onCartItems()
  },);

    return(
      <div >
        {contexto.cart.length > 0 ? 
          
          <div className="carrito">
            <Link to={'/cart'}>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart" width="48" height="48" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fd0061" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <circle cx="6" cy="19" r="2" />
              <circle cx="17" cy="19" r="2" />
              <path d="M17 17h-11v-14h-2" />
              <path d="M6 5l14 1l-1 7h-13" />
              </svg>
            </Link>
            <h4 className='cartNotification'>{contexto.onCartCount}!</h4>
          </div>
        : <></>}
      </div>
     
    )
}

export default CartWidget;

