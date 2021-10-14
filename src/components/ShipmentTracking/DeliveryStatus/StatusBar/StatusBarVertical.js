import React from "react";

import { Container, Box, Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// import CreateIcon from "@mui/icons-material/Create";
// import StoreIcon from "@mui/icons-material/Store";
// import LocalShippingIcon from "@mui/icons-material/LocalShipping";
// import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";

import LANGUAGE from "../../../../shared/localization/language";
import DEFINED_STATUSES from "../../../../shared/definedStatus";

const StatusBarHorizontal = (props) => {
  const { generalBgColor, lastState } = props;

  const StatusItem = ({ state, text }) => {
    let done = false;
    if (DEFINED_STATUSES[lastState] >= DEFINED_STATUSES[state]) {
      done = true;
    }

    return (
      <Box style={{ margin: "5px 0" }}>
        {done ? (
          <React.Fragment>
            <CheckCircleIcon
              style={{
                color: generalBgColor,
                verticalAlign: "middle",
                margin: "0 3px",
              }}
            />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <CircleIcon
              style={{
                color: "#ccc",
                verticalAlign: "middle",
                margin: "0 3px",
              }}
            />
          </React.Fragment>
        )}

        <Typography
          style={{
            display: "inline",
            color: `${done ? "#000" : "#ccc"}`,
            fontWeight: "bold",
          }}
        >
          {LANGUAGE.SHIPMENT_STATE[text]}
        </Typography>
      </Box>
    );
  };

  return (
    <Container>
      <StatusItem state="TICKET_CREATED" text="TICKET_CREATED" />
      <StatusItem state="PACKAGE_RECEIVED" text="PACKAGE_RECEIVED" />
      <StatusItem state="OUT_FOR_DELIVERY" text="OUT_FOR_DELIVERY" />
      <StatusItem state="DELIVERED" text="DELIVERED" />
    </Container>
  );
};

export default StatusBarHorizontal;