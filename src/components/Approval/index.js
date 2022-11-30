import React from 'react'
import { BiListUl } from 'react-icons/bi'
import { Title } from '../Cashier/CashierElements'
import { Head, HeadDesc, HeadIcon } from '../Identity/IdentityElements'
import SectionHead from '../SectionHead'
import { ApprovalContainer, Container, Tab, Tabs } from './ApprovalElements'
import PendingTable from './PendingTable'
import ApprovedTable from './ApprovedTable'
import RejectedTable from './RejectedTable'

function Approval({handleNavClick, setAddRejectOverlay}) {

  const [activeTab, setActiveTab] = React.useState({
    pending: true,
    approved: false,
    rejected: false,
  })

  function handleTab(name) {
    Object.keys(activeTab).forEach(key => {
      activeTab[key] = false;
    })

    setActiveTab({
      ...activeTab,
      [name]: true,
    })
  }

  return (
    <Container>
      <SectionHead handleNavClick={handleNavClick}/>
      <Head>
        <HeadIcon>
          <BiListUl size={24}/>
        </HeadIcon>
        <HeadDesc>
          <Title className='popcorn'>
            Approval List
          </Title>
        </HeadDesc>
      </Head>
      <Tabs>
        <Tab active={activeTab.pending} onClick={() => handleTab("pending")}>
          Pending
        </Tab>
        <Tab active={activeTab.approved} onClick={() => handleTab("approved")}>
          Approved
        </Tab>
        <Tab active={activeTab.rejected} onClick={() => handleTab("rejected")}>
          Rejected
        </Tab>
      </Tabs>
      <ApprovalContainer>
        {activeTab.pending && <PendingTable setAddRejectOverlay={setAddRejectOverlay}/>}
        {activeTab.approved && <ApprovedTable />}
        {activeTab.rejected && <RejectedTable />}
      </ApprovalContainer>
    </Container>
  )
}

export default Approval
