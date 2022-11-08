import { createContext, useContext } from "react";
import { useState } from "react";
 
const CartContext = createContext ([])

export const useCartContext = () => useContext (CartContext);

const CustomProvider = ({ children }) => { 

    const [cart, setCart] = useState ([])


    const clearCart = () => { 
        setCart ([])
    }

    const isInCart = (id) => { 
        return cart.find(prod => prod.id === id) ? true : false;
    }
   
    const removeItem = (id) => { 
        return setCart(cart.filter ((item) => item.id !== id))
   }

    // prod.id !== id
    const addItem = (item, counter) => { 
        const newCart = cart.filter(prod => prod.id !== item.id);
        newCart.push ({...item, cantidad:counter})
        setCart (newCart)
    }
  

    const totalPrice = () => { 
        return cart.reduce((acc, price) => acc + price.cantidad * price.precio, 0) 
    }

    const totalProducts = () => { 
        return cart.reduce ((acc, producto)=> acc + producto.cantidad, 0)
    }
    
    return (
        <>
            <CartContext.Provider value = {{ 
                clearCart,
                isInCart,
                removeItem,
                addItem,
                totalPrice,
                totalProducts,
                cart}}>
                {children}    
            </CartContext.Provider> 
        </>
    )

};

export default CustomProvider;