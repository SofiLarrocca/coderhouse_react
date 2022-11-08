import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { getFirestore, doc, getDoc } from 'firebase/firestore'



const ItemDetailContainer = () => {

    const [prod, setProd] = useState ({})

    const {id} = useParams ()
 
    useEffect(() => {
        const db = getFirestore();
        const queryDoc = doc(db, 'productos', id)
        getDoc(queryDoc)
        .then (res => setProd({id: res.id, ...res.data()}))
    }, [id]);
 
    return (
        <>  
            <ItemDetail prod = {prod} />
        </>
    )
};

export default ItemDetailContainer;