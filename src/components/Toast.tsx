import React from 'react'
type Vertical = 'left' | 'center' | 'right'
type Horizontal = 'top' | 'center' | 'bottom'

type ToastProps = {
    position: Exclude<`${Vertical}-${Horizontal}`, 'center-center'> | 'center'
}

const Toast = ({position}:ToastProps) => {
  return (
    <div>{position}</div>
  )
}

export default Toast