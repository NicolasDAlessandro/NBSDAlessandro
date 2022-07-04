import './ItemCount.css'
import { useState } from "react"
import Swal from 'sweetalert2';



function ItemCount({ stock,initial }){
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
        if(cantidad > 0){
        setCantidad(cantidad - 1)
        }
    }
    

    return(
            <div className='countCart'>
                <div className='botones'>
                    <button onClick={restar} className="btn btn-outline-danger">-</button>
                    <h4 className='cantidad'>{cantidad}</h4>
                    <button onClick={sumar} className="btn btn-outline-success">+</button>
                </div>

                <button type="button" className="btn btn-outline-primary botonAgregar">
                    <h6 className="card-title">Agregar al carrito</h6>
                </button>
            </div>

    )
}

export default ItemCount

/*                 <button type="button" className="btn btn-outline-primary botonAviso botonAgregar">
                    <h6 className="card-title">Ver detalle</h6>
                </button>*/