import React from 'react'
import SectionHead from '../SectionHead'
import axios from 'axios'
import { CashierContainer, Container, AddButton, FormGroup, FormInput, HeadDesc, Title, ResetButton } from './CashierElements'
import { ButtonGroup, EditButton } from '../Store/StoreElements'
import { Head, HeadIcon } from '../Identity/IdentityElements'
import {MdOutlineComputer} from 'react-icons/md'
import {AiOutlinePlus} from 'react-icons/ai'
import DataTableBase from '../DataTableBase'
import { BackendContext } from '../../Context'
import Loading from '../Loading'
import { GreenButton, RedButton } from '../Store/StoreElements'
import { TiEdit } from 'react-icons/ti'


function Cashier({
  handleNavClick, setAddCashierOverlay, setActivationOverlay, 
  activationType, setActivationType, activationPayload, setActivationPayload,
  setEditCashierOverlay, setResetPasswordSuccessOverlay
}) {

  const {cashierData} = React.useContext(BackendContext);
  const mainUrl = 'http://msqrmanager-integration-dev.devs.banksinarmas.com'

  const [searchValue, setSearchValue] = React.useState("");
  const [filteredData, setFilteredData] = React.useState([]);
  const [modifiedData, setModifiedData] = React.useState();

  const columns = [
    {
      name: '',
      selector: row => row.edit,
      width: '36px',
      style: {
        padding: '0',
        justifyContent: 'center',
      }
    },
    {
      name: 'Store',
      selector: row => row.mpan_store_label,
      sortable: true
    },
    {
      name: 'Username',
      selector: row => row.username,
      sortable: true,
      width: "140px",
      wrap: true,
      style: {
        padding: '0.5rem',
        marginLeft: '0.25rem',
      },
    },
    {
      name: 'Name',
      selector: row => row.merchant_pan_name,
      sortable: true,
      width: "120px",
    },
    {
      name: 'Phone',
      selector: row => row.mobile_number,
      sortable: true
    },
    {
      name: 'Status',
      selector: row => row.user_status,
      sortable: true,
      conditionalCellStyles: [
        {
          when: row => row.user_status === "active",
          style: {
            color: 'green',
            textShadow: '0px 0px 2px green'
          },
        },
        // You can also pass a callback to style for additional customization
        {
          when: row => row.user_status === "inactive",
          style: {
            color: 'red',
            textShadow: '0px 0px 2px red'
          },
        },
      ]
    },
    {
      name: 'Action',
      selector: row => row.action,

    }
  ];

  function handleActivation(pan, merchantPanName, terminalId, name){
    setActivationOverlay(true)
    setActivationType({
      ...activationType,
      [name]: true,
    })
    setActivationPayload({
      ...activationPayload,
      pan: pan,
      merchant_pan_name: merchantPanName,
      terminal_id: terminalId
    })
  }

  function handleReset(merchant_id, pan, username){

    let url = `${mainUrl}/qrmd/resetPasswordCashier`

    let payload = {
      merchant_id: merchant_id,
      pan: pan,
      username: username,
      lang: "id"
    }

    axios.post(url, payload)
    .then(res => {
      console.log(res)
      setResetPasswordSuccessOverlay(true)
    })
    .catch(err => {
      console.log(err)
    })
  }

  function handleEdit(pan, merchantPanName, terminalId){
    setEditCashierOverlay(true);
    setActivationPayload({
      ...activationPayload,
      pan: pan,
      merchant_pan_name: merchantPanName,
      terminal_id: terminalId
    })
  }

  // add action property to the received data
  React.useEffect(() => {
    let tempData = cashierData?.map(item => ({...item, action: 
      item.user_status === "active" ?
        <ButtonGroup>
          <RedButton onClick={() => handleActivation(item.pan, item.merchant_pan_name, item.terminal_id, "deactivate")}>Deactivate</RedButton>
          <ResetButton type="button" onClick={() => handleReset(item.merchant_id, item.pan, item.username)}>Reset Password</ResetButton>
        </ButtonGroup>
        
      :
        <ButtonGroup>
          <GreenButton onClick={() => handleActivation(item.pan, item.merchant_pan_name, item.terminal_id, "activate")}>Activate</GreenButton>
          <ResetButton type="button" onClick={() => handleReset(item.merchant_id, item.pan, item.username)}>Reset Password</ResetButton>
        </ButtonGroup>
        
    ,
    edit:
    <EditButton onClick={() => handleEdit(item.pan, item.merchant_pan_name, item.terminal_id)}>
      <TiEdit size="24" />
    </EditButton>

  }));
    setModifiedData(tempData);
  }, [])

  React.useEffect(() => {
    let tempData = cashierData?.map(item => ({...item, action: 
      item.user_status === "active" ?
      <ButtonGroup>
        <RedButton onClick={() => handleActivation(item.pan, item.merchant_pan_name, item.terminal_id, "deactivate")}>Deactivate</RedButton>
        <ResetButton type="button" onClick={() => handleReset(item.merchant_id, item.pan, item.username)}>Reset Password</ResetButton>
      </ButtonGroup>
    :
      <ButtonGroup>
        <GreenButton onClick={() => handleActivation(item.pan, item.merchant_pan_name, item.terminal_id, "activate")}>Activate</GreenButton>
        <ResetButton type="button" onClick={() => handleReset(item.merchant_id, item.pan, item.username)}>Reset Password</ResetButton>
      </ButtonGroup>
      ,
      edit:
          <EditButton onClick={() => handleEdit(item.pan, item.merchant_pan_name, item.terminal_id)}>
            <TiEdit size="24" />
          </EditButton>
  }));
    setModifiedData(tempData);
  }, [cashierData])


  // search function
  React.useEffect(() => {
    let newData = [];
    newData = modifiedData?.filter(item => {
      return item.mpan_store_label?.toLowerCase().includes(searchValue.toLowerCase())
       || item.username?.toLowerCase().includes(searchValue.toLowerCase())
       || item.merchant_pan_name?.toLowerCase().includes(searchValue.toLowerCase())
       || item.mpan_store_phone_num?.includes(searchValue)
       || item.user_status?.toLowerCase().includes(searchValue.toLowerCase())
    })
    setFilteredData(newData)
  }, [searchValue])

  // if (!cashierData) return <Loading />

  return (
    <Container>
      <SectionHead handleNavClick={handleNavClick}/>
      <Head>
        <HeadIcon>
          <MdOutlineComputer size={24}/>
        </HeadIcon>
        <HeadDesc>
          <Title className='popcorn'>
            Cashier List
          </Title>
          <AddButton onClick={() => setAddCashierOverlay(true)}>
            <AiOutlinePlus /> &nbsp;&nbsp;&nbsp;Add Cashier
          </AddButton>
        </HeadDesc>
      </Head>
      <CashierContainer>
        <FormGroup>
          <FormInput 
            type="search" 
            name="search"
            placeholder="Search" 
            value={searchValue} 
            onChange={(e) => setSearchValue(e.target.value)}/>
        </FormGroup>
        <DataTableBase 
          columns={columns} 
          data={filteredData ? filteredData : modifiedData} 
          highlightOnHover
        />
      </CashierContainer>
      {/* <button onClick={handleTestEvent}>test Event</button> */}
    </Container>
  )
}

export default Cashier
