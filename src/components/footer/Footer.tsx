import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { 
  Facebook as FacebookIcon, 
  LinkedIn as LinkedInIcon, 
  Instagram as InstagramIcon, 
  Email as EmailIcon,
  KeyboardArrowUp as KeyboardArrowUpIcon
} from "@mui/icons-material";

interface FooterProps {
  name?: string;
  year?: number;
}

const Footer: React.FC<FooterProps> = ({ 
  name = "Sathish", 
  year = new Date().getFullYear() 
}) => {
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#1a1a1a",
        color: "white",
        textAlign: "center",
        width: "100%"
      }}
    >
      {/* Back to Top Button */}
      <Box
        onClick={scrollToTop}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mb: 3,
          cursor: "pointer",
          transition: "transform 0.3s ease",
          "&:hover": {
            transform: "translateY(-5px)"
          },
          "&:hover .arrow-icon": {
            transform: "scale(1.2)",
            transition: "transform 0.3s ease"
          },
          "&:hover .back-text": {
            textDecoration: "underline",
            transition: "all 0.3s ease"
          }
        }}
      >
        <IconButton 
          color="inherit" 
          aria-label="back to top"
          sx={{ mb: 1 }}
          className="arrow-icon"
        >
          <KeyboardArrowUpIcon />
        </IconButton>
        <Typography 
          variant="body2" 
          className="back-text"
          sx={{ 
            fontWeight: "medium", 
            letterSpacing: 1,
            fontSize: "0.8rem"
          }}
        >
          BACK TO TOP
        </Typography>
      </Box>

      {/* Social Icons */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "6px",
          mb: 3,
          "& > *": {
            mx: 1
          }
        }}
      >
        <IconButton color="inherit" aria-label="facebook" size="small" sx={{ border: "1px solid rgba(255,255,255,0.3)" }}>
          <FacebookIcon fontSize="small" />
        </IconButton>
        <IconButton color="inherit" aria-label="linkedin" size="small" sx={{ border: "1px solid rgba(255,255,255,0.3)" }}>
          <LinkedInIcon fontSize="small" />
        </IconButton>
        <IconButton color="inherit" aria-label="instagram" size="small" sx={{ border: "1px solid rgba(255,255,255,0.3)" }}>
          <InstagramIcon fontSize="small" />
        </IconButton>
        <IconButton color="inherit" aria-label="email" size="small" sx={{ border: "1px solid rgba(255,255,255,0.3)" }}>
          <EmailIcon fontSize="small" />
        </IconButton>
      </Box>

      {/* Copyright */}
      <Typography 
        variant="caption" 
        sx={{ 
          opacity: 0.8,
          fontSize: "0.75rem"
        }}
      >
        &copy;{year} {name} All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
