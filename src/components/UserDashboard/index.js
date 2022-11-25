import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai';
import { MdSpaceDashboard } from 'react-icons/md';
import { AddButton, CashierContainer, Container, FormGroup, FormInput, HeadDesc, Title } from '../Cashier/CashierElements';
import DataTableBase from '../DataTableBase';
import { Head, HeadIcon } from '../Identity/IdentityElements';
import SectionHead from '../SectionHead';
import { SetButton } from './UserDashboardElements';

function UserDashboard({handleNavClick, setUserInactiveOverlay, setAddUserOverlay}) {

  const [searchValue, setSearchValue] = React.useState("");
  const [filteredData, setfilteredData] = React.useState([]);
  let action = {};

  const columns = [
    {
      name: 'MID',
      selector: row => row.merchant_id,
      sortable: true
    },
    {
      name: 'Merchant',
      selector: row => row.store_merchant,
      wrap: true,
      sortable: true,
      style: {
        padding: '0.5rem',
        marginLeft: '0.25rem',
      },
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
      name: 'Role',
      selector: row => row.role,
      grow: 0.9,
      sortable: true
    },
    {
      name: 'Status',
      selector: row => row.status,
      sortable: true,
      grow: 0.4,
      conditionalCellStyles: [
        {
          when: row => row.status == "active",
          style: {
            color: 'green',
            textShadow: '0px 0px 2px green'
          },
        },
        // You can also pass a callback to style for additional customization
        {
          when: row => row.status == "inactive",
          style: {
            color: 'red',
            textShadow: '0px 0px 2px red'
          },
        },
      ]
    },
    {
      name: 'Actions',
      grow: 1.1,
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
        merchant_id: "002000000000946",
        store_merchant: "DAISHOADMIN2",
        username: "admin",
        name: "Simas",
        phone: "081231290421",
        role: "superadmin",
        status: "active",
        actions: <SetButton type="button" onClick={() => setUserInactiveOverlay(true)}>Set Inactive</SetButton>,
    },
    {
        id: 2,
        merchant_id: "002000000000946",
        store_merchant: "DAISHOADMIN2",
        username: "sly02",
        name: "Sylvester",
        phone: "081231235621",
        role: "user_inputer",
        status: "active",
        actions: <SetButton type="button" onClick={() => setUserInactiveOverlay(true)}>Set Inactive</SetButton>,
    },
    {
        id: 3,
        merchant_id: "002000000000946",
        store_merchant: "DAISHOADMIN2",
        username: "alx999",
        name: "Alex",
        phone: "081232948547",
        role: "user_inputer",
        status: "inactive",
        actions: <SetButton type="button" onClick={() => setUserInactiveOverlay(true)}>Set Inactive</SetButton>,
    },
    {
        id: 4,
        merchant_id: "002000000000946",
        store_merchant: "DAISHOADMIN2",
        username: "bry112",
        name: "Bridgestone",
        phone: "081231230121",
        role: "user_inputer",
        status: "active",
        actions: <SetButton type="button" onClick={() => setUserInactiveOverlay(true)}>Set Inactive</SetButton>,
    },
  ]

  React.useEffect(() => {
    let newData = [];
    newData = data.filter(item => {
      return item.merchant_id.includes(searchValue)
       || item.store_merchant.toLowerCase().includes(searchValue.toLowerCase())
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
          <MdSpaceDashboard size={24}/>
        </HeadIcon>
        <HeadDesc>
          <Title className='popcorn'>
            User Dashboard
          </Title>
          <AddButton onClick={() => setAddUserOverlay(true)}>
            <AiOutlinePlus /> &nbsp;&nbsp;&nbsp;Add User
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

export default UserDashboard
