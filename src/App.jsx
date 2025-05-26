import "./App.css";
import Home from "./pages/Home";
import { lightTheme } from "./theme/light";
import { darkTheme } from "./theme/dark";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { ThemeContext } from "./context/ThemeContext";
import useDarkmode from "./hooks/useDarkmode";

function App() {
  const [isDarkMode, toggleTheme] = useDarkmode();

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
        <Home />
        <GlobalStyles />
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export default App;
