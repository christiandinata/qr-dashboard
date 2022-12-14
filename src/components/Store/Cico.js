import React from 'react'
import styled from '@emotion/styled'
import { Button, ButtonGroup } from '../UserDashboard/SetInactiveModal'
import Switch from '@mui/material/Switch';
import { BackendContext } from '../../Context';
import axios from 'axios';
import Loading from '../Loading';
import { Phone } from '@material-ui/icons';

function Cico({cicoPayload, cicoOverlay, setCicoOverlay, loading, setLoading}) {

    const {merchantInfo, fetchStore, storeData} = React.useContext(BackendContext);
    const mainUrl = "http://msqrmanager-integration-dev.devs.banksinarmas.com";

    const [cicoSwitch, setCicoSwitch] = React.useState({
        cashin: cicoPayload.cashIn,
        cashout: cicoPayload.cashOut,
    })

    React.useEffect(() => {
        setCicoSwitch({
            ...cicoSwitch,
            cashin: cicoPayload.cashIn,
            cashout: cicoPayload.cashOut,
        })
        console.log("loadload")
    }, [cicoPayload.cashIn, cicoPayload.cashOut])

    let cashInPayload = {
        merchant_id: merchantInfo?.merchant_id,
        pan: cicoPayload.pan,
        cico_type: "cashin",
        cico_status: cicoSwitch.cashin ? "active" : "inactive",
        lang: "id"
    }

    let cashOutPayload = {
        merchant_id: merchantInfo?.merchant_id,
        pan: cicoPayload.pan,
        cico_type: "cashout",
        cico_status: cicoSwitch.cashout ? "active" : "inactive",
        lang: "id"
    }

    function handleSwitch(e){
        setCicoSwitch({...cicoSwitch, [e.target.name]: e.target.checked})
    }

    React.useEffect(() => {
        
    }, [cicoSwitch.cashin])

    function handleSubmit(e){
        e.preventDefault();

        let url = `${mainUrl}/qrmd/updateStoreCicoStatus`
        setLoading(true)

        axios.post(url, cashInPayload)
        .then(res => {
            console.log("cashIn changed")
        })
        .catch(err => {
            console.log(err)
        })

        axios.post(url, cashOutPayload)
        .then(res => {
            console.log("cashOut changed")
            fetchStore()
        })
        .catch( err => {
            console.log(err)
        })

        setCicoOverlay(false)    
    }

    React.useEffect(() => {
        setLoading(false)
    }, [storeData])
    

    return (
        <Container cicoOverlay={cicoOverlay}>
            <Title>
                Transaction Settings
            </Title>
            <FormContainer>
                <FormGroup>
                    <Switch checked={cicoSwitch.cashin} size="small" onChange={handleSwitch} name="cashin"/>
                    <FormLabel>Cash In (Setor Tunai)</FormLabel>
                </FormGroup>
                <FormGroup>
                    <Switch checked={cicoSwitch.cashout} size="small" onChange={handleSwitch} name="cashout"/>
                    <FormLabel>Cash Out (Tarik Tunai)</FormLabel>
                </FormGroup>
            </FormContainer>
            <ButtonGroup>
                <Button onClick={() => setCicoOverlay(false)}>
                    Cancel
                </Button>
                <Button onClick={handleSubmit}>
                    Ok
                </Button>
            </ButtonGroup>
        </Container>
    )
}

export default Cico

const Container = styled.div`
    display: ${({cicoOverlay}) => cicoOverlay ? "flex" : "none"};
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

const Title = styled.div`
    font-weight: 700;
    font-size: 1.3rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid grey;
`

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
`

const FormGroup = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 0.5rem;
`

const FormLabel = styled.label`
    display: flex;
    color: #5e5e5e;
    font-size: 0.8rem;
`