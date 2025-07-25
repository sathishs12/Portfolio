import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Divider,
  Paper,
  Stack,
  useTheme,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import GitHubIcon from "@mui/icons-material/GitHub";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CodeIcon from "@mui/icons-material/Code";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import PlaceIcon from "@mui/icons-material/Place";
// import { useNavigate } from "react-router-dom";
import Timeline from "./Timeline";
import BuildCircleIcon from "@mui/icons-material/BuildCircle"; 

const Section = ({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) => (
  <Paper elevation={3} sx={{ mb: 4, p: 3, borderRadius: 2 }}>
    <Stack direction="row" alignItems="center" spacing={1} mb={1}>
      {icon}
      <Typography variant="h6" fontWeight="bold" sx={{ color: "text.primary" }}>
        {title}
      </Typography>
    </Stack>
    <Divider sx={{ mb: 2 }} />
    {children}
  </Paper>
);

const AboutFull = () => {
  // const navigate = useNavigate();
  const theme = useTheme();
  const [year, setYear] = useState("2024");

  // Load GitHub Calendar Script
  useEffect(() => {
    const loadCalendar = () => {
      if (!(window as any).GitHubCalendar) {
        const script = document.createElement("script");
        script.src =
          "https://unpkg.com/github-calendar@latest/dist/github-calendar.min.js";
        script.async = true;
        script.onload = () =>
          (window as any).GitHubCalendar(".calendar", "sathishs12", {
            responsive: true,
          });
        document.body.appendChild(script);
      } else {
        (window as any).GitHubCalendar(".calendar", "sathishs12", {
          responsive: true,
        });
      }
    };

    loadCalendar();
  }, [year]);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: theme.palette.background.default,
        py: 6,
        px: 2,
        color: theme.palette.text.primary,
      }}
    >
      <Paper
        elevation={6}
        sx={{
          maxWidth: 960,
          mx: "auto",
          p: 4,
          borderRadius: 4,
          background: theme.palette.background.paper,
        }}
      >
        {/* <Button
          startIcon={<ArrowBackIcon />}
          variant="outlined"
          onClick={() => navigate("/")}
          sx={{
            mb: 4,
            borderColor: theme.palette.mode === "dark" ? "white" : "black",
            color: theme.palette.mode === "dark" ? "white" : "black",
            "&:hover": {
              backgroundColor:
                theme.palette.mode === "dark" ? "#333" : "#f5f5f5",
            },
          }}
        >
          Back to Home
        </Button> */}

        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Resume
        </Typography>

        <Section title="Personal Info" icon={<InfoOutlinedIcon />}>
          <Stack spacing={1}>
            <Typography>
              <strong>Name:</strong> Sathish
            </Typography>
            <Typography>
              <strong>📞 Phone:</strong> +91 6369425814
            </Typography>
            <Typography>
              <strong>📧 Email:</strong> sathish638236@gmail.com
            </Typography>
            <Typography>
              <strong>🔗 LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/sathish-s-7b1274246/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sathish S
              </a>
            </Typography>
          </Stack>
        </Section>

        <Section title="Objective" icon={<CodeIcon />}>
          <Typography>
            Skilled MERN Stack Developer with expertise in building scalable web
            applications, user-friendly interfaces, and backend APIs. Passionate
            about problem-solving and clean code.
          </Typography>
        </Section>

        <Section title="Technical Skills" icon={<CodeIcon />}>
          <Typography>
            • <strong>Frontend:</strong> HTML5, CSS3, JavaScript, React, MUI
          </Typography>
          <Typography>
            • <strong>Backend:</strong> Node.js, Express.js
          </Typography>
          <Typography>
            • <strong>Database:</strong> MongoDB
          </Typography>
          <Typography>
            • <strong>Tools:</strong> GitHub, Vercel, Postman, VS Code
          </Typography>
        </Section>
         <Section title="Project" icon={<BuildCircleIcon  />}>
 <Timeline />
         </Section>

        <Section title="Education" icon={<SchoolIcon />}>
          <Typography>
            BE Automobile Engineering, KSR College of Engineering (CGPA: 7.70)
          </Typography>
        </Section>

        <Section title="Experience" icon={<WorkIcon />}>
          <Typography fontWeight="bold">
            Technomax Systems (Jan 2024 – Present)
          </Typography>
          <Typography>
            Worked on REMO Portal (Al Seer & Byrne) for centralizing document
            management, improving searchability, and building user-friendly
            dashboards.
          </Typography>
        </Section>

        <Section title="Address" icon={<PlaceIcon />}>
          <Typography>Muthur,Tirupur, Tamil Nadu, India (636105)</Typography>
        </Section>

        <Section title="GitHub Contributions" icon={<GitHubIcon />}>
          <FormControl size="small" sx={{ mb: 2, width: 160 }}>
            <InputLabel>Year</InputLabel>
            <Select
              value={year}
              label="Year"
              onChange={(e) => setYear(e.target.value)}
            >
              <MenuItem value="2024">2024</MenuItem>
              <MenuItem value="2023">2023</MenuItem>
              <MenuItem value="2022">2022</MenuItem>
            </Select>
          </FormControl>

          <Box
            className="calendar"
            sx={{
              overflowX: "auto",
              p: 1,
              border: "1px solid",
              borderColor: "divider",
              borderRadius: 2,
              "& svg": {
                width: "100% !important",
                height: "auto",
              },
            }}
          />
        </Section>
      </Paper>
    </Box>
  );
};

export default AboutFull;
