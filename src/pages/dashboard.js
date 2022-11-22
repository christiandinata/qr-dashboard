import * as React from 'react'
import styled from "@emotion/styled"
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import MainDashboard from '../components/MainDashboard'
import Identity from '../components/Identity'
import Report from '../components/Report'
import Setting from '../components/Setting'
import Approval from '../components/Approval'
import Store from '../components/Store'
import Cashier from '../components/Cashier'
import History from '../components/History'
import UserDashboard from '../components/UserDashboard'


function Dashboard() {

  const [active, setActive] = React.useState({
    main: true,
    identitas: false,
    report: false,
    setting: false,
    approval: false,
    store:false,
    cashier: false,
    history: false,
    user: false
  })

  function handleNavClick (name) {
      Object.keys(active).forEach(key => {
          active[key] = false
      })
      setActive({
          ...active,
          [name]: true
      })
  }
  return (
    <>
      <Container>
        <Header />
        <ContainerInner>
          <Sidebar handleNavClick={handleNavClick} active={active} setActive={setActive}/>
          {active.main && <MainDashboard handleNavClick={handleNavClick}/>}
          {active.identitas && <Identity handleNavClick={handleNavClick}/>}
          {active.report && <Report />}
          {active.setting && <Setting />}
          {active.approval && <Approval />}
          {active.store && <Store />}
          {active.cashier && <Cashier />}
          {active.history && <History />}
          {active.user && <UserDashboard />}
        </ContainerInner>
      </Container>
    </>
  )
}

export default Dashboard

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`

const ContainerInner = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
`