import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a  className="navbar-brand" href="#">Biodiet Dietetica</a>

                <ul className = "navbar-nav me-auto">
                    <li className="nav-item">
                        <a className="nav-link active" aria-aria-current="page" href="#"> Cereales</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"> Suplementos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"> Frutos secos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"> Especias</a>
                    </li>
                </ul>
            
            {    }
            <CartWidget/>
            </div>
        </nav>
    )
}

export default NavBar;