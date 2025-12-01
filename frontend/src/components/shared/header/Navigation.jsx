import React from "react";
import { Button, Box } from "@mui/material";
import { useGoHome } from "../../landing/hooks/useGoHome";

const Navigation = () => {
  const goHome = useGoHome();

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Button
        variant="contained"
        disableElevation
        onClick={goHome}
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
