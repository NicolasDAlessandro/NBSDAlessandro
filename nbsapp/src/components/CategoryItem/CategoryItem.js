import { Link } from "react-router-dom"
import { UseCart } from "../../store/CartContext"



function CategoryItem({ id,src,modelo } ){

    return (
        <div className="card border-light mb-3 tarjeta">
            <div className="card-header">
                <h4> {modelo} </h4>
            </div>
            <div className="card-body">
                <img src={`../${src}`} alt={modelo} className="imagenes"/>
                <button type="button"  className="btn btn-outline-primary botonAgregar">
                <Link to={`/item/${id}`}  className="card-title linkRemeras">Ver detalle</Link >
                </button>
            </div>
        </div>
    )
}

export default CategoryItem