import React from 'react'
import { EditButton } from '../Cashier/CashierElements';
import DataTableBase from '../DataTableBase'
import { ButtonGroup } from '../Store/StoreElements';

function PendingTable({setAddRejectOverlay}) {

    const columns = [
      {
        name: 'User',
        selector: row => row.user,
        sortable: true
      },
      {
        name: 'Reference',
        selector: row => row.reference,
        sortable: true,
      },
      {
        name: 'Action',
        selector: row => row.actions,
        width: "160px",
      },
      {
        name: 'Description',
        selector: row => row.description,
        sortable: true
      },
      {
        name: 'Request Date',
        selector: row => row.request_date,
        sortable: true
      },
    ];

    let data = [
      {
          id: 1,
          user: "",
          reference: "",
          actions: 
            <ButtonGroup>
              <EditButton>
                Approve
              </EditButton>
              <EditButton reject="true" onClick={() => setAddRejectOverlay(true)}>
                Reject
              </EditButton>
            </ButtonGroup>,
          description: "",
          request_date: "",
      },
    ]

  return (
    <>
      <DataTableBase 
            columns={columns} 
            data={data} 
            highlightOnHover
      />
    </>
  )
}

export default PendingTable
