import React from 'react'
import styled from '@emotion/styled'
import { Button, ButtonGroup } from '../UserDashboard/SetInactiveModal'

function RejectForm({addRejectOverlay, setAddRejectOverlay}) {

    const [reason, setReason] = React.useState("");

    function handleChange(e){
        setReason(e.target.value);
    }

  return (
    <Container addRejectOverlay={addRejectOverlay}>
        <Title>
            Rejection Form
        </Title>
        <FormContainer>
            <FormGroup>
                <FormLabel htmlFor="name">
                    Reason
                </FormLabel>
                <FormTextArea id="name" type="text" value={reason} onChange={handleChange}/>
            </FormGroup>
        </FormContainer>
        <ButtonGroup>
            <Button onClick={() => setAddRejectOverlay(false)}>
                Cancel
            </Button>
            <Button>
                Ok
            </Button>
        </ButtonGroup>
    </Container>
  )
}

export default RejectForm

const Container = styled.div`
    display: ${({addRejectOverlay}) => addRejectOverlay ? "flex" : "none"};
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

const FormTextArea = styled.textarea`
    outline: none;
    width: 100%;
    border-radius: 4px;
    padding: 0.25rem 0.25rem 1.25rem 0.25rem;
    border: 1px solid #5e5e5e;
`