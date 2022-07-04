import './ItemList.css'
import Item from '../Item/Item'
import { useEffect, useState } from 'react'
import {productos} from '../../productos'

function ItemList(){
    
    const [info, setInfo] = useState([])

    const getInfo = () => {
        return new Promise((resolve,reject) => {
        setTimeout(() => {
            productos.length > 0 ? 
            resolve(productos)
            :
            reject("No data")
        }, 2000);
    } )}

    useEffect(() => {
          getInfo()
          .then(res => setInfo(res)) 
          .catch(err => console.log(err))
    } ,)
    
    return(
        <div className='prodContainer'>
            <div className='productCart'>
                {info && info.map(i => <Item id={i.id} src={i.src} modelo={i.modelo} precio={i.precio} stock={5}/>)}
            </div>
        </div>
    )

}

export default ItemList

/*
useEffect(() => {
    fetch('productos.json')
    .then((res) => res.json())
    .then(data => setInfo(data));
}, [])*/