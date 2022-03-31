import React from 'react'

type OstarProps = {
    children: React.ReactNode
}

const Ostar:React.FC<OstarProps> = ({children}) => {
  return (
    <div>{children}</div>
  )
}

export default Ostar