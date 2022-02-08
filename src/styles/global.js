import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    background: ${({ theme }) => theme.colors.dark};
    color: ${({ theme }) => theme.colors.white};
  }

  div#root {
    width: 100%;
    height: 100%;
  }

  ul, li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
  
  button {
    cursor: pointer;
  }

  .container {
    width: 100%;
    max-width: 65.5rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: space-around;
    height: 80%;
    padding: 0 1rem;
  }
`;
