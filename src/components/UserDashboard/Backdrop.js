import React from 'react'
import styled from '@emotion/styled'
import { BackendContext } from '../../Context'

function Backdrop({userInactiveOverlay, addRejectOverlay, addStoreOverlay, cicoOverlay, addCashierOverlay, addUserOverlay}) {
  
  const {changePasswordOverlay} = React.useContext(BackendContext);
  
  return (
    <Container 
      changePasswordOverlay={changePasswordOverlay}
      userInactiveOverlay={userInactiveOverlay} 
      addRejectOverlay={addRejectOverlay}
      addStoreOverlay={addStoreOverlay}
      cicoOverlay={cicoOverlay}
      addCashierOverlay={addCashierOverlay}
      addUserOverlay={addUserOverlay}
    />
  )
}

export default Backdrop

const Container = styled.div`
    display: ${(
      {changePasswordOverlay, userInactiveOverlay, 
        addRejectOverlay, addStoreOverlay, cicoOverlay, addCashierOverlay, addUserOverlay
      }) => 
        changePasswordOverlay || userInactiveOverlay || addRejectOverlay || 
        addStoreOverlay || cicoOverlay || addCashierOverlay || addUserOverlay ? "flex" : "none"};
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
`