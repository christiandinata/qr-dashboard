import styled from '@emotion/styled'
import React from 'react'
import { Button, ButtonGroup } from '../UserDashboard/SetInactiveModal'

function AddCashier({addCashierOverlay, setAddCashierOverlay}) {
  return (
    <Container addCashierOverlay={addCashierOverlay}>
        <Title>
            Add Cashier
        </Title>
        <FormContainer>
            <FormGroup>
                <FormLabel for="name">
                    Name
                </FormLabel>
                <FormInput id="name" type="text"/>
            </FormGroup>
            <FormGroup>
                <FormLabel for="username">
                    Username
                </FormLabel>
                <FormInput id="username" type="text"/>
            </FormGroup>
            <FormGroup>
                <FormLabel for="phone">
                    Phone
                </FormLabel>
                <FormInput id="phone" type="tel"/>
            </FormGroup>
        </FormContainer>
        <ButtonGroup>
            <Button onClick={() => setAddCashierOverlay(false)}>
                Cancel
            </Button>
            <Button>
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
    border: 1px solid #5e5e5e;
    border-radius: 4px;
    padding: 0.25rem 0.5rem;

    &:focus{
        border: 2px solid #5e5e5e;
    }
`