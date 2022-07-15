import { UseCart } from '../../store/CartContext'
import './CartItems.css'

function CartItems(props){

    const contexto = UseCart()

    function remove(){
       contexto.removeItem(props.props.producto.id) 
    }
    return(
        <div className='itemLayout'>
            <div className='itemProps'> 
                <img className='cartImg' src={`../${props.props.producto.src}`}></img >
                <h3 className='cartText'> Modelo: {props.props.producto.modelo} </h3>
                <h3 className='cartText'> Precio ${props.props.producto.precio} </h3>
                <h3 className='cartText'> Cantidad : {props.props.quantity} </h3>
            </div >
            <button type="button" onClick={remove} className="btn btn-outline-primary removeButton">Remover</button>
        </div >
    )
}

export default CartItems