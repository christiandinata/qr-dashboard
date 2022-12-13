import React from 'react'
import { BackendContext } from '../../Context';
import { EditButton, FormGroup, FormInput } from '../Cashier/CashierElements';
import DataTableBase from '../DataTableBase';
import Loading from '../Loading';
import dateFormat from 'dateformat';
import { ButtonGroup } from '../Store/StoreElements';

function ApprovedTable() {

  const {approvedData} = React.useContext(BackendContext);

  const [modifiedData, setModifiedData] = React.useState()
  const [filteredData, setFilteredData] = React.useState()
  const [searchValue, setSearchValue] = React.useState("");

  const columns = [
    {
      name: 'User',
      selector: row => row.request_user,
      sortable: true,
      width: '80px'
    },
    {
      name: 'Reference',
      selector: row => row.request_reff,
      sortable: true,
      width: '184px '
    },
    {
      name: 'Action',
      selector: row => row.actions,
      width: "160px",
    },
    {
      name: 'Description',
      selector: row => row.request_desc,
      sortable: true,
      wrap: true,
      width: '200px'
    },
    {
      name: 'Approved Date',
      selector: row => row.new_approved_datetime,
      sortable: true,
      width: '224px'
    },
  ];

  React.useEffect(() => {
    let newData = approvedData?.map(item => ({...item, 
      new_approved_datetime: dateFormat(item.request_datetime_resp, "ddd, d mmm yyyy - HH:MM:ss"),
      // actions: 
      //   <ButtonGroup>
      //     <EditButton>
      //       Approve
      //     </EditButton>
      //     <EditButton reject="true" onClick={() => setAddRejectOverlay(true)}>
      //       Reject
      //     </EditButton>
      //   </ButtonGroup>,
    }))
    setModifiedData(newData);
  }, [approvedData])

  React.useEffect(() => {
    let newData = [];
    newData = modifiedData?.filter(item => {
      return item.request_user?.toLowerCase().includes(searchValue.toLowerCase())
         || item.request_reff?.includes(searchValue)
         || item.request_desc?.toLowerCase().includes(searchValue.toLowerCase())
         || item.new_approved_datetime?.toLowerCase().includes(searchValue.toLowerCase())
    })
    setFilteredData(newData)
  }, [searchValue])

  if (!approvedData) return <Loading />

  return (
    <>
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
    </>
  )
}

export default ApprovedTable
