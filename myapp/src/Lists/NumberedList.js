import React from 'react'

export default function NumberedList({items, resourceName, itemComponent: ItemComponent }) {
  return (
    <div>
        {items.map((item, i) => {
            return (
                <div>
                    <h3>{i + 1}</h3>
                    <ItemComponent 
                        key={i}
                        {... {[resourceName]: item} }
                    />
                </div>
            )
        })}
    </div>
  )
}
 