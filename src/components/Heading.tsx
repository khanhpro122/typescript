import React from 'react'

type headProps = {
    children: string
}

const Heading:React.FC<headProps> = ({children}) => {
  return (
    <div>{children}</div>
  )
}

export default Heading