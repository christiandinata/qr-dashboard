import React from 'react'
import styled from '@emotion/styled'
import { BackendContext } from '../../Context'
import axios from 'axios';
import { Button, ButtonGroup } from '../UserDashboard/SetInactiveModal';

function EditStore({editStoreOverlay, cicoPayload, setEditStoreOverlay}) {
    
    const {merchantInfo} = React.useContext(BackendContext);
    const mainUrl = "http://msqrmanager-integration-dev.devs.banksinarmas.com";
    const [form, setForm] = React.useState({
        store_address: '',
        store_location: '',
        province: '',
        city: '',
        kecamatan: '',
        kelurahan: '',
        postal_code: '',
    })

    const [provinceList, setProvinceList] = React.useState()
    const [cityList, setCityList] = React.useState()
    const [districtList, setDistrictList] = React.useState()
    const [villageList, setVillageList] = React.useState()

    let payload = {
        merchant_id: merchantInfo?.merchant_id,
        pan: cicoPayload?.pan,
        store_address: form.store_address,
        store_location: form.store_location,
        kelurahan: villageList?.filter(item => item.id === parseInt(form.kelurahan))[0]?.nama, // 
        kecamatan: districtList?.filter(item => item.id === parseInt(form.kecamatan))[0]?.nama, // District
        city: cityList?.filter(item => item.id === parseInt(form.city))[0]?.nama, // City
        province: provinceList?.filter(item => item.id === parseInt(form.province))[0]?.nama, // Province
        postal_code: form.postal_code,
        lang: "id"
    }

    // get all province names
    React.useEffect(() => {
        axios.get("https://dev.farizdotid.com/api/daerahindonesia/provinsi")
        .then(res => {
            setProvinceList(res.data.provinsi)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    // get all city names
    React.useEffect(() => {
        axios.get(`https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${form.province}`)
        .then(res => {
            setCityList(res.data.kota_kabupaten)
        })
        .catch(err => {
            console.log(err)
        })
    }, [form.province])

    // get all district names
    React.useEffect(() => {
        axios.get(`https://dev.farizdotid.com/api/daerahindonesia/kecamatan?id_kota=${form.city}`)
        .then(res => {
            setDistrictList(res.data.kecamatan)
        })
        .catch(err => {
            console.log(err)
        })
    }, [form.city])

    // get all village names
    React.useEffect(() => {
        axios.get(`https://dev.farizdotid.com/api/daerahindonesia/kelurahan?id_kecamatan=${form.kecamatan}`)
        .then(res => {
            setVillageList(res.data.kelurahan)
        })
        .catch(err => {
            console.log(err)
        })
    }, [form.kecamatan])

    function handleChange(e){
        const {name, value} = e.target;

        setForm({
            ...form,
            [name]: value
        })
    }

    function handleCancel(){
        setEditStoreOverlay(false);
        setForm({
            ...form,
            store_address: '',
            province: '',
            city: '',
            kecamatan: '',
            kelurahan: '',
            postal_code: '',
        })
    }

    function handleSubmit(e){
        e.preventDefault();

        let url = `${mainUrl}/qrmd/editStoreRequest`

        axios.post(url, payload)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }

  return (
    <Container editStoreOverlay={editStoreOverlay}>
        <Title>
            Edit Store
        </Title>
        <FormContainer>
            <FormGroup>
                <FormLabel htmlFor="store_address">
                    New Address
                </FormLabel>
                <FormInput 
                    id="store_address" 
                    name='store_address' 
                    placeholder="Jl. Danau Sunter Utara" 
                    type="text" 
                    value={form.store_address}
                    onChange={handleChange}
                />
            </FormGroup>
            <FormGroup>
                <FormLabel htmlFor="store_location">
                    New Location
                </FormLabel>
                <FormInput id="store_location" name='store_location' placeholder="Sunter Mall" type="text" value={form.store_location} onChange={handleChange}/>
            </FormGroup>
            <FormGroup>
                <FormLabel htmlFor="province">
                    New Province
                </FormLabel>
                <FormSelect id="province" name='province' value={form.province} onChange={handleChange}>
                    {provinceList && provinceList?.map(item => (
                        <option key={item.id} value={item.id}>{item.nama}</option>
                    ))}
                </FormSelect>
            </FormGroup>
            <FormGroup>
                <FormLabel htmlFor="city">
                    New City
                </FormLabel>
                <FormSelect id="city" name='city' value={form.city} onChange={handleChange}>
                    {cityList && cityList?.map(item => (
                        <option key={item.id} value={item.id}>{item.nama}</option>
                    ))}
                </FormSelect>
            </FormGroup>
            <FormGroup>
                <FormLabel htmlFor="kecamatan">
                    New District
                </FormLabel>
                <FormSelect id="kecamatan" name='kecamatan' value={form.kecamatan} onChange={handleChange}>
                    {districtList && districtList?.map(item => (
                        <option key={item.id} value={item.id}>{item.nama}</option>
                    ))}
                </FormSelect>
            </FormGroup>
            <FormGroup>
                <FormLabel htmlFor="kelurahan">
                    New Village
                </FormLabel>
                <FormSelect id="kelurahan" name='kelurahan' value={form.kelurahan} onChange={handleChange}>
                    {villageList && villageList?.map(item => (
                        <option key={item.id} value={item.id}>{item.nama}</option>
                    ))}
                </FormSelect>
            </FormGroup>
            <FormGroup>
                <FormLabel htmlFor="postal_code">
                    New Postal Code
                </FormLabel>
                <FormInput id="postal_code" name='postal_code' type="number" value={form.postal_code} onChange={handleChange}/>
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

export default EditStore

const Container = styled.div`
    display: ${({editStoreOverlay}) => editStoreOverlay ? "flex" : "none"};
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
    padding-right: 1rem;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    overflow: auto;
    height: 280px;
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

export const FormSelect = styled.select`
    display: flex;
    flex: 1;
    outline: none;
    width: 100%;
    border: 1px solid #5e5e5e;
    border-radius: 4px;
    padding: 0.25rem 0.5rem;
`