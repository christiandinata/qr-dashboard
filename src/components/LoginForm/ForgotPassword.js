import React from 'react'
import styled from '@emotion/styled'
import { COLORS } from '../../constants/colors';
import logo from '../../images/logo.png'
import {AiOutlineMail} from 'react-icons/ai'
import { Container, FormIcon, FormInput, FormInputContainer, ImgContainer } from './MainLogin';
import axios from 'axios';

function ForgotPassword({handleDisplay}) {

    const userUrl = "http://qr-merchant-dashboard-integration-dev.devs.banksinarmas.com"
    const [form, setForm] = React.useState({
        username: ""
    })

    let payload = {
        username: form.username
    }

    function handleChange(e){
        const {name, value} = e.target;
        setForm({
            ...form,
            [name]: value
        })
    }

    function handleSubmit(e){
        e.preventDefault();

        let url = `${userUrl}/user/forgotPassword`

        axios.post(url, payload)
        .then(res => {
            console.log(res)
            handleDisplay("successPassword")
        })
        .catch(err => {
            console.log(err)
        })
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
                        <AiOutlineMail size={20}/>
                    </FormIcon>
                    <FormInput
                        type="username"
                        name="username"
                        placeholder="Username"
                        value={form.username}
                        onChange={handleChange}
                    />
                </FormGroup>
                {/* {JSON.stringify(form)} */}
            </FormInputContainer>
            <ButtonGroup>
                <Button onClick={handleSubmit}>
                    Submit
                </Button>
                <Button onClick={() => handleDisplay("main")}>
                    Cancel
                </Button>
            </ButtonGroup>
        </FormContainer>
    </Container>
  )
}

export default ForgotPassword

const FormContainer = styled.form``

const FormGroup = styled.div`
  display: flex;
  width: 100%;

  &:nth-child(2){
    margin-top: 1rem;
  }
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
`

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    outline: none;
    background-color: red;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: 0.3s all;

    &:nth-child(2){
        background-color: #fff;
        color: red;

        &:hover{
            background-color: red;
            color: #fff;
        }
    }

    &:hover{
    background-color: #fff;
    color: red;
    }
`