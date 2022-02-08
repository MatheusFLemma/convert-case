import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global";
import theme from "./styles/theme";

import Button from "./components/Button";
import Title from "./components/Title";
import TextField from "./components/TextField";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="container">
        <Title>Digite seu texto que nós transformamos ele</Title>
        <TextField />
        <Button>Button style</Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
