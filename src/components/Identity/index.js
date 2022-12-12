import React from 'react'
import {Button, ButtonGroup, Container, FormContainer, FormGroup, FormInput, FormLabel, Head, HeadDesc, HeadIcon, TextArea } from './IdentityElements'
import {BiUser} from 'react-icons/bi'
import SectionHead from '../SectionHead'
import { BackendContext } from '../../Context'
import Loading from '../Loading'
import axios from 'axios'

function Identity({handleNavClick}) {

  const {merchantInfo} = React.useContext(BackendContext);
  const mainUrl = "http://msqrmanager-integration-dev.devs.banksinarmas.com";

  const [form, setForm] = React.useState({
    mid: '',
    name: '',
    address: '',
    phone: '',
    email: '',
    account_number: ''
  })

  let payload = {
    merchant_id:  form.mid,
    merchant_account_num: form.account_number,
    merchant_phone: form.phone,
    merchant_email: form.email,
    merchant_address: form.address,
    merchant_kelurahan: merchantInfo?.merchant_kelurahan,
    merchant_kecamatan: merchantInfo?.merchant_kecamatan,
    merchant_city: merchantInfo?.merchant_city,
    merchant_province: merchantInfo?.merchant_province,
    merchant_postal_code: merchantInfo?.merchant_postal_code,
    lang: "id"
  }

  React.useEffect(() => {
    setForm({
      ...form,
      mid: merchantInfo?.merchant_id,
      name: merchantInfo?.merchant_name,
      address: merchantInfo?.merchant_address,
      phone: merchantInfo?.merchant_phone,
      email: merchantInfo?.merchant_email,
      account_number: merchantInfo?.merchant_account_num,
    })
  }, [merchantInfo])
  
  
  const [editMode, setEditMode] = React.useState(false);

  function handleChange(e){
    const {name, value} = e.target;

    setForm({
      ...form,
      [name]: value
    })
  }

  function handleCancel(){
    setEditMode(false)
    setForm({
      ...form,
      mid: merchantInfo?.merchant_id,
      name: merchantInfo?.merchant_name,
      address: merchantInfo?.merchant_address,
      phone: merchantInfo?.merchant_phone,
      email: merchantInfo?.merchant_email,
      account_number: merchantInfo?.merchant_account_num,
    })
  }

  function handleSubmit(e){
    e.preventDefault();

    let url = `${mainUrl}/qrmd/editMerchantRequest`

    axios.post(url, payload)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })

  }

  console.log(payload)

  if (!merchantInfo) return <Loading />

  return (
    <Container>
      <SectionHead handleNavClick={handleNavClick}/>
      <Head>
        <HeadIcon>
          <BiUser size={24}/>
        </HeadIcon>
        <HeadDesc>
          Merchant Info
        </HeadDesc>
      </Head>
      <FormContainer>
        <FormGroup>
          <FormLabel htmlFor="mid">
            Merchant ID
          </FormLabel>
          <FormInput required type="number" id="mid" name="mid" value={form.mid} disabled="disabled"/>
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="name">
            Merchant Name
          </FormLabel>
          <FormInput required type="text" id="name" name="name" value={form.name} {...(!editMode && {disabled: true})}/>
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="address">
            Merchant Address
          </FormLabel>
          <TextArea
            required 
            type="text" 
            id="address" 
            name="address"
            value={form.address}
            onChange={handleChange}
            editing={editMode}
            {...(editMode ? { disabled: false } : {disabled: true})}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="phone">
            Merchant Phone
          </FormLabel>
          <FormInput 
            required 
            type="tel" 
            id="phone" 
            name="phone"
            value={form.phone} 
            {...(editMode ? { disabled: false } : {disabled: true})} 
            editing={editMode}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="email">
            Merchant Email
          </FormLabel>
          <FormInput 
            required 
            type="email" 
            id="email" 
            name="email"
            value={form.email} 
            {...(editMode ? { disabled: false } : {disabled: true})} 
            editing={editMode}
            onChange={(e) => handleChange(e)}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="account_number">
            Account Number
          </FormLabel>
          <FormInput 
            required 
            type="number" 
            id="account_number" 
            name="account_number"
            value={form.account_number} 
            {...(editMode ? { disabled: false } : {disabled: true})}
            onChange={handleChange}
            editing={editMode}
          />
        </FormGroup>
        <ButtonGroup>
          {editMode ? 
            <>
              <Button type="button" onClick={handleCancel} cancel="true">
                Cancel
              </Button>
              <Button type="button" onClick={handleSubmit}>
                Save
              </Button>
            </>
            :
            <Button type="button" onClick={() => setEditMode(true)}>
              Edit
            </Button>
          }
        </ButtonGroup>
      </FormContainer>
    </Container>
  )
}

export default Identity
