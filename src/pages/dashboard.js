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
import Activation from '../components/Cashier/Activation'
import StoreActivation from '../components/Store/StoreActivation'
import EditStore from '../components/Store/EditStore'
import EditCashier from '../components/Cashier/EditCashier'

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
  const [activationOverlay, setActivationOverlay] = React.useState(false);
  const [activationType, setActivationType] = React.useState({
    activate: false,
    deactivate: false,
  })

  const [storeActivationOverlay, setStoreActivationOverlay] = React.useState(false)

  // store component states
  const [cicoPayload, setCicoPayload] = React.useState({
    pan: '',
    cashIn: false,
    cashOut: false,
  })

  const [storeActivationPan, setStoreActivationPan] = React.useState()
  const [editStoreOverlay, setEditStoreOverlay] = React.useState(false)

  // cashier component states
  const [activationPayload, setActivationPayload] = React.useState({
    pan: '',
    merchant_pan_name: '',
    terminal_id: '',
  })

  const [editCashierOverlay, setEditCashierOverlay] = React.useState(false)

  
  const [loading, setLoading] = React.useState(false)

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
          activationOverlay={activationOverlay}
          storeActivationOverlay={storeActivationOverlay}
          editStoreOverlay={editStoreOverlay}
          editCashierOverlay={editCashierOverlay}
        />
        <ChangePassword/>
        <RejectForm addRejectOverlay={addRejectOverlay} setAddRejectOverlay={setAddRejectOverlay}/>
        <AddStore addStoreOverlay={addStoreOverlay} setAddStoreOverlay={setAddStoreOverlay}/>
        <Cico cicoPayload={cicoPayload} cicoOverlay={cicoOverlay} setCicoOverlay={setCicoOverlay} setLoading={setLoading} loading={loading}/>
        <StoreActivation 
          activationType={activationType}
          setActivationType={setActivationType}
          setStoreActivationOverlay={setStoreActivationOverlay}
          storeActivationPan={storeActivationPan}
          storeActivationOverlay={storeActivationOverlay}
        />
        <EditStore editStoreOverlay={editStoreOverlay} cicoPayload={cicoPayload} setEditStoreOverlay={setEditStoreOverlay}/>
        <AddCashier addCashierOverlay={addCashierOverlay} setAddCashierOverlay={setAddCashierOverlay}/>
        <Activation 
          activationOverlay={activationOverlay} 
          setActivationOverlay={setActivationOverlay}
          activationType={activationType}
          setActivationType={setActivationType}
          activationPayload={activationPayload}
          setActivationPayload={setActivationPayload}
        />
        <EditCashier editCashierOverlay={editCashierOverlay} setEditCashierOverlay={setEditCashierOverlay} activationPayload={activationPayload}/>
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
              loading={loading}
              setAddStoreOverlay={setAddStoreOverlay}
              cicoPayload={cicoPayload}
              setCicoPayload={setCicoPayload}
              setCicoOverlay={setCicoOverlay}
              activationType={activationType}
              setActivationType={setActivationType}
              storeActivationPan={storeActivationPan}
              setStoreActivationPan={setStoreActivationPan}
              setStoreActivationOverlay={setStoreActivationOverlay}
              setEditStoreOverlay={setEditStoreOverlay}
            />
          }
          {active.cashier && 
            <Cashier 
              handleNavClick={handleNavClick}
              setAddCashierOverlay={setAddCashierOverlay}
              setActivationOverlay={setActivationOverlay}
              activationType={activationType}
              setActivationType={setActivationType}
              activationPayload={activationPayload}
              setActivationPayload={setActivationPayload}
              setEditCashierOverlay={setEditCashierOverlay}
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