import React from 'react'
import styled from '@emotion/styled'
import { AiOutlineCheckCircle} from 'react-icons/ai'

function Activation({activationOverlay, setActivationOverlay}) {
  return (
    <Container activationOverlay={activationOverlay}>
        <Content>
            <WarningIcon>
                <AiOutlineCheckCircle size={36}/>
            </WarningIcon>
            <ContentDesc>
                <Title>
                    Deactivate User
                </Title>
                <Desc>
                    Are you sure you want to deactivate this user?<br /> This action cannot be undone.
                </Desc>
            </ContentDesc>
        </Content>
        <ButtonGroup>
            <Button onClick={() => setActivationOverlay(false)}>
                Cancel
            </Button>
            <Button>
                Deactivate
            </Button>
        </ButtonGroup>
    </Container>
  )
}

export default Activation

const Container = styled.div`
    display: ${({userInactiveOverlay}) => userInactiveOverlay ? "flex" : "none"};
    flex-direction: column;
    z-index: 3;
    position: absolute;
    place-self: center;
    justify-content: center;
    background-color: #fff;
    color: #000;
    padding: 1rem 1.5rem;
    border-radius: 6px;
    width: 360px;
`

const Content = styled.div`
    display: flex;
    flex: 1;
`

const WarningIcon = styled.div`
    display: flex;
    justify-content: center;
    background-color: rgba(207, 14, 0, 0.15);
    color: #cf0e00;
    height: fit-content;
    border-radius: 50%;
    padding: 0.5rem;
`

const ContentDesc = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 1rem;
    gap: 0.5rem;
`

const Title = styled.div`
    font-weight: 700;
    font-size: 1.3rem;
`

const Desc = styled.div`
    color: #5e5e5e;
`

export const ButtonGroup = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    margin-top: 1.5rem;
    gap: 0.5rem;
`

export const Button = styled.button`
    padding: 0.5rem 1rem;
    background-color: #fff;
    border: none;
    border-radius: 4px;
    color: #000;
    font-weight: 600;
    box-shadow: 0px 0px 4px 0px #000;
    -webkit-box-shadow: 0px 0px 4px 0px #000;
    -moz-box-shadow: 0px 0px 4px 0px #000;
    cursor: pointer;
    transition: 0.3s all;

    &:hover {
        background-color: #000;
        color: #fff;
    }

    &:nth-child(2){
        color: #fff;
        background-color: red;
        box-shadow: 0px 0px 4px 0px red;
        -webkit-box-shadow: 0px 0px 4px 0px red;
        -moz-box-shadow: 0px 0px 4px 0px red;

        &:hover {
            background-color: #fff;
            color: red;
        }
    }
`