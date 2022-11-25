import styled from '@emotion/styled'
import { COLORS } from '../../constants/colors'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    flex: 0.2;
    background-color: ${COLORS.background};
    height: 100%;
    padding: 1rem;
`

export const Greetings = styled.div`
    display: flex;
    width: 100%;
    font-size: 1.5rem;
    font-weight: 700;

    @media screen and (max-width: 768px) {
        justify-content: center;
        align-items: center;
    }
`

export const Profile = styled.div`
    display: flex;
    margin-top: 0.5rem;

    @media screen and (max-width: 768px) {
        width: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

export const ProfileImg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 0.15;

    @media screen and (max-width: 768px) {
        justify-content: center;
        align-items: center;
    }
`

export const ProfileInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
    justify-content: center;
    align-items: flex-start;
    flex: 0.85;
    gap: 0.25rem;

    p:nth-child(1) {
        font-weight: 600;
    }

    p:nth-child(2) {
        color: blue;
        cursor: pointer;
        font-size: 0.75rem;
        transition: 0.3s all;

        &:hover {
            color: #1c1c1c;
        }

    }

    @media screen and (max-width: 768px) {
        justify-content: center;
        align-items: center;
        margin-left: 0;
    }
`

export const NavGroup = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-top: 2.5rem;
    gap: 0.75rem;
`

export const Nav = styled.div`
    display: flex;
    width: 100%;
    padding: 0.3rem 0 0.3rem 0.25rem;
    align-items: center;
    border-radius: 4px;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s all;

    color: ${({active}) => active ? "red" : "#000"};
    background-color: ${({active}) => active && `${COLORS.darkerbackground}`};

    &:hover {
        color: #ff0000;
        background-color: ${COLORS.darkerbackground}
    }
`

export const NavIcon = styled.div`
    display: flex;
`

export const NavLink = styled.div`
    display: flex;
    margin-left: 1rem;
`