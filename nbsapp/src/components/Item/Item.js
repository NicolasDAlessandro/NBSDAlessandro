import ItemCount from '../ItemCount/ItemCount.'
import './Item.css'

function Item({ modelo,src,precio}){
    return (
        <div className="card border-light mb-3 tarjeta">
            <div className="card-header">
                <h4> {modelo} </h4>
            </div>
            <div className="card-body">
                <img src={src} alt={modelo} className="imagenes"/>
                <h6> ${precio} </h6>
                <ItemCount stock={5} initial={1}/>
            </div>
        </div>
    )
}
export default Item
        //<></>    