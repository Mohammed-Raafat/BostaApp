import React from "react";

import { Container, Grid, Divider, Hidden, Box } from "@mui/material";

import "./DeliveryStatus.css";
import {
  getDay,
  getDate_DD_MM_YY,
  getTime,
  getDate_DD_Month_YY,
} from "../../../shared/helperFunctions";
import LANGUAGE from "../../../shared/localization/language";
import StatusBar from "./StatusBar";
import statusColors from "../../../shared/statusColors";

const DeliveryStatus = (props) => {
  const { shipmentDetails, transitEvents } = props;
  
  const lastDate = new Date(shipmentDetails.CurrentStatus.timestamp);
  const promiseDate = shipmentDetails.PromisedDate
    ? getDate_DD_Month_YY(new Date(shipmentDetails.PromisedDate))
    : LANGUAGE.SHIPMENT_TRACKING.NOT_DETERMINED;
  const lastUpdate = `${getDay(lastDate)} ${getDate_DD_MM_YY(lastDate)} ${
    LANGUAGE.TIME_AT
  } ${getTime(lastDate)}`;
  const sellerName = LANGUAGE.SHIPMENT_TRACKING.NOT_DETERMINED;

  const Item = ({ title, data, style }) => {
    return (
      <Grid
        item
        xs={12}
        sm={6}
        lg={3}
        className="item"
        key={title}
        style={{ textAlign: LANGUAGE.language === "ar" ? "right" : "left" }}
      >
        <Box className="title">{title}</Box>
        <Box className="data" style={style}>
          {data}
        </Box>
      </Grid>
    );
  };
  return (
    <Container
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: 0,
        marginBottom: 50,
      }}
    >
      <Grid container style={{ padding: 24 }}>
        <Item
          title={`${LANGUAGE.SHIPMENT_TRACKING.TRACKING_NUMBER} ${shipmentDetails.TrackingNumber}`}
          data={LANGUAGE.SHIPMENT_STATE[shipmentDetails.CurrentStatus.state]}
          style={{ color: statusColors[shipmentDetails.CurrentStatus.state] }}
        />
        <Item
          title={LANGUAGE.SHIPMENT_TRACKING.LAST_UPDATE}
          data={lastUpdate}
        />
        <Item
          title={LANGUAGE.SHIPMENT_TRACKING.SELLER_NAME}
          data={sellerName}
        />
        <Item
          title={LANGUAGE.SHIPMENT_TRACKING.PROMISED_DATE}
          data={promiseDate}
        />
      </Grid>
      <Hidden smDown>
        <Divider variant="fullWidth" />
        <Grid container>
          <StatusBar transitEvents={transitEvents} />
        </Grid>
      </Hidden>
    </Container>
  );
};

export default DeliveryStatus;
