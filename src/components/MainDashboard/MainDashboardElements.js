import styled from "@emotion/styled";
import Tooltip from '@mui/material/Tooltip';
import { COLORS } from "../../constants/colors";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0.8;
    padding: 1rem;
    background-color: ${COLORS.darkerbackground};
`

export const ContentGroup = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
    width: 70%;
    overflow: auto;
    margin-top: 3rem;
    padding: 3rem;
    place-self: center;
    border-radius: 4px;
    background-color: ${COLORS.background};
    box-shadow: 0px 0px 24px 0px rgba(255,255,255,0.75);
    -webkit-box-shadow: 0px 0px 24px 0px rgba(255,255,255,0.75);
    -moz-box-shadow: 0px 0px 24px 0px rgba(255,255,255,0.75);
`

export const Card = styled.div`
    display: flex;
    flex: 1 1 calc(50% - 50px);
    flex-direction: column;
    justify-content: center;
    border: 2px solid #ffbfba;

`

export const CardHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ba0d00;
    padding: 1rem;
    background-color: #ffbfba;
`

export const CardDesc = styled.div`
    display: flex;
    padding: 1.25rem;
    
`
