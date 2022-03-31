import React from 'react'

type GreetProps = {
    name : string
    count : number,
    isAdmin : boolean
}

const Greet:React.FC<GreetProps> = ({name,count,isAdmin}) => {
  return (
    <>
      {isAdmin
      ? (
          <div>
              Hello {name}, {count} years old
          </div>
      ) : (
          <div>You guest</div>
      )
      }
    </>
  )
}

export default Greet