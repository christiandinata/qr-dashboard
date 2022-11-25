import React from 'react'
import { EditButton } from '../Cashier/CashierElements'
import DataTableBase from '../DataTableBase'

function PendingTable() {

    const columns = [
        {
          name: 'Store',
          selector: row => row.store,
          wrap: true,
          grow: 0.7,
          sortable: true
        },
        {
          name: 'Username',
          selector: row => row.username,
          sortable: true,
          wrap: true,
          style: {
            padding: '0.5rem',
            marginLeft: '0.25rem',
          },
        },
        {
          name: 'Name',
          wrap: true,
          selector: row => row.name,
          sortable: true
        },
        {
          name: 'Phone',
          selector: row => row.phone,
          grow: 0.7,
          sortable: true
        },
        {
          name: 'Status',
          selector: row => row.status,
          sortable: true,
          grow: 0.4,
          conditionalCellStyles: [
            {
              when: row => row.status == "Active",
              style: {
                color: 'green',
                textShadow: '0px 0px 2px green'
              },
            },
            // You can also pass a callback to style for additional customization
            {
              when: row => row.status == "Inactive",
              style: {
                color: 'red',
                textShadow: '0px 0px 2px red'
              },
            },
          ]
        },
        {
          name: 'Actions',
          grow: 0.5,
          selector: row => row.actions,
        }
      ];

    let data = [
        {
            id: 1,
            store: "Toko Daisho",
            username: "Simas01Simas01Simas01Simas01Simas01",
            name: "Simas",
            phone: "081231233421",
            status: "Active",
            actions: <EditButton type="button">Edit</EditButton>,
        },
        {
            id: 2,
            store: "Toko Dai",
            username: "Simas02",
            name: "Simas2",
            phone: "081231235621",
            status: "Active",
            actions: <EditButton type="button">Edit</EditButton>,
        },
        {
            id: 3,
            store: "Toko Isho",
            username: "Simas03",
            name: "Simas3",
            phone: "081231238547",
            status: "Inactive",
            actions: <EditButton type="button">Edit</EditButton>,
        },
        {
            id: 4,
            store: "Toko Ok",
            username: "Simas04",
            name: "Simas4",
            phone: "081231230921",
            status: "Active",
            actions: <EditButton type="button">Edit</EditButton>,
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

export default PendingTable
