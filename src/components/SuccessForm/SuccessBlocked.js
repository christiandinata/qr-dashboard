import React from 'react'
import logo from '../../images/logo.png'
import { Container, ImgContainer } from '../LoginForm/MainLogin';
import styled from '@emotion/styled';
import {BsFillPatchExclamationFill} from 'react-icons/bs'

function SuccessBlocked({handleDisplay}) {
  return (
    <Container>
        <FormContainer>
            <ImgContainer>
                <img src={logo} alt="Bank Sinarmas" width="200" height="50"/>
            </ImgContainer>
            <Content>
                <ContentIcon>
                    <BsFillPatchExclamationFill size={64}/>
                </ContentIcon>
                <ContentDesc>
                    Username dan password yang baru akan dikirimkan ke email dan no handphone yang terdaftar.
                    Silahkan coba login kembali.
                </ContentDesc>
            </Content>
            <ButtonGroup>
                <Button onClick={() => handleDisplay("main")}>
                    Ok
                </Button>
            </ButtonGroup>
        </FormContainer>
    </Container>
  )
}

export default SuccessBlocked

const FormContainer = styled.form``

const Content = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
`

const ContentIcon = styled.div`
    color: #fff;   
`

const ContentDesc = styled.div`
    display: flex;
    color: #fff;
    margin-left: 1rem;
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