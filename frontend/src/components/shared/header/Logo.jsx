import React from "react";
import { Typography, Box } from "@mui/material";
import WaterDropIcon from "@mui/icons-material/WaterDrop";

const Logo = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
      <Box
        sx={{
          width: 40,
          height: 40,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "16px",
          transform: "rotate(45deg)",
          boxShadow: 3,
          background:
            "linear-gradient(to bottom right, #212121, #424242, #616161)",
        }}
      >
        <WaterDropIcon
          sx={{
            width: 20,
            height: 20,
            color: "white",
            transform: "rotate(-45deg)",
          }}
        />
      </Box>
      <Typography
        variant="h6"
        sx={{ fontWeight: "bold", color: "black", fontSize: "1.5rem" }}
      >
        Sfonge
      </Typography>
    </Box>
  );
};

export default Logo;
