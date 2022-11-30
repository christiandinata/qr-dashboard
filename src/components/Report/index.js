import React from 'react'
import { BiQrScan } from 'react-icons/bi'
import { Head, HeadDesc, HeadIcon } from '../Identity/IdentityElements'
import SectionHead from '../SectionHead'
import { Button, ButtonGroup, Container, FormContainer, FormContent, FormGroup, FormInput, FormLabel, FormRadio, RadioContainer, RadioWrapper } from './ReportElements'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Report({handleNavClick}) {

  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());

  const [form, setForm] = React.useState({
    qrisType: "",
    startDate: startDate,
    endDate: endDate
  })

  function handleChange(e){
    const {name, value} = e.target;
    setForm({
      ...form,
      [name]: value
    })
  }

  return (
    <Container>
      <SectionHead handleNavClick={handleNavClick}/>
      <Head>
        <HeadIcon>
          <BiQrScan size={24}/>
        </HeadIcon>
        <HeadDesc>
          Report QRIS
        </HeadDesc>
      </Head>
      <FormContainer>
        <RadioContainer>
          <FormRadio>
          {/* 3 radio buttons */}
            <RadioWrapper>
              <FormInput type="radio" id="lokal" name="qrisType" value="lokal" onChange={handleChange}/>
              <FormLabel htmlFor="lokal">
                QRIS Payment Lokal (MPM dan CPM)
              </FormLabel>
            </RadioWrapper>
            <RadioWrapper>
              <FormInput type="radio" id="tariksetor" name="qrisType" value="tariksetor" onChange={handleChange}/>
              <FormLabel htmlFor="tariksetor">
                QRIS Tarik dan Setor
              </FormLabel>
            </RadioWrapper>
            <RadioWrapper>
              <FormInput type="radio" id="crossborder" name="qrisType" value="crossborder" onChange={handleChange}/>
              <FormLabel htmlFor="crossborder">
                QRIS Cross Border
              </FormLabel>
            </RadioWrapper>
          </FormRadio>
        </RadioContainer>
        <FormContent>
          <FormGroup>
            <FormLabel>
              From:
            </FormLabel>
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
          </FormGroup>
          <p>-</p>
          <FormGroup>
            <FormLabel>
              To:
            </FormLabel>
            <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
          </FormGroup>
        </FormContent>
        <ButtonGroup>
          <Button type="button">
            Download
          </Button>
        </ButtonGroup>
      </FormContainer>
    </Container>
  )
}

export default Report