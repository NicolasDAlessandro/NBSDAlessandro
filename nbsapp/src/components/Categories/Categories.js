import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import CategoryItem from '../CategoryItem/CategoryItem'
import {  getFirestore,collection, query, where,getDocs  } from 'firebase/firestore'

function Categories(){
   
    let params = useParams()
    const [prod,setProd] = useState([])
    
    useEffect(() => {
        const db = getFirestore();
        const q = query(collection(db, "items"), where ('categoria', '==', params.categoria))
        getDocs(q).then((snapshot) => {
            setProd(snapshot.docs.map((doc) => doc.data()))
        })
    }, [params.categoria])


    return (
        <div className='prodContainer'>
            <div className='productCart'>
                {prod && prod.map(i => <CategoryItem id={i.id} src={i.src} modelo={i.modelo} precio={i.precio} key={i.id} />)}
            </div>
        </div>
        )
}

export default Categories