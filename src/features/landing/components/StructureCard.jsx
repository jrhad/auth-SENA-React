import React from 'react';

export function StructureCard({ id, name, image, price, species, status, count, onIncrement, onDecrement, onAddToCart }) {
  return (
    <div className="card character-card p-3 mb-4 shadow-sm">
      <img
        src={image}
        alt={name}
        className="card-img-top character-image"
      />
      <div className="card-body text-center">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Especie: {species}</p>
        <p className="card-text">Estado: {status}</p>
        <p className="card-text fw-bold text-success">Precio: ${price}</p>

        <div className="d-flex justify-content-center align-items-center gap-2 my-2">
          <button
            className="btn btn-outline-secondary btn-sm"
            disabled={count <= 0}
            onClick={onDecrement}
          >
            -
          </button>
          <span className="mx-2 fw-bold">{count}</span>
          <button
            className="btn btn-outline-secondary btn-sm"
            disabled={count >= 10}
            onClick={onIncrement}
          >
            +
          </button>
        </div>

        <button
          className="btn btn-primary w-100"
          disabled={count < 1 || count > 10}
          onClick={onAddToCart}
        >
          Adoptar
        </button>
      </div>
    </div>
  );
}
