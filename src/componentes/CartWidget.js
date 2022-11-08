import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const CartWidget = () => { 
    return (
        <>
        <FontAwesomeIcon icon={faCartShopping}/>
         </>
    )
}

export default CartWidget