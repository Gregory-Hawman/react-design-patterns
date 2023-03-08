import React from 'react'

export default function LargeProductListItem({ product }) {
    const { name, price, description, rating } = product;
  return (
    <div>
        <h3>{name}</h3>
        <p>{price}</p>
        <p>{description}</p>
        <p>Average Rating: {rating}</p>
    </div>
  )
}
