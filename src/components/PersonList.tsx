import React from 'react'

type personProps = {
    list: {
        firstName: string,
        lastName: string
    }[]
}

const PersonList:React.FC<personProps> = ({list}) => {
  return (
    <div>
        {list?.map((item,index) => {
            return (
                <h1 key={index}>{item.lastName} {item.firstName}</h1>
            )
        })}
    </div>
  )
}

export default PersonList