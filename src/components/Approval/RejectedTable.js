import React from 'react'
import { EditButton } from '../Cashier/CashierElements';
import DataTableBase from '../DataTableBase';

function RejectedTable() {
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
      name: 'Reject Date',
      selector: row => row.request_date,
      sortable: true
    },
    {
      name: 'Reason',
      selector: row => row.reason,
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

export default RejectedTable
