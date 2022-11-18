import * as React from 'react'
import styled from '@emotion/styled'
import {COLORS} from '../constants/colors'
import logo from '../images/logo.png'
import {CgProfile} from 'react-icons/cg'
import {RiLockPasswordLine} from 'react-icons/ri'

function Login() {

  const [form, setForm] = React.useState({
    username: '',
    password: '',
  })

  function handleChange(e){
    const {name, value} = e.target;
    setForm({
      ...form,
      [name]: value,
    })
  }

  return (
    <>
      <Container>
        <Title>
          Simas Merchant Dashboard
        </Title>
        <LoginContainer>
          <LoginForm>
            <ImgContainer>
              <img src={logo} alt="Bank Sinarmas" width="200" height="50"/>
            </ImgContainer>
            <FormInputContainer>
              <FormUsername>
                <FormIcon>
                  <CgProfile size={20}/>
                </FormIcon>
                <FormInput
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={form.username}
                  onChange={handleChange}
                />
              </FormUsername>
              <OptUsername>
                Forgot username?
              </OptUsername>
              <FormPassword>
                <FormIcon>
                    <RiLockPasswordLine size={20}/>
                </FormIcon>
                <FormInput
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={handleChange}
                />
              </FormPassword>
              <OptPassword>
                Forgot password?
              </OptPassword>
              {/* {JSON.stringify(form)} */}
            </FormInputContainer>
            <FormButton>
              Login
            </FormButton>
          </LoginForm>
          <Option>
            <p>
              User blocked?
            </p>
          </Option>
        </LoginContainer>
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
  letter-spacing: 2px;
`

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 320px;
  background-color: rgba(255,255,255,0.35);
  backdrop-filter: blur(6px);
  border-radius: 4px;
  padding: 1rem;
`

const ImgContainer = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  // justify-content: center;
  align-items: center;

`

const LoginForm = styled.form``

const FormInputContainer = styled.div`
  flex: 1;
  width: 100%;
  border-radius: 4px;
`

const FormUsername = styled.div`
  display: flex;
  width: 100%;
`

const OptUsername = styled.div`
  display: flex;
  width: fit-content;
  float: right;;
  font-size: 0.7rem;
  cursor: pointer;
  color: #fff;
  margin-top: 0.1rem;
  transition: 0.3s all;

  &:hover {
    color: #1c1c1c;
  }
`

const FormPassword = styled.div`
  display: flex;
  width: 100%;
  margin-top: 1.5rem;
`

const OptPassword = styled.div`
  display: flex;
  width: fit-content;
  float: right;;
  font-size: 0.7rem;
  cursor: pointer;
  color: #fff;
  transition: 0.3s all;
  margin-top: 0.1rem;

  &:hover {
    color: #1c1c1c;
  }
`

const FormIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  background-color: ${COLORS.darkerbackground};
  flex: 0.15;
  border-radius: 4px 0 0 4px;
`

const FormInput = styled.input`
  display: flex;
  flex: 0.85;
  padding: 0.5rem;
  border: 2px solid ${COLORS.darkerbackground};
  border-radius: 0 4px 4px 0;
  outline: none;
  color: ${COLORS.text};

  &:focus{
    border: 2px solid #c6c6c6;
  }
`

const FormButton = styled.button`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  width: 100%;
  margin-top: 1.5rem;
  padding: 0.5rem 1rem;
  outline: none;
  background-color: red;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.3s all;

  &:hover{
    background-color: #fff;
    color: red;
  }
`

const Option = styled.div`
display: flex;
justify-content: center;
font-size: 0.7rem;
margin-top: 1rem;
color: #fff;

&:hover {
  color: #1c1c1c;
}

p{
  cursor: pointer;
  transition: 0.3s all;
  color: #fff;

  &:hover {
    color: #1c1c1c;
  }
}

`