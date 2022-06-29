import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';

function ItemListContainer(){
    return(
        <div className='itemListContainer'>
            <div className='titulo'>
                <h2>Destacados</h2>
            </div>
            <div>
                <ItemList/>
            </div>
        </div>
    )
}

export default ItemListContainer
