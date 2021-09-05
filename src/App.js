import React, { useEffect } from "react";
import { CssBaseline, ThemeProvider, Grid } from "@material-ui/core";
import "react-perfect-scrollbar/dist/css/styles.css";
import { BuildTheme } from "./assets/global/Theme-variable";
import BaseCard from "./components/base-card/BaseCard";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/home/Home";

const ZOHO = window.ZOHO;
const App = () => {
  const customizer = {
    direction: "ltr",
    theme: "PURPLE_THEME",
    activeMode: "light",
  };
  const theme = BuildTheme(customizer);
  useEffect(() => {
    ZOHO.embeddedApp.on("PageLoad", function (data) {});
    // ZOHO.embeddedApp.init();
  }, []);
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Grid container spacing={1}>
          <Switch>
            <Route path="/">
                <Home/>
            </Route>
            <Route path="/">
             
            </Route>
          </Switch>
        </Grid>
      </ThemeProvider>
    </Router>
  );
};

export default App;
