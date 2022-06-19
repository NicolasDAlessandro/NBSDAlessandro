import './NavBar.css';

function Navbar() {
    return (
        <header>
            <a class="navbar-brand" href="#">NBS.Style</a>

            <button type="button" class="btn btn-primary">
                <a src="#"> 
                    Inicio
                </a>
            </button>

            <button type="button" class="btn btn-secondary">
                <a src="#"> 
                    Quienes somos
                </a>
            </button>
            
            <button type="button" class="btn btn-success">
                <a src="#"> 
                    Coleccion
                </a>
            </button>
        </header>
    );
}


export default Navbar;