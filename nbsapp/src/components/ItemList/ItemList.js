import './ItemList.css'
import Item from '../Item/Item'
import { useEffect, useState } from 'react'
import { getFirestore,collection, getDocs } from 'firebase/firestore'
function ItemList(){
    
    const [info, setInfo] = useState([])

    useEffect(() => {
        const db = getFirestore()
        const itemsRef = collection(db, "items")
        getDocs(itemsRef).then((snapshot) => {
            setInfo( snapshot.docs.map((doc) => doc.data())) 
        })

    }, [])
    
    
    return(
        <div className='prodContainer'>
            <div className='productCart'>
                {info && info.map(i => <Item props={i} key={i.id}/>)}
            </div>
        </div>
    )

}

export default ItemList

