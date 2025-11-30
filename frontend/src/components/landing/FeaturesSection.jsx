import React from "react";
import { Box, Typography } from "@mui/material";

const FeaturesSection = () => {
  const features = [
    {
      number: "01",
      title: "프로젝트 등록",
      description:
        "당신의 아이디어를 등록하고 목표 금액을 설정하세요. 간단한 절차로 5분 안에 펀딩을 시작할 수 있습니다.",
    },
    {
      number: "02",
      title: "투명한 투자",
      description:
        "관심있는 프로젝트를 발견하고 원하는 만큼 투자하세요. 실시간으로 펀딩 진행 상황을 확인할 수 있습니다.",
    },
    {
      number: "03",
      title: "스마트 컨트랙트",
      description:
        "목표 달성 시 자동으로 자금이 전달되고, 미달 시 투자자에게 환불됩니다. 모든 과정이 자동화되어 안전합니다.",
    },
    {
      number: "04",
      title: "커뮤니티 참여",
      description:
        "관심있는 프로젝트를 팔로우하고, 다른 투자자들과 소통하며 함께 성장하는 생태계를 만들어가세요.",
    },
  ];

  return (
    <Box
      component="section"
      id="features"
      sx={{
        py: { xs: 10, md: 16 },
        px: 3,
        border: "1px solid blue",
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
            주요 기능
          </Typography>
          <Typography
            sx={{
              fontSize: "1.125rem",
              color: "grey.600",
              lineHeight: 1.6,
            }}
          >
            혁신적인 스타트업과 투자자를 위한 완벽한 플랫폼
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(2, 1fr)",
              lg: "repeat(4, 1fr)",
            },
            gap: 4,
          }}
        >
          {features.map((feature, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  bgcolor: "grey.100",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "1.25rem",
                    fontWeight: "bold",
                    color: "grey.900",
                  }}
                >
                  {feature.number}
                </Typography>
              </Box>

              <Typography
                variant="h3"
                sx={{
                  fontSize: "1.25rem",
                  fontWeight: "bold",
                  color: "text.primary",
                  mt: 1,
                }}
              >
                {feature.title}
              </Typography>

              <Typography
                sx={{
                  color: "grey.600",
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

export default FeaturesSection;
