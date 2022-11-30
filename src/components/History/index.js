import React from 'react'
import { BiExport } from 'react-icons/bi'
import { FaHistory } from 'react-icons/fa'
import { FormGroup, FormInput } from '../Cashier/CashierElements'
import DataTableBase from '../DataTableBase'
import { Head, HeadIcon } from '../Identity/IdentityElements'
import SectionHead from '../SectionHead'
import { AddButton, Container, HeadDesc, HistoryContainer, Title } from './HistoryElements'

function History({handleNavClick}) {

  const [searchValue, setSearchValue] = React.useState("");
  const [filteredData, setfilteredData] = React.useState([]);
  let action = {};

  const columns = [
    {
      name: 'Date Time',
      selector: row => row.date_time,
      sortable: true,
      width: "150px",
    },
    {
      name: 'MID',
      selector: row => row.mid,
      sortable: true,
      grow: 1.5,
      width: "150px",
    },
    {
      name: 'Merchant',
      selector: row => row.name,
      sortable: true,
      width: "120px",
    },
    {
      name: 'User',
      selector: row => row.user,
      sortable: true,
      grow: 0.5,
    },
    {
      name: 'Role',
      selector: row => row.role,
      sortable: true,
      grow: 0.5,
    },
    {
      name: 'Reference',
      selector: row => row.ref,
      sortable: true
    },
    {
      name: 'Action',
      sortable: true,
      selector: row => row.action,
    },
    {
      name: 'Status',
      selector: row => row.status,
      sortable: true,
      grow: 0.5,
      conditionalCellStyles: [
        {
          when: row => row.status == "success",
          style: {
            color: 'green',
            textShadow: '0px 0px 2px green'
          },
        },
        // You can also pass a callback to style for additional customization
        {
          when: row => row.status == "failed",
          style: {
            color: 'red',
            textShadow: '0px 0px 2px red'
          },
        },
      ]
    },
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
        date_time: "2022-11-22 10:03:25",
        mid: "02000000000946",
        name: "Merchant ??",
        user: "admin",
        role: "superadmin",
        ref: "",
        actions: "LOGIN",
        status: "success",
    },
    {
        id: 2,
        date_time: "2022-11-22 10:03:25",
        mid: "02000000000946",
        name: "Merchant ??",
        user: "admin",
        role: "superadmin",
        ref: "",
        actions: "LOGIN",
        status: "success",
    },
    {
        id: 3,
        date_time: "2022-11-22 10:03:25",
        mid: "02000000000946",
        name: "Merchant ??",
        user: "admin",
        role: "superadmin",
        ref: "",
        actions: "LOGIN",
        status: "success",
    },
    {
        id: 4,
        date_time: "2022-11-22 10:03:25",
        mid: "02000000000946",
        name: "Merchant ??",
        user: "admin",
        role: "superadmin",
        ref: "",
        actions: "LOGIN",
        status: "success",
    },
  ]

  React.useEffect(() => {
    data.map(item => {
      action[item.username] = "true"
    })
    console.log(action["Simas01"]);
  }, [])

  React.useEffect(() => {
    let newData = [];
    newData = data.filter(item => {
      return item.date_time.includes(searchValue)
       || item.mid.includes(searchValue)
       || item.name.toLowerCase().includes(searchValue.toLowerCase())
       || item.user.toLowerCase().includes(searchValue.toLowerCase())
       || item.role.toLowerCase().includes(searchValue.toLowerCase())
       || item.action.toLowerCase().includes(searchValue.toLowerCase())
    })
    setfilteredData(newData)
  }, [searchValue])

  return (
    <Container>
      <SectionHead handleNavClick={handleNavClick}/>
      <Head>
        <HeadIcon>
          <FaHistory size={24}/>
        </HeadIcon>
        <HeadDesc>
          <Title className='popcorn'>
            History
          </Title>
          <AddButton>
            <BiExport /> &nbsp;&nbsp;&nbsp;Export File
          </AddButton>
        </HeadDesc>
      </Head>
      <HistoryContainer>
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
      </HistoryContainer>
    </Container>
  )
}

export default History
