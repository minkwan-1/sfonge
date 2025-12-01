import React from "react";
import { AppBar, Button, Box } from "@mui/material";
import { Logo, Navigation } from "./index";

const Header = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        minHeight: "80px",
        backgroundColor: "#ffffff",
        borderBottom: 1,
        borderColor: "grey.200",
        boxShadow: "none",
        zIndex: 999,
        justifyContent: "center",
        px: { xs: 3, sm: 2, md: 1 },
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          width: "100%",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Logo />

        <Navigation />
      </Box>
    </AppBar>
  );
};

export default Header;
