import styled from "styled-components";

export const Container = styled.div`
  button {
    padding: 0.75rem 0.5rem;
    font: ${({ theme }) => theme.font.small};
    background: ${({ theme }) => theme.colors.primary};
    border: none;
    border-radius: 7px;
    color: ${({ theme }) => theme.colors.white};

    transition: background 0.2s;

    &:hover {
      background: rgba(125, 87, 173, 0.6);
    }
  }
`;
