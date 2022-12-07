import React from 'react'
import {COLORS} from '../../constants/colors'
import logo from '../../images/logo.png'
import {CgProfile} from 'react-icons/cg'
import {AiFillEyeInvisible, AiFillEye} from 'react-icons/ai'
import {RiLockPasswordLine} from 'react-icons/ri'
import styled from '@emotion/styled'
import { BackendContext } from '../../Context'

function MainLogin({handleDisplay}) {

    const {logIn} = React.useContext(BackendContext);

    const [form, setForm] = React.useState({
      username: '',
      password: '',
    })

    const [visiblePass, setVisiblePass] = React.useState(false)
    
    function handleChange(e){
        const {name, value} = e.target;
        setForm({
            ...form,
            [name]: value,
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        logIn(form);
    }

  return (
    <Container>
        <FormContainer>
            <ImgContainer>
                <img src={logo} alt="Bank Sinarmas" width="200" height="50"/>
            </ImgContainer>
            <FormInputContainer>
                <FormGroup>
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
                </FormGroup>
                <OptUsername onClick={() => handleDisplay("username")}>
                    Forgot username?
                </OptUsername>
                <FormGroup>
                    <FormIcon>
                        <RiLockPasswordLine size={20}/>
                    </FormIcon>
                    <FormInput
                        type={visiblePass ? "text" : "password"}
                        name="password"
                        placeholder="Password"
                        value={form.password}
                        onChange={handleChange}
                        pass="true"
                    />
                    <EyeIcon onClick={() => setVisiblePass(!visiblePass)}>
                        {visiblePass ? <AiFillEye /> : <AiFillEyeInvisible />}
                    </EyeIcon>
                </FormGroup>
                <OptPassword onClick={() => handleDisplay("password")}>
                    Forgot password?
                </OptPassword>
                {/* {JSON.stringify(form)} */}
            </FormInputContainer>
            <FormButton onClick={handleSubmit}>
                Login
            </FormButton>
        </FormContainer>
        <Option>
        <p onClick={() => handleDisplay("blocked")}>
            User blocked?
        </p>
        </Option>
    </Container>
  )
}

export default MainLogin

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 320px;
  background-color: rgba(255,255,255,0.35);
  backdrop-filter: blur(6px);
  border-radius: 4px;
  padding: 1rem;
`

export const ImgContainer = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;

`

const FormContainer = styled.form``

export const FormInputContainer = styled.div`
  flex: 1;
  width: 100%;
  border-radius: 4px;
`

const FormGroup = styled.div`
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
  margin-bottom: 0.5rem;

  &:hover {
    transform: scale(1.1);
  }
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
    transform: scale(1.1);
  }
`

export const FormIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  background-color: ${COLORS.darkerbackground};
  border-radius: 4px 0 0 4px;
`

export const FormInput = styled.input`
  display: flex;
  padding: 0.5rem;
  ${({pass}) => {
    if (pass){
        return (
            `
                border-top: 2px solid ${COLORS.darkerbackground};
                border-right: 0;
                border-bottom: 2px solid ${COLORS.darkerbackground};
                border-left: 0;
                flex: 1;
            `
        )
    }else{
        return (`
            border-top: 2px solid ${COLORS.darkerbackground};
            border-right: 2px solid ${COLORS.darkerbackground};
            border-bottom: 2px solid ${COLORS.darkerbackground};
            border-left: 0;
            flex: 1;
        `)
    }
  }}
  border-radius: ${({pass}) => pass ? "0" : "0 4px 4px 0"};
  outline: none;
  color: ${COLORS.text};

  &:focus{
    border: 2px solid #c6c6c6;
  }
`

const EyeIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    background-color: ${COLORS.darkerbackground};
    cursor: pointer;
    border-radius: 0 4px 4px 0;
    transition: 0.3s all;

    &:hover{
        background-color: #f7f7f7;
    }
`

export const FormButton = styled.button`
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

p{
  cursor: pointer;
  transition: 0.3s all;
  color: #fff;

  &:hover {
    transform: scale(1.1);
  }
}

`