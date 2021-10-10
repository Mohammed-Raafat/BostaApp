import React from "react";

import { Container } from "@mui/material";

import LANGUAGE from "../shared/localization/language";
import SearchBox from "./ShipmentTracking/SearchBox";

const Home = () => {
  return (
    <Container maxWidth="sm">
      <SearchBox
        title={LANGUAGE.SHIPMENT_TRACKING.TRACK_YOUR_SHIPMENT}
        variant="h4"
      />
    </Container>
  );
};

export default Home;