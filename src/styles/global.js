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
    padding: 0.75rem 0.5rem;
    font: ${({ theme }) => theme.font.small};
    font-size: 0.75rem;
    background: ${({ theme }) => theme.colors.primary};
    border: none;
    border-radius: 7px;
    color: ${({ theme }) => theme.colors.white};

    transition: background 0.2s;

    &:hover {
      background: rgba(125, 87, 173, 0.6);
    }
  }

  textarea {
    width: 100%;
    height: 40%;
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    padding: 1rem;
    resize: none;
    border-radius: 20px;
    background: transparent;
    font: ${({ theme }) => theme.font.normal};
    color: ${({ theme }) => theme.colors.secondary};
    outline: none;

    &:focus::placeholder {
      opacity: 0;
    }
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
    height: 100%;
    padding: 0 1rem;
  }

  .button__container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
`;
