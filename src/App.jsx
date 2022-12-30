import GlobalStyles from "./components/styles/Global";
import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import GridContainer from "./components/GridContainer";

const theme = {
  color: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GridContainer>
        <GlobalStyles />
        <Header />
      </GridContainer>
    </ThemeProvider>
  );
}

export default App;
