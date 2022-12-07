import React from 'react'
import { BiQrScan } from 'react-icons/bi'
import { Head, HeadDesc, HeadIcon } from '../Identity/IdentityElements'
import SectionHead from '../SectionHead'
import { Button, ButtonGroup, Container, FormContainer, FormContent, FormGroup, FormInput, FormLabel, FormRadio, RadioContainer, RadioWrapper } from './ReportElements'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BackendContext } from '../../Context'
import axios from 'axios'
import {saveAs} from 'file-saver'
 
function Report({handleNavClick}) {

  const {merchantInfo} = React.useContext(BackendContext);
  const mainUrl = "http://msqrmanager-integration-dev.devs.banksinarmas.com"

  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());
  const [downloaded, setDownloaded] = React.useState(false);

  function dateConverter(date){
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    if (month < 10){
      month = "0" + month.toString();
    }

    if (day < 10){
      day = "0" + day.toString();
    }

    return year.toString()+month+day;
  }

  const [form, setForm] = React.useState({
    category: "", // qrPurchase , qrPurchaseCross , qrTTS
    startDate: dateConverter(startDate),
    endDate: dateConverter(endDate)
  })

  React.useEffect(() => {
    setForm({
      ...form,
      startDate: dateConverter(startDate),
      endDate: dateConverter(endDate),
    })
  }, [startDate, endDate])
  

  let payload = {
    category:form.category,
    merchantId: merchantInfo?.merchant_id,
    // merchantId: "Q36001534223272",
    startDate: form.startDate,
    endDate: form.endDate
}

  function handleChange(e){
    const {name, value} = e.target;
    setForm({
      ...form,
      [name]: value
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    let url = `${mainUrl}/report/generate`

    axios.post(url, payload)
    .then(res => {
      const filename = `${form.startDate}-${form.endDate}_${form.category}.csv`
      const blob = new Blob([res.data])
      saveAs(blob, filename);
      setDownloaded(true);
    })
    .catch(err => {
      console.log(err);
    })
  }

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setDownloaded(false)
    }, 4000);
    return () => clearTimeout(timer);
  }, [downloaded])
  

  console.log(startDate,endDate,payload)

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
              <FormInput type="radio" id="lokal" name="category" value="qrPurchase" onChange={handleChange}/>
              <FormLabel htmlFor="lokal">
                QRIS Payment Lokal (MPM dan CPM)
              </FormLabel>
            </RadioWrapper>
            <RadioWrapper>
              <FormInput type="radio" id="tariksetor" name="category" value="qrTTS" onChange={handleChange}/>
              <FormLabel htmlFor="tariksetor">
                QRIS Tarik dan Setor
              </FormLabel>
            </RadioWrapper>
            <RadioWrapper>
              <FormInput type="radio" id="crossborder" name="category" value="qrPurchaseCross" onChange={handleChange}/>
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
          {downloaded 
          ? 
          <p>Downloaded</p>
          :
          <Button type="button" onClick={handleSubmit}>
            Download
          </Button>
          }
          
        </ButtonGroup>
      </FormContainer>
    </Container>
  )
}

export default Report