import React from 'react'
import styled from '@emotion/styled'
import { BackendContext } from '../../Context'
import { Button, ButtonGroup } from '../UserDashboard/SetInactiveModal';

function EditCashier({editCashierOverlay, activationPayload, setEditCashierOverlay}) {

    const {merchantInfo} = React.useContext(BackendContext);

    const [form, setForm] = React.useState({
        mobile_number: '',
    })

    let payload = {
        merchant_id: merchantInfo?.merchant_id,
        pan: activationPayload.pan,
        merchant_pan_name: activationPayload.merchant_pan_name,
        terminal_id: activationPayload.terminal_id,
        mobile_number: form.mobile_number,
        lang: "id"
    }

    function handleChange(e){
        const {name, value} = e.target;

        setForm({
            ...form,
            [name]: value
        })
    }

    function handleCancel(){
        setEditCashierOverlay(false);
        setForm({
            ...form,
            mobile_number: '',
        })
    }

    function handleSubmit(e){
        e.preventDefault();
    }
    
  return (
    <Container editCashierOverlay={editCashierOverlay}>
        <Title>
            Edit Cashier
        </Title>
        <FormContainer>
            <FormGroup>
                <FormLabel for="mobile_number">
                    New Phone
                </FormLabel>
                <FormInput id="mobile_number" type="tel" value={form.mobile_number} name="mobile_number" onChange={handleChange}/>
            </FormGroup>
        </FormContainer>
        <ButtonGroup>
            <Button onClick={handleCancel}>
                Cancel
            </Button>
            <Button onClick={handleSubmit}>
                Add
            </Button>
        </ButtonGroup>
    </Container>
  )
}

export default EditCashier

const Container = styled.div`
    display: ${({editCashierOverlay}) => editCashierOverlay ? "flex" : "none"};
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