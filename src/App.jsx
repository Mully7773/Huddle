import GlobalStyles from "./components/styles/Global";
import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import GridContainer from "./components/GridContainer";
import Features from "./components/Features";
import Footer from "./components/Footer";

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
        <Features />
        <Footer />
      </GridContainer>
    </ThemeProvider>
  );
}

export default App;
