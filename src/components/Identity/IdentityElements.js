import styled from "@emotion/styled";
import {COLORS} from '../../constants/colors'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0.8;
    padding: 1rem;
    overflow: auto;
    height: 100%;
    background-color: ${COLORS.darkerbackground};
`

export const Head = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-weight: 600;
    margin-top: 2rem;
`

export const HeadIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const HeadDesc = styled.div`
    margin-left: 1rem;
    font-size: 1.5rem;
`

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    height: 400px;
    margin-top: 1.25rem;
    overflow: auto;
    padding: 2rem;
    margin-left: 2rem;
    margin-right: 2rem;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0px 0px 10px 0px #fff;
    -webkit-box-shadow: 0px 0px 10px 0px #fff;
    -moz-box-shadow: 0px 0px 10px 0px #fff;
`

export const FormGroup = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 0.4rem;
`

export const FormLabel = styled.label`
    display: flex;
    flex: 0.25;
    min-width: 60px;
    margin-right: 1rem;
    font-weight: 600;
`

export const FormInput = styled.input`
    display: flex;
    outline: none;
    border: none;
    flex: 0.4;
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
    flex: 0.4;
    min-width: 120px;
    // border: none;
    border-radius: 4px;
    padding: 0.25rem 0.25rem 1.25rem 0.25rem;
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
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    padding: 0.5rem 1rem;
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