import React from 'react'

type clickProps = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void,
    style:React.CSSProperties
}

const Button = ({handleClick,style}: clickProps) => {
  return (
    <button
    style={style}
    onClick={(e) => handleClick(e,1)}
    >Button</button>
  )
}

export default Button