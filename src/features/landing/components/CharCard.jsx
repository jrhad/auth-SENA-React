import React, { useState, useContext } from "react";
import { CharContext } from "../hooks/CharacterContext";
import { StructureCard } from "./StructureCard";
import { useCart } from "../../cart/hooks/CartContext";

function CharacterCard() {
    const { addToCart } = useCart();
    const { characters, loading, error } = useContext(CharContext);
    const [counts, setCounts] = useState({});

    const truncateText = (text, maxLength = 100) => {
        if (!text) return 'Sin descripción';
        return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
    };

    const increment = (id) => {
        setCounts((prev) => ({
            ...prev,
            [id]: (prev[id] || 0) + 1,
        }));
    };

    const decrement = (id) => {
        setCounts((prev) => ({
            ...prev,
            [id]: Math.max((prev[id] || 0) - 1, 0),
        }));
    };

    const handleAddToCart = (char) => {
        const quantity = counts[char.id] || 0;
        if (quantity === 0) return;   // nada que agregar

        const product = {
            id: char.id,
            title: char.name,
            price: char.price,
            image: char.image,
            description: truncateText(char.description),
            category: char.species,
            quantity: counts[char.id] || 0              // 👈 cantidad exacta
        };

        addToCart(product);            // ✅ llamada única

        // Opcional: vuelve a 1 el contador para ese personaje
        setCounts((prev) => ({ ...prev, [char.id]: 1 }));
    };

    if (loading) return <p>Cargando personajes...</p>;
    if (error) return <p>Ocurrió un error: {error}</p>;

    return (
        <div className="character-card-container">
            {characters.map((char) => (
                <StructureCard
                    key={char.id}
                    id={char.id}
                    name={char.name}
                    species={char.species}
                    status={char.status}
                    image={char.image}
                    price={char.price}
                    count={counts[char.id] || 0}
                    onIncrement={() => increment(char.id)}
                    onDecrement={() => decrement(char.id)}
                    onAddToCart={() => handleAddToCart(char)} // ✅ aquí
                />
            ))}
        </div>
    );
}

export default CharacterCard;
