import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { MdOutlineComputer } from 'react-icons/md'
import { CashierContainer, Container, EditButton, FormGroup, FormInput, HeadDesc, Title } from '../Cashier/CashierElements'
import { Head, HeadIcon } from '../Identity/IdentityElements'
import SectionHead from '../SectionHead'
import DataTableBase from '../DataTableBase'

function Store() {

  const [searchValue, setSearchValue] = React.useState("")
  const [filteredData, setfilteredData] = React.useState([])

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
      sortable: true
    },
  ];

  let data = [
    {
        id: 1,
        store: "Toko Daisho",
        username: "Simas01",
        name: "Simas",
        phone: "081231233421",
        status: "Active"
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
      <SectionHead />
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
        <DataTableBase columns={columns} data={filteredData}/>
      </CashierContainer>
    </Container>
  )
}

export default Store
