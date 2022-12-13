import styled from '@emotion/styled'
import axios from 'axios';
import React from 'react'
import { BackendContext } from '../../Context'
import { Button, ButtonGroup } from '../UserDashboard/SetInactiveModal'

function AddStore({addStoreOverlay, setAddStoreOverlay}) {

    const {merchantInfo, fetchStore} = React.useContext(BackendContext);
    const mainUrl = "http://msqrmanager-integration-dev.devs.banksinarmas.com";

    const [form, setForm] = React.useState({
        store_label: '',
        nmid: '',
        ownership: '',
        store_address: '',
        store_location: '',
        province: '',
        city: '',
        kecamatan: '',
        kelurahan: '',
        postal_code: '',
        store_phone_num: '',
    })

    const [provinceList, setProvinceList] = React.useState()
    const [cityList, setCityList] = React.useState()
    const [districtList, setDistrictList] = React.useState()
    const [villageList, setVillageList] = React.useState()

    let payload = {
        merchant_id: merchantInfo?.merchant_id,
        merchant_cif: merchantInfo?.merchant_cif,
        merchant_criteria: merchantInfo?.merchant_criteria,
        nmid: form.nmid, // NMID
        ownership: form.ownership, // Ownership
        store_label: form.store_label, // Store Name
        store_phone_num: form.store_phone_num, // Store Phone Number
        store_address: form.store_address, // Address
        store_location: form.store_location, // 
        kelurahan: villageList?.filter(item => item.id === parseInt(form.kelurahan))[0]?.nama, // 
        kecamatan: districtList?.filter(item => item.id === parseInt(form.kecamatan))[0]?.nama, // District
        city: cityList?.filter(item => item.id === parseInt(form.city))[0]?.nama, // City
        province: provinceList?.filter(item => item.id === parseInt(form.province))[0]?.nama, // Province
        postal_code: "14350", // Postal Code
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
        setAddStoreOverlay(false);
        setForm({
            ...form,
            store_label: '',
            nmid: '',
            ownership: '',
            store_address: '',
            province: '',
            city: '',
            kecamatan: '',
            kelurahan: '',
            postal_code: '',
            store_phone_num: '',
        })
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
                <FormLabel htmlFor="store_label">
                    Store Name
                </FormLabel>
                <FormInput required id="store_label" name='store_label' type="text" value={form.store_label} onChange={handleChange}/>
            </FormGroup>
            <FormGroup>
                <FormLabel htmlFor="nmid">
                    NMID
                </FormLabel>
                <FormInput required id="nmid" name='nmid' type="text" value={form.nmid} onChange={handleChange}/>
            </FormGroup>
            <FormGroup>
                <FormLabel htmlFor="ownership">
                    Ownership
                </FormLabel>
                <FormInput required id="ownership" name='ownership' type="text" value={form.ownership} onChange={handleChange}/>
            </FormGroup>
            <FormGroup>
                <FormLabel htmlFor="store_address">
                    Address
                </FormLabel>
                <FormInput required id="store_address" name='store_address' placeholder="Jl. Danau Sunter Utara" type="text" value={form.store_address} onChange={handleChange}/>
            </FormGroup>
            <FormGroup>
                <FormLabel htmlFor="store_location">
                    Location
                </FormLabel>
                <FormInput required id="store_location" name='store_location' placeholder="Sunter Mall" type="text" value={form.store_location} onChange={handleChange}/>
            </FormGroup>
            <FormGroup>
                <FormLabel htmlFor="province">
                    Province
                </FormLabel>
                <FormSelect required id="province" name='province' value={form.province} onChange={handleChange}>
                    {provinceList && provinceList?.map(item => (
                        <option key={item.id} value={item.id}>{item.nama}</option>
                    ))}
                </FormSelect>
            </FormGroup>
            <FormGroup>
                <FormLabel htmlFor="city">
                    City
                </FormLabel>
                <FormSelect required id="city" name='city' value={form.city} onChange={handleChange}>
                    {cityList && cityList?.map(item => (
                        <option key={item.id} value={item.id}>{item.nama}</option>
                    ))}
                </FormSelect>
            </FormGroup>
            <FormGroup>
                <FormLabel htmlFor="kecamatan">
                    District
                </FormLabel>
                <FormSelect required id="kecamatan" name='kecamatan' value={form.kecamatan} onChange={handleChange}>
                    {districtList && districtList?.map(item => (
                        <option key={item.id} value={item.id}>{item.nama}</option>
                    ))}
                </FormSelect>
            </FormGroup>
            <FormGroup>
                <FormLabel htmlFor="kelurahan">
                    Village
                </FormLabel>
                <FormSelect required id="kelurahan" name='kelurahan' value={form.kelurahan} onChange={handleChange}>
                    {villageList && villageList?.map(item => (
                        <option key={item.id} value={item.id}>{item.nama}</option>
                    ))}
                </FormSelect>
            </FormGroup>
            <FormGroup>
                <FormLabel htmlFor="postal_code">
                    Postal Code
                </FormLabel>
                <FormInput required id="postal_code" name='postal_code' type="number" value={form.postal_code} onChange={handleChange}/>
            </FormGroup>
            <FormGroup>
                <FormLabel htmlFor="store_phone_num">
                    Store Phone Number
                </FormLabel>
                <FormInput required id="store_phone_num" name='store_phone_num' type="tel" value={form.store_phone_num} onChange={handleChange}/>
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
