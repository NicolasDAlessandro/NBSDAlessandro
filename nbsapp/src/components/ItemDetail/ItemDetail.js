import { useEffect,useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import {productos} from '../../productos'
import './ItemDetail.css'

function ItemDetail(){
   
    let params = useParams()
    const [prod,setProd] = useState([])
    
    
    const getProd = new Promise ((resolve) =>{
        setTimeout(() => {
            const myData = productos.find(prod => prod.id === parseInt(params.id));
            resolve(myData)

        }, );
    })
        
    useEffect(() => {
    getProd.then((res)=>{
        setProd(res)
        })
    },)

    return (
        <div className="`card border-light detailCard " >
            {prod !== undefined && 
            <div> 
                <div className='detailModel'> 
                    <h1> {prod.modelo}</h1>
                </div>    
                <div className="detailCard ">              
                    <img src={`../${prod.src}`} alt={prod.modelo} className="imageDetail" />
                    <div className='detailInfo'> 
                        <h3>Precio: $ {prod.precio}</h3>
                        <button type="button" className="btn btn-success btnNav">
                            <NavLink to={`/category/${prod.categoria}`} className="linkRemeras"> {prod.categoria}</NavLink>
                        </button>
                    </div> 
                </div> 
            </div>
            }
        </div>
        )
}

export default ItemDetail

