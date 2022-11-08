import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/ItemDetail.css';
import { useCartContext } from './CartContext';
import ItemCount from './ItemCount';

const ItemDetail = (({prod})=> { 

    const [add, setAdd] = useState (false)

    const {addItem} = useCartContext();

    const onAdd = (counter)=> { 
        setAdd (true); 
        addItem (prod, counter)
    }

    
    return (
        <>
        <div className='container-detail'>
            <div className='container-img'>
                <img src = {prod.img} className = 'img-prod'></img>
            </div>
            <div className='container-text'>
                <h2>{prod.marca}</h2>
                <h3>{prod.modelo}</h3>
                <p>{prod.descripcion}</p>
                {
                    add ? <Link to = '/cart'>Finalizar Compra</Link> : <ItemCount inicial= {1} stock = {6} onAdd = {onAdd}></ItemCount>
                }
            </div>
        </div>
               
        </>
    )
})

export default ItemDetail;