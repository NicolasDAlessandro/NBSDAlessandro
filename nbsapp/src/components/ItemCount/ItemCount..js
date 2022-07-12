import './ItemCount.css'
import { useState } from "react"
import Swal from 'sweetalert2';

function ItemCount({ onSaveData,stock,initial }){

    const [cantidad, setCantidad] = useState(initial);
 

    const sumar = () =>{
        if(cantidad < stock){
        setCantidad(cantidad + 1)
        }else{
            Swal.fire({
                customClass: {
                    popup : 'd-flex flex-column',
                },
                icon: 'error',
                title:`No pueden superar las ${stock} unidades`,
             })
        }
    }
    const restar = () => {
        if(cantidad > 1){
        setCantidad(cantidad - 1)
        }
    }
    
    const submitHandler = (event) => {
        event.preventDefault()
        const data = cantidad
        onSaveData(data)
    }

    return(
            <div  className='countCart'>
                <div className='botones'>
                    <button onClick={restar} className="btn btn-outline-danger">-</button>
                    <h4 className='cantidad'>{cantidad}</h4>
                    <button onClick={sumar} className="btn btn-outline-success">+</button>
                </div>

                <button type="submit" onClick={submitHandler} className="btn btn-outline-primary botonAgregar">
                    Agregar al carrito
                </button>
            </div>

    )
}

export default ItemCount

