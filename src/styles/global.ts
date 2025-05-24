import { createGlobalStyle, styled } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: sans-serif;
    }

    body {
        background-color: #e8eef0;
    }
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    width: 100%;
`;