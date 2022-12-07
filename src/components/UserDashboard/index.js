import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai';
import { MdSpaceDashboard } from 'react-icons/md';
import { TiEdit } from 'react-icons/ti';
import { BackendContext } from '../../Context';
import { AddButton, CashierContainer, Container, FormGroup, FormInput, HeadDesc, Title } from '../Cashier/CashierElements';
import DataTableBase from '../DataTableBase';
import { Head, HeadIcon } from '../Identity/IdentityElements';
import Loading from '../Loading';
import SectionHead from '../SectionHead';
import { EditButton, GreenButton, RedButton } from '../Store/StoreElements';

function UserDashboard({
  handleNavClick, setUserInactiveOverlay, setAddUserOverlay, 
  activationType, setActivationType, setEditUserOverlay
}) {

  const {usersData} = React.useContext(BackendContext);

  const [searchValue, setSearchValue] = React.useState("");
  const [modifiedData, setModifiedData] = React.useState();
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
      name: 'MID',
      selector: row => row.merchant_id,
      sortable: true,
      width: '148px',
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
      width: '120px',
      sortable: true
    },
    {
      name: 'Status',
      selector: row => row.status,
      sortable: true,
      grow: 0.4,
      conditionalCellStyles: [
        {
          when: row => row.status === "active",
          style: {
            color: 'green',
            textShadow: '0px 0px 2px green'
          },
        },
        {
          when: row => row.status === "inactive",
          style: {
            color: 'red',
            textShadow: '0px 0px 2px red'
          },
        },
        {
          when: row => row.status === "locked",
          style: {
            color: '#000',
            textShadow: '0px 0px 2px #000',
          }
        }
      ]
    },
    {
      name: 'Actions',
      grow: 1.1,
      selector: row => row.actions,
    }
  ];

  function handleButton(name){
    setUserInactiveOverlay(true)

    setActivationType({
      ...activationType,
      [name]: true,
    })
  }

  function handleEdit(pan, merchantPanName, terminalId){
    setEditUserOverlay(true);
    // setActivationPayload({
    //   ...activationPayload,
    //   pan: pan,
    //   merchant_pan_name: merchantPanName,
    //   terminal_id: terminalId
    // })
  }

  // add action property to the received data
  React.useEffect(() => {
    let tempData = usersData?.map(item => ({...item, actions: 
      item.status === "active" ?
        <RedButton onClick={() => handleButton("deactivate")}>Deactivate</RedButton>
      :
        <GreenButton onClick={() => handleButton("activate")}>Activate</GreenButton>
    ,edit:
    <EditButton onClick={() => handleEdit(item.pan, item.merchant_pan_name, item.terminal_id)}>
      <TiEdit size="24" />
    </EditButton>
  }));
    setModifiedData(tempData);
  }, [])

  React.useEffect(() => {
    let tempData = usersData?.map(item => ({...item, actions: 
      item.status === "active" ?
        <RedButton onClick={() => handleButton("deactivate")}>Deactivate</RedButton>
      :
        <GreenButton onClick={() => handleButton("activate")}>Activate</GreenButton>
    ,edit:
    <EditButton onClick={() => handleEdit(item.pan, item.merchant_pan_name, item.terminal_id)}>
      <TiEdit size="24" />
    </EditButton>
  }));
    setModifiedData(tempData);
  }, [usersData])

  React.useEffect(() => {
    let newData = [];
    newData = modifiedData?.filter(item => {
      return item.merchant_id?.includes(searchValue)
       || item.username?.toLowerCase().includes(searchValue.toLowerCase())
       || item.name?.includes(searchValue)
       || item.phone?.toLowerCase().includes(searchValue.toLowerCase())
       || item.role?.toLowerCase().includes(searchValue.toLowerCase())
       || item.status?.toLowerCase().includes(searchValue.toLowerCase())
    })
    setfilteredData(newData)
  }, [searchValue])

  if (!usersData) return <Loading />

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
          data={filteredData ? filteredData : modifiedData}
          highlightOnHover
        />
      </CashierContainer>
    </Container>
  )
}

export default UserDashboard
