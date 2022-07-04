import { useEffect,useState } from "react"
import {productos} from '../../productos'
import ItemDetail  from "../ItemDetail/ItemDetail"

function ItemDetailContainer({id}){
    
    const [prod,setProd] = useState([])
    
    useEffect(() => {
          const getProd = new Promise ((resolve) =>{
            setTimeout(() => {
               const myData = productos.find(prod => prod.id === id);
               resolve(myData)
            }, 2000);
          })
          getProd.then((res)=>{
            setProd(res)
        })
    },)

    return(
        <div>
            {prod !== undefined && <ItemDetail id={prod.id} modelo={prod.modelo} src={prod.src} precio={prod.precio}/> }
        </div>
    )
}

export default ItemDetailContainer

/*
{j !== undefined && <ItemDetail id={prod.id} modelo={prod.modelo} /> }
*/