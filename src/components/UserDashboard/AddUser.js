import React from 'react'
import styled from '@emotion/styled'
import { Button, ButtonGroup } from './SetInactiveModal'


function AddUser({addUserOverlay, setAddUserOverlay}) {

    const [form, setForm] = React.useState({
        name: '',
        username: '',
        email: '',
        phone: '',
    })

    function handleChange(e){
        const {name, value} = e.target;
        setForm({...form, [name]: value});
    }

    function handleFormCancel () {
        setForm({
            ...form,
            name: '',
            username: '',
            email: '',
            phone: '',
        });
        setAddUserOverlay(false)
    }

  return (
    <Container addUserOverlay={addUserOverlay}>
        <Title>
            Add User
        </Title>
        <FormContainer>
            <FormGroup>
                <FormLabel htmlFor="name">
                    Name
                </FormLabel>
                <FormInput id="name" name="name" type="text" value={form.name} onChange={handleChange}/>
            </FormGroup>
            <FormGroup>
                <FormLabel htmlFor="username">
                    Username
                </FormLabel>
                <FormInput id="username" name="username" type="text" value={form.username} onChange={handleChange}/>
            </FormGroup>
            <FormGroup>
                <FormLabel htmlFor="email">
                    Email
                </FormLabel>
                <FormInput id="email" name="email" type="email" value={form.email} onChange={handleChange}/>
            </FormGroup>
            <FormGroup>
                <FormLabel htmlFor="phone">
                    Phone
                </FormLabel>
                <FormInput id="phone" name='phone' type="tel" value={form.phone} onChange={handleChange}/>
            </FormGroup>
        </FormContainer>
        <ButtonGroup>
            <Button onClick={handleFormCancel}>
                Cancel
            </Button>
            <Button>
                Add
            </Button>
        </ButtonGroup>
    </Container>
  )
}

export default AddUser

const Container = styled.div`
    display: ${({addUserOverlay}) => addUserOverlay ? "flex" : "none"};
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