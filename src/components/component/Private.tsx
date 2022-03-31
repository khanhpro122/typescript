import React from 'react'
import Login from './Login'
import {nameProps} from './Profile'

type stateProps = {
    isLogged: boolean
    Component: React.ComponentType<nameProps>
}

const Private = ({isLogged, Component} : stateProps) => {
    if(isLogged) {
        return <Component name="khanh"/>
    }else {
        return <Login />
    }
}

export default Private