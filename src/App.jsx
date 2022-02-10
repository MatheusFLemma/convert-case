import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global";
import theme from "./styles/theme";

import { saveAs } from "file-saver";

import Title from "./components/Title";
import { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");

  // Catching the textarea content and, insert into the state
  function handleChange(e) {
    let inputContent = e.target.value;

    setInputText(inputContent);
  }

  // Transform first letter to UpperCase
  function sentence() {
    const response = inputText.charAt(0).toUpperCase() + inputText.slice(1);

    setInputText(response);
  }

  // Transform text to lower case
  function lowerCase() {
    const response = inputText.toLowerCase();
    setInputText(response);
  }

  // Transform text to UPPER CASE
  function upperCase() {
    const response = inputText.toUpperCase();
    setInputText(response);
  }

  // Transform letter to Alternate format
  function alternateFormat() {
    const response = inputText
      .split("")
      .map((letter) => {
        return letter.toLowerCase() === letter
          ? letter.toUpperCase()
          : letter.toLowerCase();
      })
      .join("");

    setInputText(response);
  }

  // Transform text to Title Case
  function titleCase() {
    const response = inputText.split(" ");

    for (let index = 0; index < response.length; index++) {
      response[index] =
        response[index].charAt(0).toUpperCase() + response[index].slice(1);
    }

    const finalResponse = response.join(" ");
    setInputText(finalResponse);
  }

  // Download the text
  function download() {
    const blob = new Blob([inputText], { type: "text/plain;charset=utf-8" });
    saveAs(blob, `${inputText}-saved.txt`);
  }

  // Copy text to clipboard
  function clipboard() {
    navigator.clipboard.writeText(inputText);
  }

  // Clear the textarea
  function clear() {
    setInputText("");
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="container">
        <Title>Digite seu texto que nós transformamos ele</Title>
        <textarea
          placeholder="Digite seu texto"
          value={inputText}
          onChange={handleChange}
        ></textarea>

        <div className="button__container">
          <button onClick={sentence}>Formato frase</button>
          <button onClick={lowerCase}>minúsculas</button>
          <button onClick={upperCase}>MAIÚSCULAS</button>
          <button onClick={alternateFormat}>fOrMaTo aLtErNaDo</button>
          <button onClick={titleCase}>Formato Título</button>
          <button onClick={download}>Baixar</button>
          <button onClick={clipboard}>Copiar para o Clipboard</button>
          <button onClick={clear}>Limpar</button>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
