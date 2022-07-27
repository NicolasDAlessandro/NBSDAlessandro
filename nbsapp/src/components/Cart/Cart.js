
import { Link } from 'react-router-dom'
import { UseCart } from '../../store/CartContext'
import CartItems from '../CartItems/CartItems'
import { useEffect,useState } from 'react'
import './Cart.css'
import CartForm from '../CartForm/CartForm'


function Cart(){
    
    const contexto = UseCart()
    const [formState, setFormState] = useState(false);


    useEffect(() => {
        contexto.calcularTotal()
    },[contexto]);

    function buttonHandler(){
        setFormState(true)

    }


    return(
        <div>
            {contexto.cart.length > 0 ? 
            <div className='cartContent'>
                <h3 className='finalPrice'>Total de la compra : ${contexto.total}</h3>
            </div>: <></>}
            {contexto.cart.length > 0 ? 
            contexto.cart.map(props => <CartItems props={props}/>)
            :   <div className='cartMessage'>
                    <h1> Primero debes agregar productos al carrito! </h1>
                    <h5> Puedes ver el catalogo de productos aqui. </h5>
                    <button type="button" className="btn btn-secondary btnCart">
                        <Link to={'/'} className="linkRemeras"> Catalogo</Link>
                    </button>
                </div>}
            {contexto.cart.length > 0 ? 
            <div className='buttonDiv'>
                <button type="button" onClick={buttonHandler} className="btn btn-outline-primary botonAgregar">
                        Finalizar Compra
                </button>
                {formState && <CartForm/>  }
            </div>: <></>}
        </div>
    )
}

export default Cart

//<CartButton/> : <></>