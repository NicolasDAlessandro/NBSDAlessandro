import { useEffect,useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import {productos} from '../../productos'
import CategoryItem from '../CategoryItem/CategoryItem'

function Categories(){
   
    let params = useParams()
    const [prod,setProd] = useState([])
    
    
    const getProd = new Promise ((resolve) =>{
        setTimeout(() => {
            const myData = productos.filter(prod => prod.categoria === params.categoria);
            resolve(myData)
        }, );
    })
        
    useEffect(() => {
    getProd.then((res)=>{
        setProd(res)
        })
    },)

    return (
        <div className='prodContainer'>
            <div className='productCart'>
                {prod && prod.map(i => <CategoryItem id={i.id} src={i.src} modelo={i.modelo} precio={i.precio} />)}
            </div>
        </div>
        )
}

export default Categories