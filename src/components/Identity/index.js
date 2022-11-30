import React from 'react'
import {Button, ButtonGroup, Container, FormContainer, FormGroup, FormInput, FormLabel, Head, HeadDesc, HeadIcon, TextArea } from './IdentityElements'
import {BiUser} from 'react-icons/bi'
import SectionHead from '../SectionHead'
import { BackendContext } from '../../Context'

function Identity({handleNavClick}) {

  const {merchantInfo} = React.useContext(BackendContext);

  const [form, setForm] = React.useState({
    mid: merchantInfo?.merchant_id,
    name: merchantInfo?.merchant_name,
    address: merchantInfo?.merchant_address,
    phone: merchantInfo?.merchant_phone,
    email: merchantInfo?.merchant_email,
    account_number: merchantInfo?.merchant_account_num,
  })
  
  const [editMode, setEditMode] = React.useState(false);

  function handleChange(e){
    const {name, value} = e.target;

    setForm({
      ...form,
      [name]: value
    })
    
  }

  function handleSubmit(e){
    e.preventDefault();
  }

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
              <Button type="button" onClick={() => setEditMode(false)} cancel="true">
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
