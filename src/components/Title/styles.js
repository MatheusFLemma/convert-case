import styled from "styled-components";

export const Container = styled.div`
  h1 {
    font: ${({ theme }) => theme.font.title};
    color: ${({ theme }) => theme.colors.white};
  }
`;
