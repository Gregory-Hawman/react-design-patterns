import React from 'react'

export default function LargePersonListItem({ person }) {
    const { name, age, hairColor, hobbies } = person
  return (
    <div>
        <>
            <h3>{name}</h3>
            <p>{age} years</p>
            <p>{hairColor}</p>
            <h3>Hobbies:</h3>
            <ul>
                {hobbies.map(hobby => <li key={hobby}>{hobby}</li>)}
            </ul>
        </>
    </div>
  )
}
