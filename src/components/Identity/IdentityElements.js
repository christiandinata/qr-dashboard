import styled from "@emotion/styled";
import {COLORS} from '../../constants/colors'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0.8;
    padding: 1rem;
    overflow: auto;
    height: 100%;
`

export const Head = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-weight: 600;
`

export const HeadIcon = styled.div``

export const HeadDesc = styled.div`
    margin-left: 1rem;
`

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    // flex: 1;
    width: 100%;
    height: 480px;
    margin-top: 1.25rem;
    overflow: auto;
`

export const FormGroup = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 0.2rem;
`

export const FormLabel = styled.label`
    display: flex;
    flex: 0.25;
    min-width: 60px;
    margin-right: 1rem;
`

export const FormInput = styled.input`
    display: flex;
    outline: none;
    // border: none;
    flex: 0.2;
    min-width: 120px;
    border-radius: 4px;
    padding: 0.25rem;
`

export const FormSelect = styled.select`
    outline: none;
    flex: 0.2;
    min-width: 120px;
    // border: none;
    border-radius: 4px;
    padding: 0.25rem;
`

export const FormOption = styled.option``

export const TextArea = styled.textarea`
    outline: none;
    flex: 0.2;
    min-width: 120px;
    // border: none;
    border-radius: 4px;
    padding: 0.25rem 0.25rem 1.25rem 0.25rem;
`

export const CashierList = styled.div``

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

export const ButtonGroup = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
    margin-top: 2rem;
`

export const Button = styled.button`
    display: flex;
    outline: none;
    border: 1px solid #000;
    border-radius: 4px;
    background-color: ${COLORS.darkerbackground};
    padding: 1rem 2rem;
    color: red;
    cursor: pointer;
    transition: 0.3s all;

    &:hover{
        color: #fff;
        background-color: red;
        border: 1px solid red;
    }
`