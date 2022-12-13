import React from 'react'
import { BiExport } from 'react-icons/bi'
import { FaHistory } from 'react-icons/fa'
import { BackendContext } from '../../Context'
import { FormGroup, FormInput } from '../Cashier/CashierElements'
import DataTableBase from '../DataTableBase'
import { Head, HeadIcon } from '../Identity/IdentityElements'
import Loading from '../Loading'
import SectionHead from '../SectionHead'
import { AddButton, Container, HeadDesc, HistoryContainer, Title } from './HistoryElements'
import dateFormat from "dateformat";

function History({handleNavClick}) {

  const {historyData} = React.useContext(BackendContext);
  const [modifiedData, setModifiedData] = React.useState()
  const [searchValue, setSearchValue] = React.useState("");
  const [filteredData, setFilteredData] = React.useState();

  const columns = [
    {
      name: 'Date Time',
      selector: row => row.new_history_datetime,
      sortable: true,
      width: "208px",
    },
    {
      name: 'MID',
      selector: row => row.history_mid,
      sortable: true,
      grow: 1.5,
      width: "150px",
    },
    {
      name: 'Merchant',
      selector: row => row.history_merchantname,
      sortable: true,
      width: "120px",
    },
    {
      name: 'User',
      selector: row => row.history_user,
      sortable: true,
      grow: 0.5,
    },
    {
      name: 'Role',
      selector: row => row.history_role,
      sortable: true,
      grow: 0.4,
    },
    {
      name: 'Reference',
      selector: row => row.history_reff,
      sortable: true
    },
    {
      name: 'Action',
      sortable: true,
      wrap: true,
      selector: row => row.history_action,
    },
    {
      name: 'Status',
      selector: row => row.history_status,
      sortable: true,
      grow: 0.5,
      conditionalCellStyles: [
        {
          when: row => row.status === "success",
          style: {
            color: 'green',
            textShadow: '0px 0px 2px green'
          },
        },
        // You can also pass a callback to style for additional customization
        {
          when: row => row.status === "failed",
          style: {
            color: 'red',
            textShadow: '0px 0px 2px red'
          },
        },
      ]
    },
  ];

  React.useEffect(() => {
    let newData = historyData?.map(item => ({...item, 
      new_history_datetime: dateFormat(item.history_datetime, "ddd, d mmm yyyy - HH:MM:ss")
    }))
    setModifiedData(newData);
  }, [historyData])

  React.useEffect(() => {
    let newData = [];
    newData = modifiedData?.filter(item => {
      return item.new_history_datetime?.toLowerCase().includes(searchValue.toLowerCase())
       || item.history_mid?.includes(searchValue)
       || item.history_merchantname?.toLowerCase().includes(searchValue.toLowerCase())
       || item.history_user?.toLowerCase().includes(searchValue.toLowerCase())
       || item.history_role?.toLowerCase().includes(searchValue.toLowerCase())
       || item.history_action?.toLowerCase().includes(searchValue.toLowerCase())
    })
    setFilteredData(newData)
  }, [searchValue])

  console.log(modifiedData)

  if (!historyData) return <Loading />

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
          data={filteredData ? filteredData : modifiedData} 
          highlightOnHover
        />
      </HistoryContainer>
    </Container>
  )
}

export default History
