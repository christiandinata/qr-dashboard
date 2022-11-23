import React from 'react'
import SectionHead from '../SectionHead'
import { CashierContainer, CashierDataEntry, CashierHead, CashierRow, CashierTable, Container, EditButton, FormGroup, FormInput, HeadDesc, SearchIcon, SwitchButton, Title } from './CashierElements'
import {CashierData} from './CashierData'
import { Head, HeadIcon } from '../Identity/IdentityElements'
import {MdOutlineComputer} from 'react-icons/md'
import {AiOutlinePlus} from 'react-icons/ai'
import DataTableBase from '../DataTableBase'


function Cashier({handleNavClick}) {

  const [searchValue, setSearchValue] = React.useState("");
  const [filteredData, setfilteredData] = React.useState([]);
  let action = {};

  const columns = [
    {
      name: 'Store',
      selector: row => row.store,
      sortable: true
    },
    {
      name: 'Username',
      selector: row => row.username,
      sortable: true
    },
    {
      name: 'Name',
      selector: row => row.name,
      sortable: true
    },
    {
      name: 'Phone',
      selector: row => row.phone,
      sortable: true
    },
    {
      name: 'Status',
      selector: row => row.status,
      sortable: true,
      conditionalCellStyles: [
        {
          when: row => row.status == "Active",
          style: {
            color: 'green',
            textShadow: '0px 0px 2px green'
          },
        },
        // You can also pass a callback to style for additional customization
        {
          when: row => row.status == "Inactive",
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
        store: "Toko Daisho",
        username: "Simas01",
        name: "Simas",
        phone: "081231233421",
        status: "Active",
        actions: 
          <SwitchButton checked={action && action["Simas01"]} onChange={() => handleChange("Simas01")}/>
        ,
    },
    {
        id: 2,
        store: "Toko Dai",
        username: "Simas02",
        name: "Simas2",
        phone: "081231235621",
        status: "Active"
    },
    {
        id: 3,
        store: "Toko Isho",
        username: "Simas03",
        name: "Simas3",
        phone: "081231238547",
        status: "Inactive"
    },
    {
        id: 4,
        store: "Toko Ok",
        username: "Simas04",
        name: "Simas4",
        phone: "081231230921",
        status: "Active"
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
      return item.store.toLowerCase().includes(searchValue.toLowerCase())
       || item.username.toLowerCase().includes(searchValue.toLowerCase())
       || item.name.toLowerCase().includes(searchValue.toLowerCase())
       || item.phone.includes(searchValue)
       || item.status.toLowerCase().includes(searchValue.toLowerCase())
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
          <EditButton>
            <AiOutlinePlus /> &nbsp;&nbsp;&nbsp;Add Cashier
          </EditButton>
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
      <button>
        testCheck
      </button>
    </Container>
  )
}

export default Cashier
