// import React, { useState, useEffect, useRef } from "react";
import React from "react";

// import { Link, NavLink } from "react-router-dom";

// import { Grid, Divider, Hidden, IconButton, Box, AppBar } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";

// // import SmallDeviceMenu from "./SmallDeviceMenu";
// import LANGUAGE from "../../shared/localization/language";

// const bostaLogo = require(`../../assets/images/bosta_logo_${
//   LANGUAGE.language === "ar" ? "ar" : "en"
// }.svg`).default;


const Navbar = () => {
   const [openMenu, setOpenMenu] = React.useState(false);

  /*const navbarRef = useRef();
  const { MAIN, PRICES, CALL_SALES, TRACK_SHIPMENT, LOGIN } = LANGUAGE.MENU;

  const handleLanguageClick = () => {
    if (LANGUAGE.language === "ar") {
      localStorage.setItem("userLanguage", "en");
    } else if (LANGUAGE.language === "en") {
      localStorage.setItem("userLanguage", "ar");
    }
    window.location.reload(false);
  };

  const menuItems = [
    {
      title: MAIN,
      link: "/",
    },
    {
      title: PRICES,
      link: "/prices",
    },
    {
      title: CALL_SALES,
      link: "/call-sales",
    },
    {
      title: TRACK_SHIPMENT,
      link: "/tracking-shipment",
    },
    {
      title: LOGIN,
      link: "/login",
    },
    {
      title: LANGUAGE.language === "ar" ? "ENG" : "عربي",
      onClick: handleLanguageClick,
    },
  ];

  const handleMenuIconClick = () => {
    setOpenMenu(!openMenu);
  };

  const closeMenu = (e) => {
    if (
      openMenu &&
      navbarRef.current &&
      !navbarRef.current.contains(e.target)
    ) {
      setOpenMenu(false);
    }
  };

  useEffect(() => {
    if (openMenu) {
      document.addEventListener("click", closeMenu);

      return () => {
        document.removeEventListener("click", closeMenu);
      };
    }
  }, [openMenu]); */

  return (
    <div>Navbar</div>
    /* <AppBar position="fixed" className="navbar" ref={navbarRef}>
      <Box style={{ borderBottom: "1px solid #ddd", padding: "18px 0" }}>
        <Grid container maxWidth="lg" style={{ margin: "auto" }}>
          <Grid container justifyContent="flex-start" item xs={6} md={2}>
            <Link to="/" className="navbar-item">
              <img className="navbar-logo" src={bostaLogo} alt="bosta-logo" />
            </Link>
          </Grid>
          <Hidden mdDown>
            <Grid container justifyContent="center" item md={5}>
              <NavLink
                activeClassName="navbar-item-active"
                className="navbar-item navbar-link navbar-item-text"
                exact
                to="/"
              >
                {MAIN}
              </NavLink>
              <NavLink
                activeClassName="navbar-item-active"
                className="navbar-item navbar-link navbar-item-text"
                exact
                to="/prices"
              >
                {PRICES}
              </NavLink>
              <NavLink
                activeClassName="navbar-item-active"
                className="navbar-item navbar-link navbar-item-text"
                exact
                to="/call-sales"
              >
                {CALL_SALES}
              </NavLink>
            </Grid>
            <Grid container justifyContent="flex-end" item md={5}>
              <NavLink
                activeClassName="navbar-item-active"
                className="navbar-item navbar-link navbar-item-text"
                to="/tracking-shipment"
              >
                {TRACK_SHIPMENT}
              </NavLink>
              <Divider orientation="vertical" />
              <NavLink
                activeClassName="navbar-item-active"
                className="navbar-item navbar-link navbar-item-text"
                exact
                to="/login"
              >
                {LOGIN}
              </NavLink>
              <Box
                className="navbar-item navbar-link navbar-language"
                onClick={handleLanguageClick}
              >
                {LANGUAGE.language === "ar" ? "ENG" : "عربي"}
              </Box>
            </Grid>
          </Hidden>
          <Hidden mdUp>
            <Grid container justifyContent="flex-end" item xs={6}>
              <IconButton
                aria-label="menu"
                size="large"
                className="navbar-menu-icon"
                onClick={handleMenuIconClick}
              >
                <MenuIcon />
              </IconButton>
            </Grid>
          </Hidden>
        </Grid>
      </Box>
      <Hidden mdUp>{openMenu && <SmallDeviceMenu items={menuItems} />}</Hidden>
    </AppBar> */
  );
};

export default Navbar;