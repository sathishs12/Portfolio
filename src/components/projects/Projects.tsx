import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Typography, Divider } from "@mui/material";
import { motion } from "framer-motion";
import ProjectSkeleton from "./ProjectSkeleton";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const buttonStyle = {
  fontSize: "13px",
  color: "#000",
  fontWeight: "bold",
  px: 3,
  py: 1,
  borderRadius: "8px",
  cursor: "pointer",
  backgroundColor: "#f5f5f5",
  textAlign: "center",
  display: "inline-block",
  transition: "all 0.3s ease",
  border: "1px solid #000",
  "&:hover": {
    backgroundColor: "#000",
    color: "#fff",
  },
};
// Define animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3 },
  }),
};

// Decorative divider with chevron icons
const ChevronDivider: React.FC = () => (
  <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", my: 4 }}>
    <Box sx={{ display: "flex", alignItems: "center", width: "150px" }}>
      <Divider sx={{ flex: 1 }} />
      <Typography component="span" sx={{ mx: 1, fontSize: "16px", color: "#555" }}>
        &#x25BC;
      </Typography>
      <Typography component="span" sx={{ mx: 1, fontSize: "16px", color: "#555" }}>
        &#x25B2;
      </Typography>
      <Typography component="span" sx={{ mx: 1, fontSize: "16px", color: "#555" }}>
        &#x25BC;
      </Typography>
      <Divider sx={{ flex: 1 }} />
    </Box>
  </Box>
);

// Skills data
const currentSkills = [
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", color: "#E34F26" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", color: "#1572B6" },
  { name: "JAVASCRIPT", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "#F7DF1E" },
  { name: "REACT", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "#61DAFB" },
  { name: "BOOTSTRAP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", color: "#563D7C" },
  { name: "TYPESCRIPT", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", color: "#3178C6" },
  { name: "GIT", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", color: "#F05032" },
  { name: "MONGODB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", color: "#47A248" },
];

const learningSkills = [
  { name: "NODE.JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "#339933" },
  { name: "FIGMA", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", color: "#F24E1E" },
  { name: "MYSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", color: "#4479A1" },
  { name: "SASS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg", color: "#CC6699" },
];

const skillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.1, type: "spring", stiffness: 100 },
  }),
};



const Projects: React.FC = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
useEffect(() => {
  axios
    .get("https://684fa5d6e7c42cfd17955990.mockapi.io/api/account-details/portfolioProjectData")
    .then((res) => {
      setProjects(res.data);
      setLoading(false);
    })
    .catch((err) => {
      console.error("Error fetching portfolio data:", err);
      setLoading(false);
    });
}, []);

  return (
    <Box
      id="about-me"
      sx={{
        backgroundColor: "#f5f5f5",
        // py: 6,
        // px: 4,
        textAlign: "center",
        maxWidth: "1280px",
        margin: "0 auto",
        width: "100%",
      }}
    >
      {/* Title */}
      <Box
        sx={{
          border: "2px solid black",
          display: "inline-block",
          px: "32px",
          py: "8px",
          mb: 4,
        }}
      >
        <Typography sx={{ color: "black", fontSize: "24px", fontWeight: "bold" }} letterSpacing={2}>
          PROJECT
        </Typography>
      </Box>

      {/* Cards */}
      {/* <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "1fr 1fr",
          },
          gap: { xs: 4, md: 6 },
          mb: 6,
        }}
      >
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={index}
          >
            <Box
              sx={{
                width: "100%",
                borderRadius: "12px",
                textAlign: "center",
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                <img
                  src={project.img}
                  alt={project.title}
                  style={{ width: "200px", height: "200px", objectFit: "contain" }}
                />
              </Box>
              <Typography
                variant="h6"
                sx={{ color: "black", fontWeight: "bold", mb: 1, letterSpacing: 1 }}
              >
                {project.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#050505",
                  fontSize: "14px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: 5,
                  WebkitBoxOrient: "vertical",
                }}
              >
                {project.desc}
              </Typography>
            </Box>
          </motion.div>
        ))}
      </Box> */}
{/* Cards */}
{/* Project Cards - New Alternating Design */}

{loading ? (
  <Box sx={{ display: "flex", flexDirection: "column", gap: 6, mb: 6 }}>
    {[1,2].map((id) => (
      <ProjectSkeleton key={id} />
    ))}
  </Box>
) : (

        <Box sx={{ display: "flex", flexDirection: "column", gap: 6, mb: 6 }}>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              custom={index}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: {
                    xs: "column",
                    md: index % 2 === 0 ? "row" : "row-reverse",
                  },
                  alignItems: "stretch",
                  flexWrap: "wrap",
                  backgroundColor: "white",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.08)",
                }}
              >
                {/* Images Carousel */}
                <Box
                  sx={{
                    width: { xs: "100%", md: "35%" },
                    minWidth: { xs: "100%", md: "300px" },
                    maxWidth: { md: "350px" },
                    height: { xs: "250px", sm: "300px", md: "100%" },
                    overflow: "hidden",
                    flexShrink: 0,
                  }}
                >
                  <Slider
                    infinite={true}
                    speed={500}
                    slidesToShow={1}
                    slidesToScroll={1}
                    arrows={false}
                    autoplay
                  >
                    {(project.image || []).map((imgUrl: string, imgIndex: number) => (
                      <Box
                        key={imgIndex}
                        component="img"
                        src={imgUrl}
                        alt={`${project.title} - ${imgIndex}`}
                        sx={{
                          width: "100%",
                          height: "250px",
                          objectFit: "scale-down",
                          display: "block",
                          borderRadius: "20px",
                        }}
                      />
                    ))}
                  </Slider>
                </Box>

                {/* Content */}
                <Box sx={{ flex: 2, p: { xs: 3, sm: 4 }, textAlign: "left" }}>
                  <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1, color: "#000", letterSpacing: 1 }}>
                    {project.title}
                    <Typography component="span" sx={{ fontWeight: "bold", fontSize: "12px", ml: 1 }}>
                      ({project.type})
                    </Typography>
                  </Typography>

                  <Typography variant="body2" sx={{ fontSize: "14px", color: "#333", lineHeight: 1.6, mb: 2 }}>
                    {project.description}
                  </Typography>

                  <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                      <Box sx={buttonStyle}>🔗 View Project</Box>
                    </a>
                    <a href={project.gitLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                      <Box sx={buttonStyle}>🐙 View Code</Box>
                    </a>
                  </Box>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      )}
      {/* Bottom Decorative Divider */}
      <ChevronDivider />

      {/* Skills Section */}
      <Box sx={{ pb: 6 }}>
        {/* Skills Title */}
        <Box
          sx={{
            border: "2px solid black",
            display: "inline-block",
            px: "32px",
            py: "8px",
            mb: 5,
          }}
        >
          <Typography sx={{ color: "black", fontSize: "24px", fontWeight: "bold" }} letterSpacing={2}>
            SKILLS
          </Typography>
        </Box>

        {/* Current Skills */}
        <Box sx={{ mb: 5 }}>
          <Typography 
            variant="subtitle1" 
            sx={{ 
              fontWeight: "bold", 
              mb: 3, 
              letterSpacing: 1.5, 
              textAlign: "center",
              color:"black"
            }}
          >
            USING NOW:
          </Typography>
          
          <Box sx={{ 
            display: "grid", 
            gridTemplateColumns: { xs: "1fr 1fr", sm: "1fr 1fr 1fr 1fr" },
            gap: 4, 
            maxWidth: "800px", 
            mx: "auto", 
            px: 2 
          }}>
            {currentSkills.map((skill, index) => (
              <motion.div
                key={index}
                variants={skillVariants}
                initial="hidden"
                animate="visible"
                custom={index}
              >
                <Box sx={{ 
                  display: "flex", 
                  flexDirection: "column", 
                  alignItems: "center",
                  justifyContent: "center" 
                }}>
                  <Box sx={{ mb: 1, height: "50px", display: "flex", alignItems: "center" }}>
                    <img 
                      src={skill.icon} 
                      alt={skill.name} 
                      style={{ 
                        width: "40px", 
                        height: "40px", 
                        objectFit: "contain" 
                      }} 
                    />
                  </Box>
                  <Typography 
                    variant="caption" 
                    sx={{ 
                      fontSize: "12px", 
                      fontWeight: "medium",
                      color: "#555" 
                    }}
                  >
                    {skill.name}
                  </Typography>
                </Box>
              </motion.div>
            ))}
          </Box>
        </Box>
        
        {/* Learning Skills */}
        <Box>
          <Typography 
            variant="subtitle1" 
            sx={{ 
              fontWeight: "bold", 
              mb: 3, 
              letterSpacing: 1.5, 
              textAlign: "center",
              color:"black"
            }}
          >
            LEARNING:
          </Typography>
          
          <Box sx={{ 
            display: "grid", 
            gridTemplateColumns: { xs: "1fr 1fr", sm: "1fr 1fr 1fr 1fr" },
            gap: 4, 
            maxWidth: "800px", 
            mx: "auto",
            px: 2
          }}>
            {learningSkills.map((skill, index) => (
              <motion.div
                key={index}
                variants={skillVariants}
                initial="hidden"
                animate="visible"
                custom={index}
              >
                <Box sx={{ 
                  display: "flex", 
                  flexDirection: "column", 
                  alignItems: "center",
                  justifyContent: "center" 
                }}>
                  <Box sx={{ mb: 1, height: "50px", display: "flex", alignItems: "center" }}>
                    <img 
                      src={skill.icon} 
                      alt={skill.name} 
                      style={{ 
                        width: "40px", 
                        height: "40px", 
                        objectFit: "contain" 
                      }} 
                    />
                  </Box>
                  <Typography 
                    variant="caption" 
                    sx={{ 
                      fontSize: "12px", 
                      fontWeight: "medium",
                      color: "#555" 
                    }}
                  >
                    {skill.name}
                  </Typography>
                </Box>
              </motion.div>
            ))}
          </Box>
        </Box>
      </Box>
      <ChevronDivider />
    </Box>
  );
};

export default Projects;