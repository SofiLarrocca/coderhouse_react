import '../css/cartItem.css';
import { useCartContext } from './CartContext';
import { useState } from 'react';
import { getStorage, ref, getDownloadURL } from "firebase/storage";


export const ItemCart = ({item}) => { 
    const {removeItem} = useCartContext();
    
    const [imgURL, setImgURL] = useState(null);
    const storage = getStorage();

    getDownloadURL(ref(storage, item.img))
        .then(setImgURL)
        

    return (
        <>
            <div className="itemCart">
                <img src = {imgURL} className = 'img-cart' />
                <p>Marca: {item.marca}</p>
                <p>Cantidad: {item.cantidad}</p>
                <p>Subtotal: $ {item.cantidad * item.precio}</p>
                <button onClick= {() => removeItem(item.id)}>Eliminar</button>
            </div>
        </>
    )
}
