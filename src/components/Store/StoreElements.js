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