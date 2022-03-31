import React, { useState,createContext } from 'react'

type AuthUser = {
    name: string,
    email: string
}

type UserContextType = {
    user : AuthUser | null,
    setUser:  React.Dispatch<React.SetStateAction<AuthUser | null>>
}

type ChildrenProps = {
    children: React.ReactNode
}

export const PropsUserContext = createContext({} as UserContextType)

export const UserContextProvider = ({children} : ChildrenProps) => {
    const [user, setUser] = useState<AuthUser | null>(null)
  return (
    <PropsUserContext.Provider value={{user, setUser}}>
        {children}
    </PropsUserContext.Provider>
  )
}
