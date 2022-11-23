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
// import Cashier from '../components/Cashier'
import History from '../components/History'
import UserDashboard from '../components/UserDashboard'
import { FaLessThanEqual } from 'react-icons/fa'

const Cashier = React.lazy(() => import('../components/Cashier'))

function Dashboard() {

  const [active, setActive] = React.useState({
    main: false,
    identitas: false,
    report: false,
    setting: false,
    approval: false,
    store:false,
    cashier: true,
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
          {active.report && <Report handleNavClick={handleNavClick}/>}
          {active.setting && <Setting />}
          {active.approval && <Approval />}
          {active.store && <Store />}
          {active.cashier && 
            <React.Suspense fallback={<div>Loading</div>}>
             <Cashier handleNavClick={handleNavClick}/>
            </React.Suspense>
          }
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