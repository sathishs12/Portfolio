// components/CustomTimeline.tsx

import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";

const projectData = [
  {
    title: "c    Bank Dashboard",
    description:
      "This is a responsive Bank Dashboard application built using Next.js and Tailwind CSS. It provides an overview of multiple companies, showing their active, inactive, and closed accounts. Users can click on a company to view all its associated accounts. By selecting an individual account, users can visualize its current and past month’s credit and debit transactions through interactive graphs.",
  },
  {
    title: "c    Chat Application",
    description:
      "This real-time chat application enables users to send and receive messages instantly. I developed the project using React, Node.js, Socket.IO, and MongoDB. It features private messaging, real-time updates, typing indicators, and online/offline presence detection.",
  },
  {
    title: "REMO Portal",
    description:
      "Centralized digital solution for document control and workflow management for Al Seer and Byrne. Features include role-based access, file uploads, search/filter, and dashboards.",
  },
  {
    title: "c   Portfolio Website",
    description:
      "Personal portfolio showcasing skills, GitHub calendar, resume, and projects using React, TypeScript, MUI, and Framer Motion.",
  },
];

const CustomTimeline: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        pl: { xs: 0, sm: 1 },
        pr: { xs: 0, sm: 1 },
        position: "relative",
        mx: "auto",
        maxWidth: 900,
        width: "100%",
      }}
    >
      {projectData.map((item, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            mb: 5,
            position: "relative",
            px: { xs: 2, sm: 0 },
          }}
        >
          {/* Marker */}
          <Box
            sx={{
              position: "absolute",
              left: { xs: "calc(50% - 6px)", sm: 0 },
              top: { xs: 0, sm: 6 },
              width: 12,
              height: 12,
              borderRadius: "50%",
              backgroundColor: "#000000",
              border: "2px solid white",
              zIndex: 1,
            }}
          />

          {/* Vertical Line */}
          {index !== projectData.length - 1 && (
            <Box
              sx={{
                position: "absolute",
                left: { xs: "calc(50% - 1px)", sm: 5 },
                top: { xs: 16, sm: 22 },
                height: { xs: "calc(100% - 16px)", sm: "100%" },
                width: 2,
                backgroundColor: "#ccc",
                zIndex: 0,
              }}
            />
          )}

          {/* Left (Title) */}
          <Box
            sx={{
              minWidth: { xs: "100%", sm: 140 },
              textAlign: { xs: "center", sm: "right" },
              pr: { sm: 3 },
              mt: { xs: 2, sm: 0 },
            }}
          >
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              color="#000000"
              sx={{ fontSize: { xs: "1rem", sm: "1.1rem" } }}
            >
              {item.title}
            </Typography>
          </Box>

          {/* Right (Description) */}
          <Box
            sx={{
              flex: 1,
              pl: { sm: 3 },
              mt: { xs: 1, sm: 0 },
              borderLeft: { xs: "none", sm: "2px solid transparent" },
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            <Typography
              variant="body2"
              color="#000000"
              sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}
            >
              {item.description}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default CustomTimeline;
