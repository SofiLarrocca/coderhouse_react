import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList'
import '../css/ItemListContainer.css';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'


const ItemListContainer = ({greeting}) => {

    const [ListaProductos, setListaProductos] = useState ([])
    // const [prodCateogoria, setProdCategoria] = useState ({})

    let {categoria} = useParams ();

    useEffect(() => {
        const db = getFirestore();
        const queryColecction = collection(db, 'productos')
        
        if (categoria) { 
            const queryFilter = query(queryColecction, where('categoria', '==', categoria ))
            getDocs(queryFilter)
            .then (res => setListaProductos(res.docs.map(productos => ({id: productos.id, ...productos.data()}))))
        } else { 
            getDocs(queryColecction)
            .then (res => setListaProductos(res.docs.map(productos => ({id: productos.id, ...productos.data()}))))
        }
    }, [categoria]);
 

    return (
        <>  
            <h2>{greeting}</h2>
            <ItemList ListaProductos={ListaProductos} />
        </>
    )
};

export default ItemListContainer;