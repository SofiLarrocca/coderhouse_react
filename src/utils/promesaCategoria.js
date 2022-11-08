import productos from "../productos"


export const promesaCategoria = (productos, categoria) => { 
    return new Promise ((res, rej) => { 
        setTimeout(() => {
            if (categoria)  { 
                const categoria = productos.find ((prod)=> prod.genero === categoria)
                res(categoria)
            } else { 
                res (productos)
            }
        }, 0);
    });
}
