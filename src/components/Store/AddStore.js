import styled from '@emotion/styled'
import axios from 'axios';
import React from 'react'
import { BackendContext } from '../../Context'
import { Button, ButtonGroup } from '../UserDashboard/SetInactiveModal'

function AddStore({addStoreOverlay, setAddStoreOverlay}) {

    const {merchantInfo, fetchStore} = React.useContext(BackendContext);

    const mainUrl = "http://msqrmanager-integration-dev.devs.banksinarmas.com";

    let payload = {
        merchant_id: merchantInfo.merchant_id,
        merchant_cif: "2209039",
        merchant_criteria: "UMI",
        nmid: "ID2134567133455",
        ownership: "new tester2",
        store_label: "NCS 7",
        store_phone_num: "082113579359",
        store_address: "Jl. Danau Sunter Barat",
        store_location: "Sunter Mall",
        kelurahan: "Sunter Agung",
        kecamatan: "Tanjung Priok",
        city: "Jakarta Utara",
        province: "DKI Jakarta",
        postal_code: "14350",
        lang: "id"
    }

    function handleSubmit(e){
        e.preventDefault();
        let url = `${mainUrl}/qrmd/addStore`

        axios.post(url, payload)
        .then(res => {
            console.log(res);
            fetchStore();
        })
        .catch(err => {
            console.log(err);
        })

        setAddStoreOverlay(false);
    }

  return (
    <Container addStoreOverlay={addStoreOverlay}>
        <Title>
            Add Store
        </Title>
        <FormContainer>
            <FormGroup>
                <FormLabel for="name">
                    Store Name
                </FormLabel>
                <FormInput id="name" type="text"/>
            </FormGroup>
            <FormGroup>
                <FormLabel for="address">
                    Address
                </FormLabel>
                <FormInput id="address" type="text"/>
            </FormGroup>
            <FormGroup>
                <FormLabel for="province">
                    Province
                </FormLabel>
                <FormInput id="province" type="text"/>
            </FormGroup>
            <FormGroup>
                <FormLabel for="city">
                    City
                </FormLabel>
                <FormInput id="city" type="text"/>
            </FormGroup>
            <FormGroup>
                <FormLabel for="district">
                    District
                </FormLabel>
                <FormInput id="district" type="text"/>
            </FormGroup>
            <FormGroup>
                <FormLabel for="postal_code">
                    Postal Code
                </FormLabel>
                <FormInput id="postal_code" type="number"/>
            </FormGroup>
        </FormContainer>
        <ButtonGroup>
            <Button onClick={() => setAddStoreOverlay(false)}>
                Cancel
            </Button>
            <Button onClick={handleSubmit}>
                Add
            </Button>
        </ButtonGroup>
    </Container>
  )
}

export default AddStore

const Container = styled.div`
    display: ${({addStoreOverlay}) => addStoreOverlay ? "flex" : "none"};
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