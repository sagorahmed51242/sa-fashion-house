/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { auth } from './../firebaseconfig'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
export const myContextAPI = createContext();

export const ContextProvier = ({ children }) => {
    const [cartCount, setCartCount] = useState(0);
    const [isLogIn, setLogIn] = useState(true);
    const [user, setUser] = useState(null);


    const signUp = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logOut = () =>{
        return signOut(auth);
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,(currentUser) =>{
            setUser(currentUser);
        });
        return unsubscribe;
    },[])

    const logInWithGoogle = async() => {
        const provider = new GoogleAuthProvider(auth);
        try {
            const result = await signInWithPopup(auth, provider);
            setUser(result.user)
        } catch (error) {
            console.log(error.message)
        }
    }



    const getICartItemFromLocalStorage = () => {
        const currentCart = localStorage.getItem("cart");
        return currentCart ? JSON.parse(currentCart) : [];
    };

    const updateCart = () => {
        const storedCart = getICartItemFromLocalStorage();
        setCartCount(storedCart.length);
    };

    useEffect(() => {
        updateCart();
        window.addEventListener("storage", updateCart);
        return () => window.removeEventListener("storage", updateCart);
    }, []);

    const setCartItemIntoLocatStorage = (item) => {
        const cart = getICartItemFromLocalStorage();
        const isExist = cart.find((product) => product.id === item.id);
        if (isExist) {
            alert("Already Exist");
        } else {
            cart.push(item);
            localStorage.setItem("cart", JSON.stringify(cart));
            updateCart();
        }
    };

    const removeItemFromCart = (id) => {
        const currentItem = getICartItemFromLocalStorage();
        const updatedCart = currentItem.filter((item) => item.id !== id);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        updateCart();
    };

    const clearCart = () => {
        localStorage.removeItem("cart");
        setCartCount(0);
    };

    return (
        <myContextAPI.Provider
            value={{ cartCount, logInWithGoogle, logOut, user, signUp,logIn,isLogIn, setLogIn, clearCart, setCartItemIntoLocatStorage, getICartItemFromLocalStorage, removeItemFromCart }}
        >
            {children}
        </myContextAPI.Provider>
    );
};
