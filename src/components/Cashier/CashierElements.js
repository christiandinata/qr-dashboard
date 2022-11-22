import styled from '@emotion/styled'
import { COLORS } from '../../constants/colors'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0.8;
    padding: 1rem;
    overflow: auto;
    height: 100%;
    background-color: ${COLORS.darkerbackground};
`

export const CashierContainer = styled.div``

export const CashierTable = styled.table`
    border: 1px solid #000;
    border-collapse: collapse;
`

export const CashierHead = styled.th`
    border: 1px solid #000;
    border-collapse: collapse;
    padding: 0.25rem 0.5rem;
`

export const CashierRow = styled.tr``

export const CashierDataEntry = styled.td`
    padding: 0.2rem;
    border: 1px solid #000;
    border-collapse: collapse;
`