import { createContext, useState,useContext } from 'react' ;
import Swal from 'sweetalert2';


export const CartContext = createContext()

export const UseCart = () => useContext(CartContext)


export const CartContextProvider = ({ defaultValue = [] ,children}) => {

    const [cart, setCart] = useState(defaultValue);
    const [total, setTotal] = useState(0)
    const [onCartCount,setOnCartCount] = useState(0)

    const isInCart = (id) => {
        return cart.find((prod) => prod.producto.id === id)
    }

    const addItem = ( producto, quantity ) => {
        if(isInCart(producto.id)){
            const onCart = [...cart]
            for( const productos of onCart ){
                if(productos.producto.id === producto.id){
                   if(productos.quantity + quantity > producto.stock){
                    Swal.fire({
                        customClass: {
                            popup : 'd-flex flex-column',
                        },
                        icon: 'error',
                        title:`No pueden superar las ${producto.stock} unidades`,
                     })
                   }else{
                    productos.quantity = productos.quantity + quantity
                   }
                }
            }
            setCart(onCart)   
        }else{
            setCart([...cart,  { producto: producto, quantity: quantity } ])    
        }
    };
    
    const removeItem = (id) => {
        const onCart = [...cart].filter((prod) => prod.producto.id != id)
        setCart(onCart)
    }
    
    const clear = () => {
        setCart(defaultValue)
    }

    const calcularTotal = () => {
        if(cart.length !== 0 ){
            let totalResult = 0
            cart.forEach((p) => {
                p.quantity !== 0 ? totalResult += p.producto.precio * p.quantity : totalResult += p.producto.precio
            })
            setTotal(totalResult)
        }
    }

    const onCartItems = () => {
        if(cart.length !== 0 ){
            let totalResult = 0
            cart.forEach((p) => {
                totalResult += p.quantity
            })
            setOnCartCount(totalResult)
        }
    }
    

    return(
        <CartContext.Provider value={{ total,cart,onCartCount,addItem,removeItem,clear,calcularTotal,onCartItems }}>
            {children}
        </CartContext.Provider>
    )
}
