import React from 'react'
import Greet from './Greet'

const CustomerComponent = (props : React.ComponentProps<typeof Greet>) => {
  return (
    <div>{props.children}</div>
  )
}

export default CustomerComponent