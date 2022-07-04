import Swal from "sweetalert2"
import './ItemDetail.css'

function ItemDetail({ id,modelo, src, precio }){
    function showDetail(){
        return Swal.fire({
            customClass:{
                popup:"popupCard"
            },
            title:`${modelo}`,
            text: `$ ${precio}`,
            imageUrl:`${src}`,
            imageHeight: 400,
            imageWidth: 400,
            imageAlt: `${modelo}`,
            background: '#6f42c1',
          
        })
    } 
    return (
        <div>
            <button type="button" onClick={showDetail}  className="btn btn-outline-primary botonAgregar">
                <h6 className="card-title">Ver detalle</h6>
            </button>
        </div>
        )
}

export default ItemDetail

