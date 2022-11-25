import React from 'react'
import {Button, ButtonGroup, CashierDataEntry, CashierHead, CashierList, CashierRow, CashierTable, Container, FormContainer, FormGroup, FormInput, FormLabel, FormOption, FormSelect, Head, HeadDesc, HeadIcon, TextArea } from './IdentityElements'
import {BiUser} from 'react-icons/bi'
import {CashierData} from '../Cashier/CashierData'
import SectionHead from '../SectionHead'

function Identity({handleNavClick}) {

  const kriteria = [
    "super", 
    "super", 
    "super", 
    "super"
  ]
  
  const [editMode, setEditMode] = React.useState(false);

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
          <FormLabel for="name">
            Nama Merchant
          </FormLabel>
          <FormInput required type="text" id="name" value="Merchant Menantea" {...(!editMode && {disabled: true})}/>
        </FormGroup>
        <FormGroup>
          <FormLabel for="mid">
            MID
          </FormLabel>
          <FormInput required type="number" id="mid" value="987654321" disabled="disabled"/>
        </FormGroup>
        <FormGroup>
          <FormLabel for="kriteria">
            Kriteria Merchant
          </FormLabel>
          <FormSelect value={kriteria[0]}>
            {kriteria.map((item, key) => {
              return (
                <FormOption key={key} value={item}>{item}</FormOption>
              )
            })}
          </FormSelect>
        </FormGroup>
        <FormGroup>
          <FormLabel for="norek">
            No Rekening
          </FormLabel>
          <FormInput required type="number" id="norek" value="5842912312" disabled="disabled"/>
        </FormGroup>
        <FormGroup>
          <FormLabel for="notelp">
            No Telpon
          </FormLabel>
          <FormInput required type="tel" id="notelp" value="0231-847314" disabled="disabled"/>
        </FormGroup>
        <FormGroup>
          <FormLabel for="email">
            Email Merchant
          </FormLabel>
          <FormInput required type="email" id="email" value="Menantea@gmail.com" disabled="disabled"/>
        </FormGroup>
        <FormGroup>
          <FormLabel for="alamat">
            Alamat Merchant
          </FormLabel>
          <TextArea
            required 
            type="text" 
            id="alamat" 
            value="Jalan Raya Tomang raya no 76, Lt 10 (Gedung ABC)" 
            disabled
          />
        </FormGroup>
        <ButtonGroup>
          {editMode ? 
            <Button type="button" onClick={handleSubmit}>
              Save
            </Button>
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
