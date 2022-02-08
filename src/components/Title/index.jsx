import { Container } from "./styles";

function Title(props) {
  return (
    <Container>
      <h1>{props.children}</h1>
    </Container>
  );
}

export default Title;
