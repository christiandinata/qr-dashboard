import React from 'react'
import { EditButton } from '../Cashier/CashierElements';
import DataTableBase from '../DataTableBase';

function ApprovedTable() {
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
    },
    {
      name: 'Description',
      selector: row => row.description,
      sortable: true
    },
    {
      name: 'Approved Date',
      selector: row => row.request_date,
      sortable: true
    },
  ];

  let data = [
    {
        id: 1,
        user: "",
        reference: "",
        actions: "",
        description: "",
        request_date: "",
    },
  ]

  return (
    <DataTableBase 
          columns={columns} 
          data={data} 
          highlightOnHover
    />
  )
}

export default ApprovedTable
