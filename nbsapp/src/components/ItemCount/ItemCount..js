import './ItemCount.css'
import { useState } from "react"
import Swal from 'sweetalert2';


function ItemCount({ stock,initial }){
    const [cantidad, setCantidad] = useState(initial);
    
    const sumar = () =>{
        if(cantidad < stock){
        setCantidad(cantidad + 1)
        }else{
              //(`El stock maximo es ${stock} unidades.`)
        }
    }
    const restar = () => {
        if(cantidad > 0){
        setCantidad(cantidad - 1)
        }
    }
    return(
        <div className="card border-light mb-3 tarjeta" style={{width:300}}>
            <div className="card-header">
                <h4> Producto </h4>
            </div>
            <div className="card-body">
                <div className='botones'>
                    <button onClick={restar} className="btn btn-outline-primary">-</button>
                    <h4 className='cantidad'>{cantidad}</h4>
                    <button onClick={sumar} className="btn btn-outline-primary">+</button>
                </div>
                <div className="aviso">
                <h6> El stock maximo es de {stock} unidades </h6>
                </div>
                <button type="button" className="btn btn-outline-primary botonAgregar">
                    <h6 className="card-title">Agregar al carrito</h6>
                </button>
            </div>
        </div>
    )
}

export default ItemCount