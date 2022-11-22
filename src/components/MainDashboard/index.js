import React from 'react'
import { Card, CardDesc, CardHeader, Container, ContentGroup, DateSection, DropdownIcon, DropdownMenu, Head, HeadNav, HeadNavInfo, Menu, Name, Notification, NotificationButton, StyledTooltip, TooltipContent } from './MainDashboardElements'
import {BiBell} from 'react-icons/bi'
import {MdArrowDropDown} from 'react-icons/md'

function MainDashboard() {

  const ref = React.useRef(null);
  const [open, setOpen] = React.useState(false);
  const [expand, setExpand] = React.useState(false);
  const [currDate, setCurrDate] = React.useState("")

  function dateGenerator(){
    const dayNames = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"
    ];

    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];

    let newDate = new Date()
    let date = newDate.getDate();
    let day = dayNames[newDate.getDay()-1];
    let month = newDate.getMonth();
    let monthName = monthNames[month];
    let year = newDate.getFullYear();

    setCurrDate(`${day}, ${date} ${monthName} ${year}`);
  }

  React.useEffect(() => {
    dateGenerator();
  },[])

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  },[])

  return (
    <Container>
      <Head>
        <Notification ref={ref}>
          <StyledTooltip 
            placement="right"
            open={open}
            onClose={() => setOpen(false)}
            disableFocusListener
            disableHoverListener
            disableTouchListener
            ref={ref}
            title={
              <TooltipContent ref={ref}>
                Notification
              </TooltipContent>
            }>
            <NotificationButton onClick={() => setOpen(true)}>
              <BiBell size={24}/>
            </NotificationButton>
          </StyledTooltip>
        </Notification>
        <HeadNav>
          <HeadNavInfo>
            <Name>
              Mr. Simas
            </Name>
            <DropdownIcon onClick={() => setExpand(!expand)}>
              <MdArrowDropDown size={24}/>
            </DropdownIcon>
          </HeadNavInfo>
          <DropdownMenu expand={expand}>
            <Menu>
              Dashboard
            </Menu>
            <Menu>
              Logout
            </Menu>
          </DropdownMenu>
        </HeadNav>
      </Head>
      <DateSection>
        {currDate}
      </DateSection>
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
