import React from "react";
import { NavLink } from "react-router-dom";

import { Box, Divider, Paper, MenuList, MenuItem } from "@mui/material";

const SmallDeviceMenu = (props) => {
  const { items } = props;

  const renderItems = () => {
    return items.map((item, index) => (
      <Box key={index} className="navbar-item navbar-item-text">
        {item.onClick ? (
          <Box
            className="navbar-link navbar-language"
            style={{ fontWeight: "normal" }}
            onClick={item.onClick}
          >
            <MenuItem>{item.title}</MenuItem>
          </Box>
        ) : (
          <NavLink
            activeClassName="navbar-item-active"
            className="navbar-link"
            style={{ fontWeight: "normal" }}
            exact
            to={item.link}
          >
            <MenuItem>{item.title}</MenuItem>
          </NavLink>
        )}
        {index !== items.length - 1 && <Divider />}
      </Box>
    ));
  };

  return (
    <Paper>
      <MenuList>{renderItems()}</MenuList>
    </Paper>
  );
};

export default SmallDeviceMenu;
