import React from "react";
import { Button, Box } from "@mui/material";

const navItems = [{ label: "프로젝트 소개", id: "about" }];

const Navigation = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
      {navItems.map((item) => (
        <Button
          key={item.id}
          sx={{
            color: "grey.700",
            fontWeight: "medium",
            textTransform: "none",
            "&:hover": { color: "black", backgroundColor: "transparent" },
          }}
        >
          {item.label}
        </Button>
      ))}
      <Button
        href="/app"
        variant="contained"
        disableElevation
        sx={{
          paddingX: 2.5,
          paddingY: 1.25,
          borderRadius: "12px",
          fontWeight: "medium",
          textTransform: "none",
          background: "linear-gradient(to right, #212121, #424242)",
          "&:hover": {
            boxShadow: 5,
            transform: "scale(1.05)",
            transition: "all 0.2s",
          },
        }}
      >
        시작하기
      </Button>
    </Box>
  );
};

export default Navigation;
