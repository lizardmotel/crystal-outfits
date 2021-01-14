import styled from 'styled-components';

export const HomeButton = styled.button`
    text-transform: capitalize;
    font-size: 1.4rem;
    background: transparent;
    border: 1px solid black;
    color: var(--mainRed);
    border-color: var(--mainRed);
    border-radius: 0.2rem;
    padding: 0.2rem 0.5rem;
    transition: all 0.3s linear;
    &:hover {
        background: var(--mainRed);
        color: var(--mainWhite);
    }
    &:focus {
        outline: none;
    }
`

export const NavBurger = styled.button`
    font-size: 2.2rem;
    background: transparent;
    border: none;
    color: var(--mainWhite);
    transition: all 0.3s linear;
    &:focus {
        outline: none;
    }
`

export const BurgerCrossButton = styled.button`
    border: medium solid transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
    background: transparent;
    color: var(--mainWhite);
    transition: all 0.2s ease-in-out;
    &:focus {
        outline: none;
    }
    &:hover {
        border: medium solid var(--mainWhite);
    }
`

export const Episode = styled.button`
    font-size: 1.3rem;
    background: transparent;

`