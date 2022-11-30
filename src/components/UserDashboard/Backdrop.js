import React from 'react'
import styled from '@emotion/styled'

function Backdrop({userInactiveOverlay, addRejectOverlay, addStoreOverlay, addCashierOverlay, addUserOverlay}) {
  return (
    <Container 
      userInactiveOverlay={userInactiveOverlay} 
      addRejectOverlay={addRejectOverlay}
      addStoreOverlay={addStoreOverlay}
      addCashierOverlay={addCashierOverlay}
      addUserOverlay={addUserOverlay}
    />
  )
}

export default Backdrop

const Container = styled.div`
    display: ${({userInactiveOverlay, addRejectOverlay, addStoreOverlay, addCashierOverlay, addUserOverlay}) => 
      userInactiveOverlay || addRejectOverlay || addStoreOverlay || addCashierOverlay || addUserOverlay ? "flex" : "none"};
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
`