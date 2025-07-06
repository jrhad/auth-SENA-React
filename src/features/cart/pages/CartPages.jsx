import react from "react";
import { CartProvider } from "../hooks/CartContext";
import { Cart } from "../components/Cart";

export default function CartPages({children}) {
    return (
        <CartProvider>
            {children}
            <Cart />
        </CartProvider>
    );
}