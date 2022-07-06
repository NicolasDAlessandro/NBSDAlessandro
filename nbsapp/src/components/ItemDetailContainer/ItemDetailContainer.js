import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import {productos} from '../../productos'
import ItemDetail  from "../ItemDetail/ItemDetail"

function ItemDetailContainer(){
    
    let params = useParams()
    const [prod,setProd] = useState([])
    
    useEffect(() => {
          const getProd = new Promise ((resolve) =>{
            setTimeout(() => {
               const myData = productos.find(prod => prod.id === params.id);
               resolve(myData)
            }, 2000);
          })
          getProd.then((res)=>{
            setProd(res)
        })
    },)

    return(
        <div>
            {prod !== undefined && prod.map(i => <ItemDetail id={i.id} src={i.src} modelo={i.modelo} precio={i.precio} />)}
        </div>
    )
}

export default ItemDetailContainer

/*
{ prod !== undefined && <ItemDetail props={prod} /> }
*/