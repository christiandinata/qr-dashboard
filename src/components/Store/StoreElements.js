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

export const StoreContainer = styled.div`
    height: 400px;
    overflow: auto;
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

export const ButtonGroup = styled.div`
    display: flex;
    width: 100%;
    gap: 0.5rem;
`

export const GreenButton = styled.button`
    display: flex;
    padding: 0.25rem 0.5rem;
    margin: 0.3rem 0;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    transition: 0.3s all;

    color: #fff;
    background-color: green;

    &:hover {
        color: green;
        background-color: #fff;
    }
`

export const RedButton = styled.button`
    display: flex;
    padding: 0.25rem 0.5rem;
    margin: 0.3rem 0;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    transition: 0.3s all;

    color: #fff;
    background-color: red;

    &:hover {
        color: red;
        background-color: #fff;
    }
`

export const EditButton = styled.div`
    padding: 0.25rem;
    transition: 0.3s all;
    cursor: pointer;
    border-radius: 4px;

    &:hover {
        background-color: #b0b0b0;
        color: #fff;
    }
`