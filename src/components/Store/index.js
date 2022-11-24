import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { MdOutlineComputer } from 'react-icons/md'
import { AddButton, CashierContainer, Container, EditButton, FormGroup, FormInput, HeadDesc, Title } from '../Cashier/CashierElements'
import { Head, HeadIcon } from '../Identity/IdentityElements'
import SectionHead from '../SectionHead'
import DataTableBase from '../DataTableBase'
import { ButtonGroup } from './StoreElements'

function Store({handleNavClick}) {

  const [searchValue, setSearchValue] = React.useState("");
  const [filteredData, setfilteredData] = React.useState([]);
  let action = {};

  const columns = [
    {
      name: 'Store PAN',
      selector: row => row.pan,
      allowOverflow: true,
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
      grow: 0.8,
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
      selector: row => row.actions,
      grow: 1.8,
    }
  ];

  function handleChange(name){
    if (action[name] == "false"){
      action[name] = "true";
    }else{
      action[name] = "false"
    }
    console.log(action)
  }

  let data = [
    {
        id: 1,
        pan: "9360015302265615155",
        store_label: "TEST Store NCS 1",
        city: "Jakarta Utara",
        store_phone_num: "082113579845",
        store_status: "active",
        actions: 
          <ButtonGroup>
            <EditButton type="button">Cashin / Cashout</EditButton>
            <EditButton type="button">Close Store</EditButton>
          </ButtonGroup>,
    },
    {
        id: 1,
        pan: "9360015302265615163",
        store_label: "TEST Store NCS 2",
        city: "Jakarta Utara",
        store_phone_num: "082113579359",
        store_status: "active",
        actions: 
        <ButtonGroup>
          <EditButton type="button">Cashin / Cashout</EditButton>
          <EditButton type="button">Close Store</EditButton>
        </ButtonGroup>,
    },
    {
        id: 1,
        pan: "9360015302265234155",
        store_label: "TEST Store NCS 3",
        city: "Jakarta Selatan",
        store_phone_num: "082113192845",
        store_status: "active",
        actions:
        <ButtonGroup>
          <EditButton type="button">Cashin / Cashout</EditButton>
          <EditButton type="button">Close Store</EditButton>
        </ButtonGroup>,
    },
    {
        id: 1,
        pan: "9369301302265615155",
        store_label: "TEST Store NCS 4",
        city: "Jakarta Pusat",
        store_phone_num: "082113829845",
        store_status: "inactive",
        actions: 
        <ButtonGroup>
          <EditButton type="button">Cashin / Cashout</EditButton>
          <EditButton type="button">Close Store</EditButton>
        </ButtonGroup>,
    },
  ]

  React.useEffect(() => {
    data.map(item => {
      action[item.username] = "true"
    })
    console.log(action["Simas01"]);
  }, [])

  console.log("ini diluar useeffect", action && action["Simas01"])

  React.useEffect(() => {
    let newData = [];
    newData = data.filter(item => {
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
          <MdOutlineComputer size={24}/>
        </HeadIcon>
        <HeadDesc>
          <Title className='popcorn'>
            Cashier List
          </Title>
          <AddButton>
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
          data={filteredData} 
          highlightOnHover
        />
      </CashierContainer>
    </Container>
  )
}

export default Store
