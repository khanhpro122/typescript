import React from 'react'

type personProps = {
    name: {
        firstName: string,
        lastName: string
    }
}

const Person:React.FC<personProps> = ({name}) => {
  return (
    <div>Hello {name.firstName} {name.lastName}</div>
  )
}

export default Person