import React from "react";

// React Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import Header from "./Components/Header";
import Footer from "./Components/Footer";

// Pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import NotFound from "./Pages/NotFound";

// Config
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Config/GlobalStyles";
import { lightTheme, darkTheme } from "./Config/Themes";
import { useDarkMode } from "./Config/UseDarkMode";

export default () => {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Router>
        <Header theme={theme} toggleTheme={themeToggler} />
        <main id="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};
