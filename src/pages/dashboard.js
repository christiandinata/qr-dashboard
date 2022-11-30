import * as React from 'react'
import styled from "@emotion/styled"
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import MainDashboard from '../components/MainDashboard'
import Identity from '../components/Identity'
import Report from '../components/Report'
import Approval from '../components/Approval'
import Store from '../components/Store'
import Cashier from '../components/Cashier'
import History from '../components/History'
import UserDashboard from '../components/UserDashboard'
import Backdrop from '../components/UserDashboard/Backdrop'
import SetInactiveModal from '../components/UserDashboard/SetInactiveModal'
import AddUser from '../components/UserDashboard/AddUser'
import AddCashier from '../components/Cashier/AddCashier'
import AddStore from '../components/Store/AddStore'
import RejectForm from '../components/Approval/RejectForm'
import ChangePassword from '../components/SectionHead/ChangePassword'
import { BackendContext } from '../Context'
import Cico from '../components/Store/Cico'

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
    user: false,
  })

  const [addRejectOverlay, setAddRejectOverlay] = React.useState(false);
  const [addStoreOverlay, setAddStoreOverlay] = React.useState(false);
  const [cicoOverlay, setCicoOverlay] = React.useState(false)
  const [addCashierOverlay, setAddCashierOverlay] = React.useState(false);
  const [addUserOverlay, setAddUserOverlay] = React.useState(false);
  const [userInactiveOverlay, setUserInactiveOverlay] = React.useState(false);

  // store component states
  const [payloadPan, setPayloadPan] = React.useState()

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
        {/* Overlaying Components */}
        <Backdrop 
          userInactiveOverlay={userInactiveOverlay}
          addRejectOverlay={addRejectOverlay}
          addStoreOverlay={addStoreOverlay}
          cicoOverlay={cicoOverlay}
          addUserOverlay={addUserOverlay} 
          addCashierOverlay={addCashierOverlay}
        />
        <ChangePassword/>
        <RejectForm addRejectOverlay={addRejectOverlay} setAddRejectOverlay={setAddRejectOverlay}/>
        <AddStore addStoreOverlay={addStoreOverlay} setAddStoreOverlay={setAddStoreOverlay}/>
        <Cico payloadPan={payloadPan} cicoOverlay={cicoOverlay} setCicoOverlay={setCicoOverlay}/>
        <AddCashier addCashierOverlay={addCashierOverlay} setAddCashierOverlay={setAddCashierOverlay}/>
        <AddUser addUserOverlay={addUserOverlay} setAddUserOverlay={setAddUserOverlay}/>
        <SetInactiveModal userInactiveOverlay={userInactiveOverlay} setUserInactiveOverlay={setUserInactiveOverlay}/>
        {/* End of Overlaying Components */}
        <Header />
        <ContainerInner>
          <Sidebar handleNavClick={handleNavClick} active={active} setActive={setActive}/>
          {active.main && <MainDashboard handleNavClick={handleNavClick}/>}
          {active.identitas && <Identity handleNavClick={handleNavClick}/>}
          {active.report && <Report handleNavClick={handleNavClick}/>}
          {active.approval && 
            <Approval 
              handleNavClick={handleNavClick}
              setAddRejectOverlay={setAddRejectOverlay}
            />
          }
          {active.store && 
            <Store 
              handleNavClick={handleNavClick}
              setAddStoreOverlay={setAddStoreOverlay}
              setPayloadPan={setPayloadPan}
              setCicoOverlay={setCicoOverlay}
            />
          }
          {active.cashier && 
            <Cashier 
              handleNavClick={handleNavClick}
              setAddCashierOverlay={setAddCashierOverlay}
            />
          }
          {active.history && <History handleNavClick={handleNavClick}/>}
          {active.user && 
            <UserDashboard 
              handleNavClick={handleNavClick}
              setUserInactiveOverlay={setUserInactiveOverlay}
              setAddUserOverlay={setAddUserOverlay}
            />
          }
        </ContainerInner>
      </Container>
    </>
  )
}

export default Dashboard

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100vh;
`

const ContainerInner = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
`