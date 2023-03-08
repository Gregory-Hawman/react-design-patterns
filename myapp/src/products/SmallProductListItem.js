import React from 'react'

export default function SmallProductListItem({ product }) {
    const { name, price } = product;
  return (
    <div>
        <h3>{name} - {price}</h3>
    </div>
  )
}
