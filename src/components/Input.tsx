import React from 'react'

type InputProps = {
    value: string,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input:React.FC<InputProps> = ({value,handleChange}) => {
  return (
    <div>
        <input type="text" 
        value={value} 
        onChange={handleChange}
        />
    </div>
  )
}

export default Input