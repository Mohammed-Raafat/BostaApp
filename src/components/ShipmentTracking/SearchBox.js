import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { Grid, IconButton, Paper, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import LANGUAGE from "../../shared/localization/language";

const SearchBox = (props) => {
  const { title, variant } = props;
  const history = useHistory();
  const { EMPTY_FIELD_ERROR, NUMBERS_ONLY } = LANGUAGE.ERRORS;
  
  const [trackingNum, setTrackingNum] = useState("");
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const value = e.target.value;
    if (value === "" || Number(value)) {
      setTrackingNum(value);
      setError(null);
    } else {
      setError(NUMBERS_ONLY);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (trackingNum) {
      setError(null);
      history.push(`/tracking-shipment/${trackingNum}`);
    } else {
      setError(EMPTY_FIELD_ERROR);
    }
  };

  return (
    <Paper style={{ margin: "10px 0", padding: 10 }}>
      <Typography variant={variant} color="#ff0000">
        {title}
      </Typography>
      <Typography variant="h6">
        {LANGUAGE.SHIPMENT_TRACKING.WRITE_SHIPMENT_NUMBER_AND_TRACK_IT}
      </Typography>
      <form onSubmit={handleSubmit} style={{ margin: "10px 0" }}>
        <Grid container>
          <Grid item xs={9} sm={6}>
            <TextField
              label={LANGUAGE.SHIPMENT_TRACKING.TRACKING_NUMBER}
              variant="outlined"
              size="small"
              value={trackingNum}
              onChange={handleChange}
              error={Boolean(error)}
              helperText={error || " "}
              fullWidth
            />
          </Grid>
          <Grid item xs={3} sm={6}>
            <IconButton
              type="submit"
              style={{
                backgroundColor: "#ff0000",
                color: "#fff",
                margin: "0 10px",
              }}
            >
              <SearchIcon />
            </IconButton>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default SearchBox;