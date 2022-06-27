import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget.js';

function Navbar() { 
    return (
        <header>
            <div className='navbar'>
                <a className="navbar-brand" href="#">NBS.Style</a>
                <button type="button" className="btn btn-primary btnNav">
                    <a src="#"> Inicio</a>
                </button>
                <button type="button" className="btn btn-secondary btnNav">
                    <a src="#"> Quienes somos</a>
                </button>
                <button type="button" className="btn btn-success btnNav">
                    <a src="#"> Coleccion</a>
                </button>
            </div>
            <CartWidget/>
        </header>
    );
}


export default Navbar;