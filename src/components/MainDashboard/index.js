import React from 'react'
import { Card, CardDesc, CardHeader, Container, ContentGroup, DateSection, DropdownIcon, DropdownMenu, Head, HeadNav, HeadNavInfo, Menu, Name, Notification, NotificationButton, StyledTooltip, TooltipContent } from './MainDashboardElements'
import {BiBell} from 'react-icons/bi'
import {MdArrowDropDown} from 'react-icons/md'
import SectionHead from '../SectionHead'
import { BackendContext } from '../../Context'

function MainDashboard({handleNavClick}) {

  const {user} = React.useContext(BackendContext);

  console.log(user)

  return (
    <Container>
      <SectionHead handleNavClick={handleNavClick}/>
      <ContentGroup>
        <Card>
          <CardHeader>
            Jumlah Transaksi Sukses
          </CardHeader>
          <CardDesc>
            5
          </CardDesc>
        </Card>
        <Card>
        <CardHeader>
            Jumlah Total Pendapatan
          </CardHeader>
          <CardDesc>
            Rp. 550.000,00
          </CardDesc>
        </Card>
        <Card>
        <CardHeader>
            Jumlah Transaksi Refund
          </CardHeader>
          <CardDesc>
            0
          </CardDesc>
        </Card>
        <Card>
        <CardHeader>
            Jumlah Total Refund
          </CardHeader>
          <CardDesc>
            Rp. 0,00
          </CardDesc>
        </Card>
      </ContentGroup>
    </Container>
  )
}

export default MainDashboard
