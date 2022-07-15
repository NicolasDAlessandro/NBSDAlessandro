
import { Link } from 'react-router-dom'
import { UseCart } from '../../store/CartContext'
import CartItems from '../CartItems/CartItems'
import { useEffect } from 'react'
import './Cart.css'

function Cart(){
    
    const contexto = UseCart()

    useEffect(() => {
        contexto.calcularTotal()
    },);

    return(
        <div>
            {contexto.cart.length > 0 ? <div><h3 className='finalPrice'>Total de la compra : ${contexto.total}</h3></div>: <></>}
            {contexto.cart.length > 0 ? 
            contexto.cart.map(props => <CartItems props={props}/>)
            :   <div className='cartMessage'>
                    <h1> Primero debes agregar productos al carrito! </h1>
                    <h5> Puedes ver el catalogo de productos aqui. </h5>
                    <button type="button" className="btn btn-secondary btnCart">
                        <Link to={'/'} className="linkRemeras"> Catalogo</Link>
                    </button>
                </div>}
        </div>
    )
}

export default Cart