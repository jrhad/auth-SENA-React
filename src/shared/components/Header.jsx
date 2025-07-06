import react from "react";
import { CartButton } from "../../features/cart/components/CartButton";
import Dashboard from "../../features/landing/components/Dashboard";

export default function Header() {
    return (
        <header className="header">
            <div className="header-container">
                <div className="logo">
                    <Dashboard />
                </div>
                <nav className="nav">
                    <CartButton />
                </nav>
            </div>
        </header>
    );
}