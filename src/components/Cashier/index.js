import React from 'react'
import SectionHead from '../SectionHead'
import { CashierContainer, CashierDataEntry, CashierHead, CashierRow, CashierTable, Container } from './CashierElements'
import {CashierData} from './CashierData'
import { Head, HeadDesc, HeadIcon } from '../Identity/IdentityElements'
import {MdOutlineComputer} from 'react-icons/md'

function Cashier() {
  return (
    <Container>
      <SectionHead />
      <Head>
        <HeadIcon>
          <MdOutlineComputer size={24}/>
        </HeadIcon>
        <HeadDesc>
          Cashier List
        </HeadDesc>
      </Head>
      <CashierContainer>
        <CashierTable>
          <CashierRow>
            <CashierHead>
              Cashier Name
            </CashierHead>
            <CashierHead>
              Mobile Phone
            </CashierHead>
            <CashierHead>
              Username
            </CashierHead>
            <CashierHead>
              Terminal ID
            </CashierHead>
            <CashierHead>
              User Status
            </CashierHead>
          </CashierRow>
          {CashierData.map((item, idx) => (
            <CashierRow>
              <CashierDataEntry>
                {item.name}
              </CashierDataEntry>
              <CashierDataEntry>
                {item.mobile}
              </CashierDataEntry>
              <CashierDataEntry>
                {item.username}
              </CashierDataEntry>
              <CashierDataEntry>
                {item.terminalId}
              </CashierDataEntry>
              <CashierDataEntry>
                {item.userStatus}
              </CashierDataEntry>
            </CashierRow>
          ))}
        </CashierTable>
      </CashierContainer>
    </Container>
  )
}

export default Cashier
