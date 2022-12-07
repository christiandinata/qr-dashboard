import React from 'react'
import { AiFillEye, AiOutlinePlus } from 'react-icons/ai'
import { AddButton, Container, FormGroup, FormInput, HeadDesc, Title } from '../Cashier/CashierElements'
import { Head, HeadIcon } from '../Identity/IdentityElements'
import SectionHead from '../SectionHead'
import DataTableBase from '../DataTableBase'
import { ButtonGroup, GreenButton, RedButton, StoreContainer, EditButton } from './StoreElements'
import { FaStore } from 'react-icons/fa'
import { BackendContext } from '../../Context'
import Loading from '../Loading'
import {TiEdit} from 'react-icons/ti'

function Store({
  handleNavClick, setAddStoreOverlay, cicoPayload, 
  setCicoPayload, setCicoOverlay, loading, storeActivationPan, 
  setStoreActivationPan, setStoreActivationOverlay, setActivationType, activationType,
  setEditStoreOverlay
}) {

  const {storeData} = React.useContext(BackendContext);

  const [modifiedData, setModifiedData] = React.useState()
  const [searchValue, setSearchValue] = React.useState("");
  const [filteredData, setfilteredData] = React.useState([]);

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
      name: 'Store PAN',
      selector: row => row.pan,
      width: "170px",
      sortable: true,
    },
    {
      name: 'Store Name',
      selector: row => row.store_label,
      sortable: true,
      wrap: true,
      style: {
        padding: '0.5rem',
        marginLeft: '0.25rem',
      },
      width: "120px",
    },
    {
      name: 'City',
      wrap: true,
      selector: row => row.city,
      sortable: true,
      grow: 0.7,
    },
    {
      name: 'Phone',
      selector: row => row.store_phone_num,
      grow: 0.7,
      sortable: true,
    },
    {
      name: 'Status',
      selector: row => row.store_status,
      sortable: true,
      grow: 0.4,
      conditionalCellStyles: [
        {
          when: row => row.store_status === "active",
          style: {
            color: 'green',
            textShadow: '0px 0px 2px green'
          },
        },
        // You can also pass a callback to style for additional customization
        {
          when: row => row.store_status === "inactive",
          style: {
            color: 'red',
            textShadow: '0px 0px 2px red'
          },
        },
      ]
    },
    {
      name: 'Actions',
      selector: row => row.action,
      grow: 1.9,
    }
  ];

  function handleCico(pan, cashIn, cashOut){
    setCicoOverlay(true);
    setCicoPayload({
      ...cicoPayload,
      pan: pan,
      cashIn: cashIn === "1" ? true : false, 
      cashOut: cashOut === "1" ? true : false,
    });
  }

  function handleButton(pan, name){
    setStoreActivationOverlay(true)
    setActivationType({
      ...activationType,
      [name]: true,
    })
    setStoreActivationPan(pan)
  }

  function handleEdit(pan){
    setEditStoreOverlay(true);
    setCicoPayload({
      ...cicoPayload,
      pan: pan,
    })
  }

  // add action property to the received data
  React.useEffect(() => {
    let tempData = storeData?.map(item => ({...item, 
      action: 
        <ButtonGroup>
          {item.cashin_flag === "1" && item.cashout_flag === "1" && 
            <GreenButton type="button" onClick={() => handleCico(item.pan, item.cashin_flag, item.cashout_flag)}>Cashin / Cashout</GreenButton>
          }
          {item.cashin_flag === "1" && item.cashout_flag === "0" &&
            <GreenButton type="button" onClick={() => handleCico(item.pan, item.cashin_flag, item.cashout_flag)}>Cashin</GreenButton>
          }
          {item.cashin_flag === "0" && item.cashout_flag === "1" &&
            <GreenButton type="button" onClick={() => handleCico(item.pan, item.cashin_flag, item.cashout_flag)}>Cashout</GreenButton>
          }
          {item.cashin_flag === "0" && item.cashout_flag === "0" &&
            <RedButton type="button" onClick={() => handleCico(item.pan, item.cashin_flag, item.cashout_flag)}>Cashin / Cashout</RedButton>
          }
          {item.store_status === "active" &&
            <RedButton onClick={() => handleButton(item.pan, "deactivate")}>Deactivate</RedButton> 
          }
          {item.store_status === "inactive" && 
            <GreenButton onClick={() => handleButton(item.pan, "activate")}>Activate</GreenButton>
          }
        </ButtonGroup>,
      edit:
          <EditButton onClick={() => handleEdit(item.pan)}>
            <TiEdit size="24" />
          </EditButton>
    }));
    setModifiedData(tempData);
  }, [storeData, cicoPayload.cashIn, cicoPayload.cashout])

  // search function
  React.useEffect(() => {
    let newData = [];
    newData = modifiedData?.filter(item => {
      return item.pan.includes(searchValue)
       || item.store_label.toLowerCase().includes(searchValue.toLowerCase())
       || item.city.toLowerCase().includes(searchValue.toLowerCase())
       || item.store_phone_num.includes(searchValue)
       || item.store_status.toLowerCase().includes(searchValue.toLowerCase())
    })
    setfilteredData(newData)
  }, [searchValue])

  if (!storeData || loading) return <Loading />

  console.log(modifiedData)

  return (
    <Container>
      <SectionHead handleNavClick={handleNavClick}/>
      <Head>
        <HeadIcon>
          <FaStore size={24}/>
        </HeadIcon>
        <HeadDesc>
          <Title className='popcorn'>
            Store List
          </Title>
          <AddButton onClick={() => setAddStoreOverlay(true)}>
            <AiOutlinePlus /> &nbsp;&nbsp;&nbsp;Add Store
          </AddButton>
        </HeadDesc>
      </Head>
      <StoreContainer>
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
      </StoreContainer>
    </Container>
  )
}

export default Store
