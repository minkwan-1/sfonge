import React from "react";
import { Box, Button, useTheme, Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai/react";
import { isConnectedAtom } from "../../store/walletAtom";

const TabNavigation = ({ activeTab, setActiveTab, setSearchTerm }) => {
  const [isConnected] = useAtom(isConnectedAtom);
  const theme = useTheme();
  const navigate = useNavigate();

  const btnStyle = (active) => ({
    px: 3,
    py: 1.5,
    borderRadius: "12px",
    fontWeight: "medium",
    textTransform: "none",
    transition: "all 0.2s",
    ...(active
      ? {
          background: "linear-gradient(to right, #212121, #424242)",
          color: "white",
          boxShadow: theme.shadows[4],
        }
      : {
          color: "grey.600",
          borderColor: "grey.200",
          "&:hover": { bgcolor: "grey.50", borderColor: "grey.300" },

          opacity: !isConnected ? 0.6 : 1,
          cursor: !isConnected ? "not-allowed" : "pointer",
        }),
  });

  const handleCreateProject = () => {
    if (isConnected) {
      navigate("/create-project");
    }
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 5 }}>
      <Button
        onClick={() => {
          setActiveTab("explore");
          setSearchTerm("");
        }}
        variant={activeTab === "explore" ? "contained" : "outlined"}
        disableElevation
        sx={btnStyle(activeTab === "explore")}
      >
        탐색 모드
      </Button>
      <Button
        onClick={() => setActiveTab("search")}
        variant={activeTab === "search" ? "contained" : "outlined"}
        disableElevation
        sx={btnStyle(activeTab === "search")}
      >
        검색 모드
      </Button>

      <Box sx={{ ml: "auto", display: "flex", alignItems: "center", gap: 2 }}>
        <Tooltip
          title="지갑 연결 후 사용 가능해요"
          disableFocusListener={isConnected}
          disableHoverListener={isConnected}
          disableTouchListener={isConnected}
          arrow
        >
          <Box>
            <Button
              onClick={handleCreateProject}
              variant="outlined"
              disabled={!isConnected}
              sx={{
                ...btnStyle(false),
                pointerEvents: isConnected ? "auto" : "none",
              }}
            >
              프로젝트 생성하기
            </Button>
          </Box>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default TabNavigation;
