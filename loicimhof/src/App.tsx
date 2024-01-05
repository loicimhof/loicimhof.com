import logo from "./logo.svg";
import "./App.css";
import SkillsOverview from "./components/Skills";
import { createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import About from "./components/About";
import Resume from "./components/Resume";
import ProjectsOverview from "./components/Projects";
import Hello from "./components/Hello";

const theme = createTheme({
  primaryColor: "teal",
  fontFamily: "sans-serif",
});

function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <div className="App">
        <header className="App-header">
          <Hello />
          <h1>Loïc Imhof</h1>
          <About />
          <Resume />
          <SkillsOverview />
          <ProjectsOverview />
        </header>
      </div>
    </MantineProvider>
  );
}

export default App;
