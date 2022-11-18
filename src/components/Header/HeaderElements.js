import styled from '@emotion/styled'
import { COLORS } from '../../constants/colors' 

export const Container = styled.div`
    display: flex;
    padding: 1rem;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 72px;
    background: rgb(255,0,0);
    background: linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,0,0,1) 0%, rgba(133,0,0,1) 100%);
`

export const Logo = styled.div`

    @media screen and (max-width: 768px) {
        width: 150px;
        height: 50px;
    }

    img {
        @media screen and (max-width: 768px) {
            width: 180px;
            height: 50px;
        }
    }
`

export const Title = styled.div`
    color: #2c2c2c;
    font-weight: 700;
    font-size: 1.5rem;
    color: #fff;

    @media screen and (max-width: 768px) {
        font-size: 1rem;
    }
`