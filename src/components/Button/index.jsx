import { Container } from "./styles";

function Button(props) {
  return (
    <Container>
      <button>{props.children}</button>
    </Container>
  );
}

export default Button;
