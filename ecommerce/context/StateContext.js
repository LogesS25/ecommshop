import React, { createContext, useContext, useState, useEffect } from 'react';
//toast - popup notification
import { toast } from 'react-hot-toast';


const Context = createContext(); //calling a hook

export const StateContext = ({ children }) => {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState();
    const [totalPrice, setTotalPrice] = useState();
    const [totalQuantites, setTotalQuantites] = useState();
    const [qty, setQty] = useState(1);

    const onAdd = (product, quantity) => {
        const checkProductInCart = cartItems.find((item) => item._id === product._id);

        if (checkProductInCart) {
            //call back function //updating states
            setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
            setTotalQuantites((prevTotalQuantites) => prevTotalQuantites + quantity);

            //updating actual items in the cart
            const updatedCartItems = cartItems.map((cartProduct) => {
                if (cartProduct._id === product._id) return {
                    ...cartProduct,
                    quantity: cartProduct.quantity + quantity
                }
            })

        }
    }

    const incQty = () => {
        setQty((prevQty) => prevQty + 1);
    }

    const decQty = () => {
        setQty((prevQty) => {
            if (prevQty - 1 < 1) return 1;
            return prevQty - 1;
        });
    }

    return (

        <Context.Provider
            value={{
                showCart, cartItems, totalPrice, totalQuantites, qty, incQty, decQty,
            }}
        >
            {children}
        </Context.Provider>
    );
}

export const useStateContext = () => useContext(Context);