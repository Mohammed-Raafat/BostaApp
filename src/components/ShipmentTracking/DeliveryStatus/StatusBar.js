import React, { useState, useEffect } from "react";

import { Container, Grid, Box } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// import CreateIcon from "@mui/icons-material/Create";
// import StoreIcon from "@mui/icons-material/Store";
// import LocalShippingIcon from "@mui/icons-material/LocalShipping";
// import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";

import LANGUAGE from "../../../shared/localization/language";
import statusColors from "../../../shared/statusColors";

const StatusBar = (props) => {
  const { transitEvents } = props;

  const dir = LANGUAGE.language === "ar" ? "left" : "right";
  const definedStates = {
    DELIVERED: 3,
    DELIVERED_TO_SENDER: 3,
    OUT_FOR_DELIVERY: 2,
    PACKAGE_RECEIVED: 1,
    TICKET_CREATED: 0,
  };

  const [lastState, setLastState] = useState(
    transitEvents[transitEvents.length - 1].state
  );
  const [generalBgColor, setGeneralBgColor] = useState(statusColors[lastState]);

  useEffect(() => {
    if (!definedStates[lastState]) {
      const states = transitEvents.map(({ state }) => state);
      const keys = Object.keys(definedStates).map((state) => state);

      for (let i = 0; i < keys.length; i++) {
        const state = states.find((state) => state === definedStates[keys[i]]);
        if (state) {
          setLastState(state);
          break;
        } else if (i === keys.length - 1) { // Last element
          setLastState("TICKET_CREATED");
        }
      }

      setGeneralBgColor(statusColors.TICKET_CREATED);
    }
  }, []);

  const StatusItem = ({ hasFirst, state }) => {
    let done = false;
    let barBgColor = "#eee";
    if (definedStates[lastState] >= definedStates[state]) {
      done = true;
      barBgColor = generalBgColor;
    }
    return (
      <Grid item xs={4}>
        <Box
          style={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "1fr auto",
            alignItems: "center",
            position: "relative",
          }}
        >
          {hasFirst && (
            <CheckCircleIcon
              style={{
                color: generalBgColor,
                position: "absolute",
                [LANGUAGE.language === "ar" ? "right" : "left"]: -19,
              }}
            />
          )}
          <Box style={{ height: 8, backgroundColor: barBgColor }} />
          {done ? (
            <CheckCircleIcon
              style={{
                color: generalBgColor,
                position: "absolute",
                [dir]: -19,
              }}
            />
          ) : (
            <CircleIcon
              style={{ color: "#eee", position: "absolute", [dir]: -19 }}
            />
          )}
        </Box>
      </Grid>
    );
  };

  const StatusText = ({ text, style }) => {
    let color = "#ccc";
    if (definedStates[lastState] >= definedStates[text]) {
      color = "#000";
    }
    return (
      <Grid item xs={3} style={{ fontWeight: 700, color: color, ...style }}>
        {LANGUAGE.SHIPMENT_STATE[text]}
      </Grid>
    );
  };

  return (
    <Container style={{ padding: 35 }}>
      <Grid container spacing={2}>
        <StatusItem state="PACKAGE_RECEIVED" hasFirst />
        <StatusItem state="OUT_FOR_DELIVERY" />
        <StatusItem state="DELIVERED" />
      </Grid>
      <Grid container style={{ paddingTop: 20 }}>
        <StatusText text="TICKET_CREATED" />
        <StatusText
          text="PACKAGE_RECEIVED"
          style={{ textAlign: LANGUAGE.language === "ar" ? "right" : "left" }}
        />
        <StatusText
          text="OUT_FOR_DELIVERY"
          style={{ textAlign: LANGUAGE.language === "ar" ? "left" : "right" }}
        />
        <StatusText
          text="DELIVERED"
          style={{ textAlign: LANGUAGE.language === "ar" ? "left" : "right" }}
        />
      </Grid>
    </Container>
  );
};

export default StatusBar;