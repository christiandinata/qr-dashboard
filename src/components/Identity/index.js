import React from 'react'
import {Button, ButtonGroup, CashierDataEntry, CashierHead, CashierList, CashierRow, CashierTable, Container, FormContainer, FormGroup, FormInput, FormLabel, FormOption, FormSelect, Head, HeadDesc, HeadIcon, TextArea } from './IdentityElements'
import {BiUser} from 'react-icons/bi'
import {CashierData} from '../Cashier/CashierData'

function Identity() {

  const kriteria = [
    "super", 
    "super", 
    "super", 
    "super"
  ]

  return (
    <Container>
      <Head>
        <HeadIcon>
          <BiUser size={24}/>
        </HeadIcon>
        <HeadDesc>
          Identitas Merchant
        </HeadDesc>
      </Head>
      <FormContainer>
        <FormGroup>
          <FormLabel for="name">
            Nama Merchant
          </FormLabel>
          <FormInput required type="text" id="name" value="Merchant Menantea" disabled="disabled"/>
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
          <FormInput required type="number" id="notelp" value="0231-847314" disabled="disabled"/>
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
        <FormGroup>
          <FormLabel for="namastore">
            Nama Store
          </FormLabel>
          <FormInput type="text" id="namastore" value="Menantea Kebon Jeruk" disabled="disabled"/>
        </FormGroup>
        <FormGroup>
          <FormLabel for="mpan">
            MPAN
          </FormLabel>
          <FormInput type="text" id="mpan" value="M002" disabled="disabled"/>
        </FormGroup>
        <FormGroup>
          <FormLabel for="nmid">
            NMID
          </FormLabel>
          <FormInput type="text" id="nmid" value="MD002" disabled="disabled"/>
        </FormGroup>
        <FormGroup>
          <FormLabel for="alamatstore">
            Alamat Store
          </FormLabel>
          <TextArea
            required 
            type="text" 
            id="alamatstore" 
            value="Jalan Raya Tomang raya no 76, 
            Lt 10 (Gedung ABC)" 
            disabled="disabled"
          />
        </FormGroup>
        <CashierList>
          List Kasir
          <CashierTable>
            <CashierRow>
              <CashierHead>
                Cashier Name
              </CashierHead>
              <CashierHead>
                Mobile Phone
              </CashierHead>
              <CashierHead>
                Username
              </CashierHead>
              <CashierHead>
                Terminal ID
              </CashierHead>
              <CashierHead>
                User Status
              </CashierHead>
            </CashierRow>
            {CashierData.map((item, idx) => (
              <CashierRow>
                <CashierDataEntry>
                  {item.name}
                </CashierDataEntry>
                <CashierDataEntry>
                  {item.mobile}
                </CashierDataEntry>
                <CashierDataEntry>
                  {item.username}
                </CashierDataEntry>
                <CashierDataEntry>
                  {item.terminalId}
                </CashierDataEntry>
                <CashierDataEntry>
                  {item.userStatus}
                </CashierDataEntry>
              </CashierRow>
            ))}
          </CashierTable>
        </CashierList>
        <ButtonGroup>
          <Button>
            Update
          </Button>
          <Button>
            Ok
          </Button>
        </ButtonGroup>
      </FormContainer>
    </Container>
  )
}

export default Identity
