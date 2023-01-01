import GlobalStyles from "./components/styles/Global";
import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import GridContainer from "./components/GridContainer";
import Features from "./components/Features";
import Footer from "./components/Footer";
import CallToAction from "./components/CallToAction";

const theme = {
  color: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
    primary: "#ff52bf",
    secondary: "#003333",
    paragraphCard: "#808d99",
  },

  font: {
    headings: "'Poppins', sans-serif",
    bodyCTA: "'Open Sans', sans-serif",
  },

  borderRadius: {
    cards: "1.6rem",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GridContainer>
        <GlobalStyles />
        <Header />
        <Features />
        <CallToAction />
        <Footer />
      </GridContainer>
    </ThemeProvider>
  );
}

export default App;
