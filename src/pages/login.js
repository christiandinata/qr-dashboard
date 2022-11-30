import * as React from 'react'
import styled from '@emotion/styled'
import ForgotUsername from '../components/LoginForm/ForgotUsername'
import MainLogin from '../components/LoginForm/MainLogin'
import ForgotPassword from '../components/LoginForm/ForgotPassword'
import UserBlocked from '../components/LoginForm/UserBlocked'
import SuccessUsername from '../components/SuccessForm/SuccessUsername'
import SuccessPassword from '../components/SuccessForm/SuccessPassword'
import SuccessBlocked from '../components/SuccessForm/SuccessBlocked'

function Login({logIn}) {

  const [display, setDisplay] = React.useState({
    main: true,
    username: false,
    successUsername: false,
    password: false,
    successPassword: false,
    blocked: false,
    successBlocked: false
  })

  function handleDisplay(name){
    Object.keys(display).forEach(key => {
      display[key] = false;
    })
    setDisplay({
      ...display,
      [name]: true
    })
  }

  return (
    <>
      <Container>
        <Title>
          {display.main && "Login"}
          {display.username && "Forgot Username"}
          {display.password && "Forgot Password"}
          {display.blocked && "User Blocked"}
        </Title>
        {display.main && 
          <MainLogin handleDisplay={handleDisplay} logIn={logIn}/>
        }
        {display.username && 
          <ForgotUsername handleDisplay={handleDisplay}/>
        }
        {display.password &&
          <ForgotPassword handleDisplay={handleDisplay} />
        }
        {display.blocked &&
          <UserBlocked handleDisplay={handleDisplay}/>
        }
        {display.successUsername && 
          <SuccessUsername handleDisplay={handleDisplay} />
        }
        {display.successPassword &&
          <SuccessPassword handleDisplay={handleDisplay} />
        }
        {display.successBlocked &&
          <SuccessBlocked handleDisplay={handleDisplay} />
        }
      </Container>
    </>
  )
}

export default Login

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background: rgb(255,0,0);
  background: radial-gradient(circle, rgba(255,0,0,1) 0%, rgba(133,0,0,1) 0%, rgba(255,0,0,1) 100%);
  // background-color: #bafffe;
`

const Title = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  text-align: center;
  justify-content: center;
  font-size: 2rem;
  color: #fff;
  font-weight: 700;
  margin-bottom: 1rem;
`