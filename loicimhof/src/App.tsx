import logo from "./logo.svg";
import "./App.css";
import SkillsOverview from "./components/Skills";
import { createTheme, Grid, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import About from "./components/About";
import Resume from "./components/Resume";

const theme = createTheme({
  primaryColor: "teal",
  fontFamily: "sans-serif",
});

function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <div className="App">
        <header className="App-header">
          <h1>Loïc Imhof</h1>
          <About />
          <Resume />

          <SkillsOverview />
        </header>
      </div>
    </MantineProvider>
  );
}

export default App;
