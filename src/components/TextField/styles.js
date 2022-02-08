import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 17.5rem;

  textarea {
    width: 100%;
    height: 100%;
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    padding: 1rem;
    border-radius: 20px;
    background: transparent;
    font: ${({ theme }) => theme.font.normal};
    color: ${({ theme }) => theme.colors.secondary};
    outline: none;

    &:focus::placeholder {
      opacity: 0;
    }
  }
`;
