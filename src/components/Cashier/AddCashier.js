import styled from '@emotion/styled'
import axios from 'axios';
import React from 'react'
import { BackendContext } from '../../Context'
import { FormSelect } from '../Store/AddStore';
import { Button, ButtonGroup } from '../UserDashboard/SetInactiveModal'

function AddCashier({addCashierOverlay, setAddCashierOverlay}) {

    const {merchantInfo, fetchCashier, storeData} = React.useContext(BackendContext);
    const mainUrl = "http://msqrmanager-integration-dev.devs.banksinarmas.com";

    const [form, setForm] = React.useState({
        pan: '',
        merchant_pan_name: '',
        username: '',
        mobile_number: '',
        store_terminal_id: '',
    })

    let payload = {
        merchant_id: merchantInfo?.merchant_id,
        merchant_cif: merchantInfo?.merchant_cif,
        pan: form.pan,
        merchant_pan_name: form.merchant_pan_name,
        username: form.username,
        mobile_number: form.mobile_number,
        store_terminal_id: form.store_terminal_id,
        lang: "id",
    }

    function handleChange(e) {
        const {name, value} = e.target;

        setForm({
            ...form,
            [name]: value,
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        let url = `${mainUrl}/qrmd/addCashier`

        axios.post(url, payload)
        .then(res => {
            console.log(res);
            fetchCashier();
        })
        .catch(err => {
            console.log(err);
        })

        setAddCashierOverlay(false);
    }

    React.useEffect(() => {
        setForm({
            ...form,
            pan: storeData && storeData[0].pan
        })
    }, [storeData])
    

    React.useEffect(() => {
        setForm({
            ...form,
            store_terminal_id: storeData?.filter(item => item.pan === form.pan)[0]?.terminal_id,
        })
    }, [form.pan])

    console.log(payload)

  return (
    <Container addCashierOverlay={addCashierOverlay}>
        <Title>
            Add Cashier
        </Title>
        <FormContainer>
            <FormGroup>
                <FormLabel for="pan">
                    Pan
                </FormLabel>
                <FormSelect id="pan" name='pan' value={form.pan} onChange={handleChange}>
                    {storeData && storeData?.map(item => (
                        <option key={item.pan} value={item.pan}>{item.store_label} - {item.pan}</option>
                    ))}
                </FormSelect>
            </FormGroup>
            <FormGroup>
                <FormLabel for="merchant_pan_name">
                    Cashier Name
                </FormLabel>
                <FormInput 
                    id="merchant_pan_name" 
                    name="merchant_pan_name" 
                    value={form.merchant_pan_name} 
                    type="text"
                    onChange={handleChange}
                />
            </FormGroup>
            <FormGroup>
                <FormLabel for="username">
                    Username
                </FormLabel>
                <FormInput id="username" name="username" value={form.username} type="text" onChange={handleChange}/>
            </FormGroup>
            <FormGroup>
                <FormLabel for="mobile_number">
                    Phone
                </FormLabel>
                <FormInput id="mobile_number" type="tel"/>
            </FormGroup>
            <FormGroup>
                <FormLabel for="store_terminal_id">
                    Terminal ID
                </FormLabel>
                <FormInput terminalID="true" id="store_terminal_id" type="text" value={form.store_terminal_id} disabled/>
            </FormGroup>
        </FormContainer>
        <ButtonGroup>
            <Button onClick={() => setAddCashierOverlay(false)}>
                Cancel
            </Button>
            <Button onClick={handleSubmit}>
                Add
            </Button>
        </ButtonGroup>
    </Container>
  )
}

export default AddCashier

const Container = styled.div`
    display: ${({addCashierOverlay}) => addCashierOverlay ? "flex" : "none"};
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
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    margin-bottom: 0.5rem;
`

const FormLabel = styled.label`
    display: flex;
    color: #5e5e5e;
    font-size: 0.8rem;
`

const FormInput = styled.input`
    display: flex;
    flex: 1;
    outline: none;
    width: 100%;
    border: ${({terminalID}) => terminalID ? "none" : "1px solid #5e5e5e"}
    border-radius: 4px;
    padding: 0.25rem 0.5rem;

    &:focus{
        border: 2px solid #5e5e5e;
    }
`