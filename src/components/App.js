import React from "react";
// import { Route, Redirect, Switch } from "react-router-dom";

import { Box } from "@mui/material";

// import { Container, createTheme, ThemeProvider, Box } from "@mui/material";
// import rtlPlugin from "stylis-plugin-rtl";
// import { CacheProvider } from "@emotion/react";
// import createCache from "@emotion/cache";

import "./App.css";

import Navbar from "./Navbar/Navbar";
import Home from "./Home";
// import ShipmentTracking from "./ShipmentTracking/ShipmentTracking";
import Footer from "./Footer";

import LANGUAGE from "../shared/localization/language";

// Create rtl cache
// const cacheRtl = createCache({
//   key: "muirtl",
//   stylisPlugins: [rtlPlugin],
// });

// // Create ltr cache
// const cacheLtr = createCache({
//   key: "muiltr",
// });

// const theme = createTheme({
//   direction: LANGUAGE.dir,
//   typography: {
//     fontFamily: "'Cairo', sans-serif",
//   },
// });

const App = () => {
  return (
    <React.Fragment>
    {/* <ThemeProvider theme={theme}>
      <CacheProvider value={LANGUAGE.dir === "rtl" ? cacheRtl : cacheLtr}> */}
        <Box id="app" dir={LANGUAGE.dir}>
          <Navbar />

          {/* <Container className="main-container">
            <Switch>
              <Route
                path="/tracking-shipment/:trackingNum?"
                exact
                component={ShipmentTracking}
              />
              <Route path="/" exact component={Home} />
              <Route render={() => <Redirect to="/" />} />
            </Switch>
          </Container> */}
          <Home />
          <Footer />
         </Box>
      {/*</CacheProvider>
    </ThemeProvider> */}
    </React.Fragment>
  );
};

export default App;