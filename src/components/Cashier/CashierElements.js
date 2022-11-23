import styled from '@emotion/styled'
import { COLORS } from '../../constants/colors'
import Switch from '@mui/material/Switch';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0.8;
    padding: 1rem;
    overflow: auto;
    height: 100%;
    background-color: ${COLORS.darkerbackground};
`

export const HeadDesc = styled.div`
    display: flex;
    width: 100%;
    margin-left: 1rem;
    justify-content: space-between;
    align-items: center;
`

export const Title = styled.div`
    font-weight: 600;
    font-size: 1.5rem;
`

export const EditButton = styled.button`
    display: flex;
    align-items: center;
    margin-right: 2rem;
    font-size: 1rem;
    padding: 0.5rem 0.5rem 0.5rem 0.25rem;
    outline: none;
    background-color: red;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: 0.3s all;
    box-shadow: 0px 0px 10px 0px red;
    -webkit-box-shadow: 0px 0px 10px 0px red;
    -moz-box-shadow: 0px 0px 10px 0px red;

    &:hover{
        background-color: #fff;
        color: red;
    }
`

export const CashierContainer = styled.div`
    margin-top: 1.25rem;
    margin-left: 2rem;
    margin-right: 2rem;
    padding: 2rem;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0px 0px 10px 0px #fff;
    -webkit-box-shadow: 0px 0px 10px 0px #fff;
    -moz-box-shadow: 0px 0px 10px 0px #fff;
`

export const FormGroup = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    
`

export const FormInput = styled.input`
    display: flex;  
    border: 1px solid #000;
    padding: 0.5rem 0.75rem;
    border-radius: 40px;
`

export const SwitchButton = styled(Switch)`
    
`