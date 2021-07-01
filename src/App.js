import React, {useState} from "react"

import Cabecalho from "./Components/Cabecalho"
import Container from "./Components/Container"
import ThemeSwitcher from './Components/ThemeSwitcher/'
import {GlobalStyle} from "./Components/GlobalStyle"
import {ThemeProvider} from 'styled-components'
import {lightTheme, darkTheme} from './Components/UI/themes'
import {BtnTheme} from './Components/UI/'

function App() {
  const [theme, setTheme] = useState(true)
  const themeToggle = () =>{
    setTheme((theme) => !theme)
  }
  return (
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
      <GlobalStyle />
      <BtnTheme onClick={themeToggle}>
        <ThemeSwitcher theme={theme} />
      </BtnTheme>
      <Cabecalho />
      <Container />
    </ThemeProvider>
  );
}

export default App;
