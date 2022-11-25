import styled from '@emotion/styled'

export const SetButton = styled.button`
    display: flex;
    padding: 0.25rem 0.5rem;
    margin: 0.3rem 0;
    border-radius: 4px;
    border: none;
    color: #fff;
    background-color: red;
    cursor: pointer;
    transition: 0.3s all;

    &:hover {
        color: red;
        background-color: #fff;
    }
`