import '../css/App.css';
import CartWidget from './CartWidget';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {

    const categorias = [
      {id:0, genero: 'Mujer', ruta: '/categoria/mujer'},
      {id:1, genero: 'Hombre', ruta: '/categoria/hombre'},
    ]


    return (
      <div className="navBar">
        <header>
        <nav className="navBar-container">
           <Link to = '/' ><p className='logo'>THE PERFUME SHOP</p></Link> 
          <div>
            {categorias.map ((categorias) => { 
             return <NavLink key={categorias.id} className="navBar-link" to={categorias.ruta}>{categorias.genero}</NavLink>
            })}
            <Link to= '/cart'><CartWidget/></Link> 
          </div>
        </nav>
        </header>
      </div>

    );
  };

  
export default Navbar;