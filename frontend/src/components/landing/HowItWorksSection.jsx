import React from "react";
import { Box, Typography } from "@mui/material";

const HowItWorksSection = () => {
  const steps = [
    {
      step: 1,
      title: "지갑 연결",
      description:
        "MetaMask를 연결하고 Monad Testnet으로 전환하세요. 처음이라면 5분이면 충분합니다.",
      hasNextLine: true,
    },
    {
      step: 2,
      title: "프로젝트 탐색",
      description:
        "다양한 스타트업 프로젝트를 둘러보고 마음에 드는 아이디어를 찾아보세요. 카테고리별로 쉽게 찾을 수 있습니다.",
      hasNextLine: true,
    },
    {
      step: 3,
      title: "투자 시작",
      description:
        "원하는 금액을 입력하고 투자하세요. 블록체인에 기록된 투명한 거래로 안전하게 참여할 수 있습니다.",
      hasNextLine: false,
    },
  ];

  return (
    <Box
      component="section"
      id="how"
      sx={{
        py: { xs: 10, md: 16 },
        px: 3,
        background: "linear-gradient(to bottom right, #fafafa, #ffffff)",
      }}
    >
      <Box sx={{ maxWidth: "1200px", mx: "auto" }}>
        <Box sx={{ maxWidth: "768px", mx: "auto", textAlign: "center", mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2.25rem", md: "3rem" },
              fontWeight: "bold",
              color: "text.primary",
              mb: 3,
            }}
          >
            어떻게 시작하나요?
          </Typography>
          <Typography
            sx={{
              fontSize: "1.125rem",
              color: "grey.600",
            }}
          >
            3단계로 간단하게 시작하는 Sfonge
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: 4,
          }}
        >
          {steps.map((step, index) => (
            <Box
              key={index}
              sx={{
                position: "relative",
              }}
            >
              <Box sx={{ textAlign: "center" }}>
                <Box
                  sx={{
                    display: "inline-flex",
                    width: 64,
                    height: 64,

                    background:
                      "linear-gradient(to bottom right, #212121, #424242)",
                    borderRadius: "16px",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 3,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                      color: "white",
                    }}
                  >
                    {step.step}
                  </Typography>
                </Box>

                <Typography
                  variant="h3"
                  sx={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    color: "text.primary",
                    mb: 2,
                  }}
                >
                  {step.title}
                </Typography>

                <Typography
                  sx={{
                    color: "grey.600",
                    lineHeight: 1.6,
                  }}
                >
                  {step.description}
                </Typography>
              </Box>

              {step.hasNextLine && (
                <Box
                  sx={{
                    display: { xs: "none", md: "block" },
                    position: "absolute",
                    top: 32,
                    right: -16,
                    width: 32,
                    height: 2,
                    bgcolor: "grey.300",
                    transform: "translateY(-50%)",
                  }}
                />
              )}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default HowItWorksSection;
