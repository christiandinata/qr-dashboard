import React from 'react'
import { BiListUl } from 'react-icons/bi'
import { Title } from '../Cashier/CashierElements'
import { Head, HeadDesc, HeadIcon } from '../Identity/IdentityElements'
import SectionHead from '../SectionHead'
import { Container, Tab, Tabs } from './ApprovalElements'

function Approval() {

  const [activeTab, setActiveTab] = React.useState({
    pending: true,
    approved: false,
    rejected: false,
  })

  return (
    <Container>
      <SectionHead />
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
        <Tab>
          Pending
        </Tab>
        <Tab>
          Approved
        </Tab>
        <Tab>
          Rejected
        </Tab>
      </Tabs>
      <ApprovalContainer>
        {activeTab.pending && <PendingTable />}
        {activeTab.approved && <ApprovedTable />}
        {activeTab.rejected && <RejectedTable />}
      </ApprovalContainer>
    </Container>
  )
}

export default Approval
