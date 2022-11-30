import styled from '@emotion/styled'
import { COLORS } from '../../constants/colors'

export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 0.8;
    padding: 1rem;
    overflow: auto;
    height: 100%;
    background-color: ${COLORS.darkerbackground};
`

export const Tabs = styled.div`
    display: flex;
    gap: 0.5rem;
    margin: 0 2rem 0.5rem 2rem;
    padding-top: 0.5rem;
    border-bottom: 3px solid #fff;
`

export const Tab = styled.div`
    padding: 0.25rem;
    border-radius: 4px 4px 0 0;
    margin-bottom: -1px;
    color: #5e5e5e;
    cursor: pointer;
    transition: 0.3s all;

    background-color: ${({active}) => active ? "#fff" : "none"};
    border: none;
    font-weight: ${({active}) => active ? "700" : "400"};

    box-shadow: ${({active}) => active ? "0px 0px 6px 0px #fff" : "none"};
    -webkit-box-shadow: ${({active}) => active ? "0px 0px 6px 0px #fff" : "none"};
    -moz-box-shadow: ${({active}) => active ? "0px 0px 6px 0px #fff" : "none"};

    &:hover {
        background-color: #fff;
        box-shadow: 0px 0px 6px 0px #fff;
        -webkit-box-shadow: 0px 0px 6px 0px #fff;
        -moz-box-shadow: 0px 0px 6px 0px #fff;
    }
`

export const ApprovalContainer = styled.div`
    height: 380px;
    overflow: auto;
    margin-left: 2rem;
    margin-right: 2rem;
    padding: 2rem;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0px 0px 10px 0px #fff;
    -webkit-box-shadow: 0px 0px 10px 0px #fff;
    -moz-box-shadow: 0px 0px 10px 0px #fff;
`