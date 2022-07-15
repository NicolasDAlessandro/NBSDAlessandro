import { useEffect,useState } from 'react'
import { Link, NavLink, useParams } from 'react-router-dom'
import {productos} from '../../productos'
import './ItemDetail.css'
import ItemCount from "../ItemCount/ItemCount."
import { UseCart } from '../../store/CartContext'

function ItemDetail(){
   
    let params = useParams();
    const context = UseCart();
    const [prod,setProd] = useState([]);
    const [itemCountState, setItemCountState] = useState(true);
    
    
    const getProd = new Promise ((resolve) =>{
        setTimeout(() => {
            const myData = productos.find(prod => prod.id === parseInt(params.id));
            resolve(myData)
        }, );
    })
        
    useEffect(() => {
    getProd.then((res)=>{
        setProd(res)
        })
    },)

    const onAdd = (quantity) => {
        context.addItem(prod,quantity)
        setItemCountState(false)
    }

    const removeProd = () => {
         context.removeItem(params.id)
    }
    
    return (
        <div className="`card border-light detailCard " >
            {prod !== undefined && 
            <div> 
                <div className='detailModel'> 
                    <h1> {prod.modelo}</h1>
                </div>    
                <div className="detailCard ">              
                    <img src={`../${prod.src}`} alt={prod.modelo} className="imageDetail" />
                    <div className='detailInfo'> 
                        <h3>Precio: $ {prod.precio}</h3>
                        <button type="button" className="btn btn-success btnNav">
                            <NavLink to={`/category/${prod.categoria}`} className="linkRemeras"> {prod.categoria}</NavLink>
                        </button>
                        {itemCountState === true ? <ItemCount onSaveData={onAdd} stock={prod.stock} initial={1}/> :
                        <button type="button" className="btn btn-outline-primary botonAgregar">
                            <Link to={'/cart'} className="linkRemeras"><h6 className="card-title ">Finalizar compra</h6></Link>
                        </button> } 
                    </div> 
                </div> 
            </div>
            }
        </div>
        )
}

export default ItemDetail

