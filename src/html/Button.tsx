import React from 'react'

type buttonProps = {
  variant: string;
  children: string
} & Omit<React.ComponentProps<'button'>, 'children'>

const CustomButton = ({variant,children, ...rest} : buttonProps) => {
  return (
    <button className={variant}>{children}</button>
  )
}

export default CustomButton