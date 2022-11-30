import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { AddButton, Container, EditButton, FormGroup, FormInput, HeadDesc, Title } from '../Cashier/CashierElements'
import { Head, HeadIcon } from '../Identity/IdentityElements'
import SectionHead from '../SectionHead'
import DataTableBase from '../DataTableBase'
import { ButtonGroup, StoreContainer } from './StoreElements'
import { FaStore } from 'react-icons/fa'
import { BackendContext } from '../../Context'

function Store({handleNavClick, setAddStoreOverlay}) {

  const {storeData} = React.useContext(BackendContext);

  const [modifiedData, setModifiedData] = React.useState()
  const [searchValue, setSearchValue] = React.useState("");
  const [filteredData, setfilteredData] = React.useState([]);

  const columns = [
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
          when: row => row.store_status == "active",
          style: {
            color: 'green',
            textShadow: '0px 0px 2px green'
          },
        },
        // You can also pass a callback to style for additional customization
        {
          when: row => row.store_status == "inactive",
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

  function handleEdit(name){
    console.log(name);
  }

  // add action property to the received data
  React.useEffect(() => {
    let tempData = storeData.map(item => ({...item, 
      action: 
        <ButtonGroup>
          <EditButton type="button">Cashin / Cashout</EditButton>
          <EditButton type="button">Close Store</EditButton>
        </ButtonGroup>
    }));
    setModifiedData(tempData);
  }, [])

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
