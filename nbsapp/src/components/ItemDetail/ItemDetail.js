import { useEffect,useState } from 'react'
import { Link, NavLink, useParams } from 'react-router-dom'
import './ItemDetail.css'
import ItemCount from "../ItemCount/ItemCount."
import { UseCart } from '../../store/CartContext'
import { getFirestore,collection, getDocs,query,where, doc } from 'firebase/firestore'

function ItemDetail(){
   
    const context = UseCart();
    const [prod,setProd] = useState();
    const [itemCountState, setItemCountState] = useState(true);
    const params = useParams()
    
    useEffect(() => {
        const db = getFirestore();
        
        const q = query(collection(db, "items"), where ('id', '==', parseInt(params.id)))
        getDocs(q).then((snapshot) => {
            setProd(snapshot.docs.map((doc) => {return {...doc.data(), dbId: doc.id}}))
        })
    }, [params])


    const onAdd = (quantity) => {
        context.addItem(prod[0],quantity)
        setItemCountState(false)
    }
 
    return (
        <div className="detailCard " >
            {prod !== undefined && prod.map((p) => 
            <div key={p.id} className='card border-light mainDetail'> 
                <div className='detailModel'> 
                    <h1> {p.modelo}</h1>
                </div>    
                <div className="detailCard ">              
                    <img src={`../${p.src}`} alt={p.modelo} className="imageDetail" />
                    <div className='detailInfo'> 
                        <h3>Precio: $ {p.precio}</h3>
                        <button type="button" className="btn btn-success btnNav">
                            <NavLink to={`/category/${p.categoria}`} className="linkRemeras"> {p.categoria.toUpperCase()}</NavLink>
                        </button>
                        {itemCountState === true ? <ItemCount onSaveData={onAdd} stock={p.stock} initial={1}/> :
                        <button type="button" className="btn btn-outline-primary botonAgregar">
                            <Link to={'/cart'} className="linkRemeras"><h6 className="card-title ">Ir al carrito</h6></Link>
                        </button> } 
                    </div> 
                </div> 
            </div>
            )}
        </div>
        )
}

export default ItemDetail

