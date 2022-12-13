import React from 'react'
import { BackendContext } from '../../Context';
import { EditButton, FormGroup, FormInput } from '../Cashier/CashierElements';
import DataTableBase from '../DataTableBase'
import { ButtonGroup } from '../Store/StoreElements';
import dateFormat from 'dateformat'
import Loading from '../Loading';

function PendingTable({setAddRejectOverlay}) {

  const {pendingData} = React.useContext(BackendContext);

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
        name: 'Request Date',
        selector: row => row.new_pending_datetime,
        sortable: true,
        width: '224px'
      },
    ];

    // let data = [
    //   {
    //       id: 1,
    //       user: "",
    //       reference: "",
    //       actions: 
            // <ButtonGroup>
            //   <EditButton>
            //     Approve
            //   </EditButton>
            //   <EditButton reject="true" onClick={() => setAddRejectOverlay(true)}>
            //     Reject
            //   </EditButton>
            // </ButtonGroup>,
    //       description: "",
    //       request_date: "",
    //   },
    // ]

    React.useEffect(() => {
      let newData = pendingData?.map(item => ({...item, 
        new_pending_datetime: dateFormat(item.request_datetime, "ddd, d mmm yyyy - HH:MM:ss"),
        actions: 
          <ButtonGroup>
            <EditButton>
              Approve
            </EditButton>
            <EditButton reject="true" onClick={() => setAddRejectOverlay(true)}>
              Reject
            </EditButton>
          </ButtonGroup>,
      }))
      setModifiedData(newData);
    }, [pendingData])
  
    React.useEffect(() => {
      let newData = [];
      newData = modifiedData?.filter(item => {
        return item.request_user?.toLowerCase().includes(searchValue.toLowerCase())
         || item.request_reff?.includes(searchValue)
         || item.request_desc?.toLowerCase().includes(searchValue.toLowerCase())
         || item.new_pending_datetime?.toLowerCase().includes(searchValue.toLowerCase())
      })
      setFilteredData(newData)
    }, [searchValue])

    if (!pendingData) return <Loading />

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

export default PendingTable
