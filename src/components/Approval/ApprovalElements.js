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
    border-bottom: 2px solid #fff;
`

export const Tab = styled.div`
    padding: 0.25rem;
    background-color: #fff;
    border-top: 1px solid #fff;
    border-left: 1px solid #fff;
    border-right: 1px solid #fff;
    border-radius: 4px 4px 0 0;
    margin-bottom: -1px;
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