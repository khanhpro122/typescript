import React, { useContext, useState } from 'react'
import './App.css'
import Button from './components/Button'
import Private from './components/component/Private'
import Profile from './components/component/Profile'
import User from './components/context/User'
import {UserContextProvider} from './components/context/UserContext'
import Greet from './components/Greet'
import Heading from './components/Heading'
import Input from './components/Input'
import List from './components/List'
import Ostar from './components/Ostar'
import Person from './components/Person'
import PersonList from './components/PersonList'
import Reducer from './components/Reducer'
import TimeRef from './components/ref/TimeRef'
import Restricting from './components/retricting/Restricting'
import Toast from './components/Toast'
import CustomButton from './html/Button'

const App: React.FC = () => {
  const personName ={
    firstName: 'Khanh',
    lastName: 'Nguyen'
  }
  const personList = [
    {
      firstName: 'Khanh',
      lastName: 'Nguyen'
    },
    {
      firstName: 'Tuyet',
      lastName: 'Nguyen'
    },
  ]
  return (
    <div className="App">
      <CustomButton variant="primary">
        button
      </CustomButton>

    </div>
  )
}

export default App