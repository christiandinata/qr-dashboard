import styled from "@emotion/styled";
import { COLORS } from "../../constants/colors";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0.8;
    padding: 1rem;
    overflow: auto;
    height: 100%;
    background-color: ${COLORS.darkerbackground};
`

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    height: 400px;
    margin-top: 1.25rem;
    overflow: auto;
    padding: 2rem 0 2rem 2rem;
    margin-left: 2rem;
    margin-right: 2rem;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0px 0px 10px 0px #fff;
    -webkit-box-shadow: 0px 0px 10px 0px #fff;
    -moz-box-shadow: 0px 0px 10px 0px #fff;
`

export const RadioContainer = styled.div``

export const FormRadio = styled.div`
    display: flex;
    flex-direction: column;
`

export const RadioWrapper = styled.div`
    display: flex;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
`

export const FormContent = styled.div`
    display: flex;
    margin-top: 1.5rem;

    p {
        margin: 0 1rem 0 1rem;
    }
`

export const FormGroup = styled.div`
    display: flex;
`

export const FormLabel = styled.label`
    font-weight: 600;
    margin-right: 0.5rem;
`

export const FormInput = styled.input``

export const ButtonGroup = styled.div`
    display: flex;
    margin-top: 1rem;
`

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    outline: none;
    background-color: green;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: 0.3s all;
    box-shadow: 0px 0px 10px 0px green;
    -webkit-box-shadow: 0px 0px 10px 0px green;
    -moz-box-shadow: 0px 0px 10px 0px green;

    &:hover{
        background-color: #fff;
        color: green;
    }
`