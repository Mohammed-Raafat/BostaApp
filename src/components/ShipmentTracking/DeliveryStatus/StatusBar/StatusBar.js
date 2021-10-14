import React, { useState, useEffect } from "react";

import { Container, Hidden } from "@mui/material";

import STATUS_COLORS from "../../../../shared/statusColors";
import DEFINED_STATUSES from "../../../../shared/definedStatus";

import StatusBarHorizontal from "./StatusBarHorizontal";
import StatusBarVertical from "./StatusBarVertical";

const StatusBar = (props) => {
  const { transitEvents } = props;

  const [lastState, setLastState] = useState(transitEvents[transitEvents.length - 1].state);
  const [generalBgColor, setGeneralBgColor] = useState(STATUS_COLORS[lastState]);

  const statusBarProps = {
    transitEvents,
    generalBgColor,
    lastState,
  };

  useEffect(() => {
    if (!DEFINED_STATUSES[lastState]) {
      const states = transitEvents.map(({ state }) => state);
      const keys = Object.keys(DEFINED_STATUSES).map((state) => state);

      for (let i = 0; i < keys.length; i++) {
        const state = states.find(
          (state) => state === DEFINED_STATUSES[keys[i]]
        );
        if (state) {
          setLastState(state);
          break;
        } else if (i === keys.length - 1) {
          // Last element
          setLastState("TICKET_CREATED");
        }
      }

      setGeneralBgColor(STATUS_COLORS.TICKET_CREATED);
    }
  }, []);

  return (
    <Container style={{ padding: '24px 0' }}>
      <Hidden smDown>
        <StatusBarHorizontal {...statusBarProps} />
      </Hidden>
      <Hidden smUp>
        <StatusBarVertical {...statusBarProps} />
      </Hidden>
    </Container>
  );
};

export default StatusBar;