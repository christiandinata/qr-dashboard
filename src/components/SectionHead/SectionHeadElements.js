import styled from "@emotion/styled";
import Tooltip from '@mui/material/Tooltip';
import { COLORS } from "../../constants/colors";

export const Head = styled.div`
    display: flex;
    height: 32px;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
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
    background-color: ${COLORS.background};
`

export const NotificationButton = styled.div`
    display: flex;
    cursor: pointer;
    border-radius: 50%;
    border: 2px solid #000;
    background-color: ${COLORS.darkerbackground};
    transition: 0.3s all;
    padding: 0.25rem;
    box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.75);
    -webkit-box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.75);

    &:hover {
        // background-color: ${COLORS.background};
        border: 2px solid #fff;
        color: #fff;
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

export const Name = styled.div`
    font-weight: 600;
`

export const DropdownIcon = styled.div`
    cursor: pointer;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 0.1rem;
    transition: 0.3s all;

    &:hover {
        background-color: ${COLORS.background};
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
        border-left: 2px solid #000;
    }

    &:nth-child(3){
        border: 2px solid #000;
        border-radius: 0 0 4px 4px;
    }
`