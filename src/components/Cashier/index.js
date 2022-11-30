import React from 'react'
import SectionHead from '../SectionHead'
import { CashierContainer, Container, AddButton, FormGroup, FormInput, HeadDesc, Title, EditButton } from './CashierElements'
import { Head, HeadIcon } from '../Identity/IdentityElements'
import {MdOutlineComputer} from 'react-icons/md'
import {AiOutlinePlus} from 'react-icons/ai'
import DataTableBase from '../DataTableBase'
import { BackendContext } from '../../Context'


function Cashier({handleNavClick, setAddCashierOverlay}) {

  const {cashierData} = React.useContext(BackendContext);

  const [searchValue, setSearchValue] = React.useState("");
  const [filteredData, setFilteredData] = React.useState([]);
  const [modifiedData, setModifiedData] = React.useState()

  const columns = [
    {
      name: 'Store',
      selector: row => row.mpan_store_label,
      sortable: true
    },
    {
      name: 'Username',
      selector: row => row.username,
      sortable: true,
      width: "120px",
      style: {
        padding: '0.5rem',
        marginLeft: '0.25rem',
      },
    },
    {
      name: 'Name',
      selector: row => row.merchant_pan_name,
      sortable: true
    },
    {
      name: 'Phone',
      selector: row => row.mpan_store_phone_num,
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

  function handleEdit(name){
    console.log(name);
  }

  // function handleTestEvent(){
  //   window.dispatchEvent(new Event('testEvent'));
  // }

  // add action property to the received data
  React.useEffect(() => {
    let tempData = cashierData.map(item => ({...item, action: <EditButton onClick={() => handleEdit(item.username)}>Edit</EditButton>}));
    setModifiedData(tempData);
  }, [])

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
