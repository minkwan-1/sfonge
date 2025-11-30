import React from "react";
import { Box, Typography } from "@mui/material";
import SecurityIcon from "@mui/icons-material/Security";
import BoltIcon from "@mui/icons-material/Bolt";
import PublicIcon from "@mui/icons-material/Public";

const AboutSection = () => {
  const features = [
    {
      icon: SecurityIcon,
      title: "투명한 자금 관리",
      description:
        "모든 거래가 블록체인에 기록되어 누구나 확인할 수 있습니다. 스마트 컨트랙트로 자동화된 안전한 자금 관리를 제공합니다.",
    },
    {
      icon: BoltIcon,
      title: "낮은 수수료",
      description:
        "중개자 없이 직접 연결되어 최소한의 가스비만 지불합니다. 더 많은 자금이 스타트업에게 직접 전달됩니다.",
    },
    {
      icon: PublicIcon,
      title: "글로벌 접근성",
      description:
        "국경 없이 전 세계 누구나 투자하고 펀딩받을 수 있습니다. 지갑만 있다면 5분 안에 시작할 수 있습니다.",
    },
  ];

  return (
    <Box
      component="section"
      id="about"
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
            왜 Sfonge일까요?
          </Typography>
          <Typography
            sx={{
              fontSize: "1.125rem",
              color: "grey.600",
              lineHeight: 1.6,
            }}
          >
            기존 크라우드펀딩 플랫폼의 높은 수수료와 불투명한 자금 관리에
            지치셨나요?
            <br />
            Sfonge는 블록체인 기술로 이 모든 문제를 해결합니다.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: 4,
          }}
        >
          {features.map((feature, index) => (
            <Box
              key={index}
              className="group"
              sx={{
                p: 4,
                bgcolor: "white",
                border: "2px solid",
                borderColor: "grey.200",
                borderRadius: "16px",
                transition: "all 0.3s ease-in-out",
                cursor: "pointer",
                "&:hover": {
                  borderColor: "grey.400",
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
                  transform: "translateY(-8px)",
                },
              }}
            >
              <Box
                sx={{
                  width: 56,
                  height: 56,

                  background:
                    "linear-gradient(to bottom right, #212121, #424242)",
                  borderRadius: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 3,
                  transition: "transform 0.3s ease-in-out",
                  ".group:hover &": {
                    transform: "scale(1.1)",
                  },
                }}
              >
                <feature.icon sx={{ width: 28, height: 28, color: "white" }} />{" "}
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
                {feature.title}
              </Typography>

              <Typography
                sx={{
                  color: "grey.600",
                  lineHeight: 1.6,
                }}
              >
                {feature.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default AboutSection;
