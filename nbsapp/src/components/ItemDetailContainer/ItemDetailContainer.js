import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail  from "../ItemDetail/ItemDetail"
import { getFirestore,collection, getDocs } from 'firebase/firestore'

function ItemDetailContainer(){
    
    let params = useParams()
    const [prod,setProd] = useState([])
    
    useEffect(() => {
        const db = getFirestore()
        const itemsRef = collection(db, "items")
        getDocs(itemsRef).then((snapshot) => {
            setProd( snapshot.docs.filter((doc) => doc.data().id === params.id)) 
        })

    }, [])

    console.log(prod)

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