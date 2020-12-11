import React, {useState} from 'react'
import {Modal} from "reactstrap"
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'


const AuthModal = ({isOpen, toggle}) => {
  const [isLogin, setIsLogin] = useState(true)
  const toggleIsLogin = () => {
      setIsLogin(!isLogin)
  }

  return (
    <Modal isOpen={isOpen} toggle={toggle} >
        {
          isLogin
            ? <LoginForm toggle={toggle} toggleIsLogin={toggleIsLogin}/>
            : <SignUpForm toggle={toggle} toggleIsLogin={toggleIsLogin}/>
        }
    </Modal>
  )
}

export default AuthModal