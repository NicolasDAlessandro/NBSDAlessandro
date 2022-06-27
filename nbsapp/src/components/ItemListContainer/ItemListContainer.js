import './ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount.';

function ItemListContainer(){
    return(
        <div className='itemListContainer'>
            <div className='titulo'>
                <h2>Sitio en construcion, los productos se veran pronto!</h2>
            </div>
            <div className='tarjeta'>
                <ItemCount stock={5} initial={1}/>
            </div>
        </div>
    )
}

export default ItemListContainer