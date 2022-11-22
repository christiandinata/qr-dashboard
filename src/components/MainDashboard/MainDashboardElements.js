import styled from "@emotion/styled";
import Tooltip from '@mui/material/Tooltip';
import { COLORS } from "../../constants/colors";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0.8;
    padding: 1rem;
`

export const Head = styled.div`
    display: flex;
    height: 32px;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`

export const Notification = styled.div`
    display: flex;
`

export const StyledTooltip = styled(({ className, ...other }) => (
    <Tooltip classes={{ tooltip: className, tooltipArrow: className }} {...other} />
  ))`
    background-color: ${COLORS.darkerbackground};
    display: flex;
  `;


export const TooltipContent = styled.div`
    display: flex;
    color: #000;
    font-size: 1rem;
    background-color: ${COLORS.darkerbackground};
`

export const NotificationButton = styled.div`
    display: flex;
    cursor: pointer;
    border-radius: 50%;
    background-color: ${COLORS.background};
    transition: 0.3s all;
    padding: 0.25rem;

    &:hover {
        background-color: ${COLORS.darkerbackground};
    }
`

export const HeadNav = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`

export const HeadNavInfo = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
`

export const Name = styled.div``

export const DropdownIcon = styled.div`
    cursor: pointer;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 0.1rem;
    transition: 0.3s all;

    &:hover {
        background-color: ${COLORS.darkerbackground};
    }
`

export const DropdownMenu = styled.div`
    display: ${({expand}) => expand ? "flex" : "none"};
    width: 128px;
    flex-direction: column;
    position: absolute;
    top: 32px;
    right: 8px;
    border-radius: 4px;
    text-align: right;
    background-color: ${COLORS.darkerbackground};
`

export const Menu = styled.div`
    font-size: 0.75rem;
    padding-right: 0.5rem;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    cursor: pointer;

    &:hover{
        box-shadow: 0px 0px 16px 0px rgba(0,0,0,0.75);
        -webkit-box-shadow: 0px 0px 16px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 0px 16px 0px rgba(0,0,0,0.75);
    }

    &:nth-child(1){
        border: 2px solid #000;
        border-radius: 4px 4px 0 0;
    }

    &:nth-child(2){
        border-right: 2px solid #000;
        border-bottom: 2px solid #000;
        border-left: 2px solid #000;
        border-radius: 0 0 4px 4px;
    }
`

export const DateSection = styled.div`
    margin-top: 1rem;
    font-weight: 600;
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
    background-color: ${COLORS.background};
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
