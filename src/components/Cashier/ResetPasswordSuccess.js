import React from 'react'
import { BsFillPatchExclamationFill } from 'react-icons/bs'

import styled from '@emotion/styled'

function ResetPasswordSuccess({resetPasswordSuccessOverlay, setResetPasswordSuccessOverlay}) {
  return (
    <Container resetPasswordSuccessOverlay={resetPasswordSuccessOverlay}>
        <Content>
            <ContentIcon>
                <BsFillPatchExclamationFill size={64}/>
            </ContentIcon>
            <ContentDesc>
                Password has been successfully reset
            </ContentDesc>
        </Content>
        <ButtonGroup>
            <Button onClick={() => setResetPasswordSuccessOverlay(false)}>
                Ok
            </Button>
        </ButtonGroup>
    </Container>
  )
}

export default ResetPasswordSuccess

const Container = styled.div`
    display: ${({resetPasswordSuccessOverlay}) => resetPasswordSuccessOverlay ? "flex" : "none"};
    flex-direction: column;
    z-index: 3;
    position: absolute;
    place-self: center;
    justify-content: center;
    background-color: #fff;
    color: #000;
    padding: 1rem 1.5rem;
    border-radius: 6px;
    width: 300px;
`

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