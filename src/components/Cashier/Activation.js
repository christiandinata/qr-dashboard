import React from 'react'
import styled from '@emotion/styled'
import { AiOutlineCheckCircle, AiOutlineWarning} from 'react-icons/ai'
import { BackendContext } from '../../Context'
import axios from 'axios';

function Activation({activationOverlay, setActivationOverlay, activationType, setActivationType, activationPayload, setActivationPayload}) {
    
    const {fetchCashier, merchantInfo} = React.useContext(BackendContext);
    const mainUrl = "http://msqrmanager-integration-dev.devs.banksinarmas.com"

    function handleCancel(){
        setActivationOverlay(false);
        setActivationType({
            ...activationType,
            activate: false,
            deactivate: false,
        })
    }

    let payload = {
        merchant_id: merchantInfo?.merchant_id,
        pan: activationPayload?.pan,
        merchant_pan_name: activationPayload?.merchant_pan_name,
        terminal_id: activationPayload?.terminal_id,
        cashier_status: activationType?.activate ? "active" : "inactive",
        lang: "id"
    }

    function handleSubmit(){
        let url = `${mainUrl}/qrmd/updateCashierStatus`

        axios.post(url, payload)
        .then(res => {
            console.log(res);
            fetchCashier();
        })
        .catch(err => {
            console.log(err);
        })

        setActivationOverlay(false);
    }

  return (
    <Container activationOverlay={activationOverlay}>
        <Content>
            <WarningIcon activate={activationType.activate}>
                {activationType.activate ? <AiOutlineCheckCircle size="36"/> : <AiOutlineWarning size="36"/>}
            </WarningIcon>
            <ContentDesc>
                <Title>
                    {activationType.activate ? "Activate User" : "Deactivate User"}
                </Title>
                <Desc>
                    {activationType.activate ? 
                        "Are you sure you want to activate this cashier?" 
                    : 
                        "Are you sure you want to deactivate this cashier?"}
                </Desc>
            </ContentDesc>
        </Content>
        <ButtonGroup>
            <Button onClick={handleCancel} activate={activationType.activate}>
                Cancel
            </Button>
            <Button activate={activationType.activate} onClick={handleSubmit}>
                {activationType.activate ? "Activate" : "Deactivate"}
            </Button>
        </ButtonGroup>
    </Container>
  )
}

export default Activation

const Container = styled.div`
    display: ${({activationOverlay}) => activationOverlay ? "flex" : "none"};
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
    background-color: ${({activate}) => activate ? "rgba(99, 255, 115, 0.25)" : "rgba(207, 14, 0, 0.15)"};
    color: ${({activate}) => activate ? "#004f08" : "#cf0e00"};
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
        background-color: ${({activate}) => activate ? "green" : "red"};
        box-shadow: ${({activate}) => activate ? "0px 0px 4px 0px green" : "0px 0px 4px 0px red"};
        -webkit-box-shadow: ${({activate}) => activate ? "0px 0px 4px 0px green" : "0px 0px 4px 0px red"};
        -moz-box-shadow: ${({activate}) => activate ? "0px 0px 4px 0px green" : "0px 0px 4px 0px red"};

        &:hover {
            background-color: #fff;
            color: ${({activate}) => activate ? "green" : "red"};
        }
    }
`