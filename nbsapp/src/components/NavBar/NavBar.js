import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget.js';
import { NavLink } from 'react-router-dom';

function Navbar() { 
    return (
        <header>
            <div className='navbar'>
                <NavLink className="navbar-brand" to={'/'}><h2>NBS.Style</h2></NavLink>
                <button type="button" className="btn btn-primary btnNav">
                    <NavLink to={'/'} className="linkRemeras"> Inicio</NavLink>
                </button>
                <button type="button" className="btn btn-secondary btnNav">
                    <NavLink to={'/'} className="linkRemeras"> Catalogo</NavLink>
                </button>
                <button type="button" className="btn btn-success btnNav">
                    <NavLink to={'category/remera'} className="linkRemeras"> Remeras</NavLink>
                </button>
                <button type="button" className="btn btn-success btnNav">
                    <NavLink to={'category/buzo'} className="linkRemeras"> Buzos</NavLink>
                </button>
            </div>
            <CartWidget/>
        </header>
    );
}


export default Navbar;