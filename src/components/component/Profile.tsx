import React from 'react'
export type nameProps = {
    name :string
}

const Profile = ({name} : nameProps) => {
  return (
    <div>Profile is {name}</div>
  )
}

export default Profile