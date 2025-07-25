import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import { motion } from "framer-motion";
import NextProjectImg1 from "../../assets/next-project-img1.png";
import NextProjectImg2 from "../../assets/next-project-img2.png";
import ChatApplication1 from "../../assets/WhatsApp Image 2025-03-08 at 10.47.58 PM.jpeg";
import ChatApplication2 from "../../assets/chat-app-img1.jpeg";
import ChatApplication3 from "../../assets/chat-app-img2.jpeg";
import ChatApplication4 from "../../assets/chat-app-img3.jpeg";
import NextProjectImg3 from "../../assets/next-project-img3.png";
import NextProjectImg4 from "../../assets/next-project-img4.png";
import imagesNotAvailable from "../../assets/images-not-available.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


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

const projectData = [
  {
  // img: NextProjectImg1,
  images: [NextProjectImg1,NextProjectImg2, NextProjectImg3, NextProjectImg4],
  title: "PROJECT 1: Bank Dashboard",
  desc:
    "This is a responsive Bank Dashboard application built using Next.js and Tailwind CSS. It provides an overview of multiple companies, showing their active, inactive, and closed accounts. Users can click on a company to view all its associated accounts. By selecting an individual account, users can visualize its current and past month’s credit and debit transactions through interactive graphs. The application uses a mock API to simulate real-time data operations, delivering an intuitive and streamlined financial management experience.",
  liveLink: "https://prismatic-lolly-07f7f8.netlify.app/login",
  gitLink: "https://github.com/sathishs12/company-account-details",
  type: "Personal Project", 
  },
    {
    // img: ChatApplication,
    images: [ChatApplication1, ChatApplication3, ChatApplication4,ChatApplication2],
    title: "PROJECT 2: Chat Application",
    desc:
      "This real-time chat application enables users to send and receive messages instantly. I developed the project using React, Node.js, Socket.IO, and MongoDB. It features private messaging, real-time updates, typing indicators, and online/offline presence detection. The project reflects my full-stack development skills.",
    liveLink: "https://your-bank-dashboard-demo.com",
    gitLink: "https://github.com/sathishs12/Chat-Application",
    type: "Personal Project", 
    },
  {
    // img: DEVELOPMENT,
    images: [imagesNotAvailable, imagesNotAvailable,],
    title: "PROJECT 3: BYRNE",
    desc:
      "BYRNE is an enterprise-level document management system. I was responsible for implementing role-based access controls, file upload and preview modules, and optimizing the user interface for large-scale usage. My work helped improve both security and usability.",
    liveLink: "https://your-bank-dashboard-demo.com",
    gitLink: "https://github.com/your-username/project-repo",
    type: "Company Project", 
    },
  {
    // img: DESIGN,
    images: [imagesNotAvailable, imagesNotAvailable,],
    title: "PROJECT 4: Al-Seer",
    desc:
      "Al-Seer is a full-stack personal project developed to streamline inventory and order management for small businesses. I handled both frontend and backend development, including user authentication, RESTful APIs, database design, and responsive UI using modern technologies like React, Node.js, Express, and MongoDB.",
    liveLink: "https://your-bank-dashboard-demo.com",
    gitLink: "https://github.com/your-username/project-repo",
    type: "Company Project", 
    }

];

const Projects: React.FC = () => {
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

<Box sx={{ display: "flex", flexDirection: "column", gap: 6, mb: 6 }}>
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

        {/* Image */}
<Box
  sx={{
    width: { xs: "100%", md: "35%" },
    minWidth: { xs: "100%", md: "300px" },
    maxWidth: { md: "350px" },
    height: { xs: "250px", sm: "300px", md: "100%" }, // increased height
    overflow: "hidden",
    // borderRadius: "70px",
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
    {project.images.map((image, imgIndex) => (
      <Box
        key={imgIndex}
        component="img"
        src={image}
        alt={`${project.title} - ${imgIndex}`}
        sx={{
          width: "100%",
          height: "250px",
          objectFit: "scale-down",
          display: "block",
          borderRadius:"20px"
        }}
      />
    ))}
  </Slider>
</Box>




        {/* Content */}
        <Box
          sx={{
            flex: 2,
            p: { xs: 3, sm: 4 },
            textAlign: "left",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              mb: 1,
              color: "#000",
              letterSpacing: 1,
              display: "flex",
              alignItems: "baseline",
              gap: 1,
              flexWrap: "wrap"
            }}
          >
            {project.title}
            <Typography
              component="span"
              sx={{
                fontWeight: "bold",
                fontSize: "12px",
                // fontWeight: "normal",
                color: "#000",
                ml: 1
              }}
            >
              ({project.type})
            </Typography>
          </Typography>

          <Typography
            variant="body2"
            sx={{
              fontSize: "14px",
              color: "#333",
              lineHeight: 1.6,
              mb: 2,
            }}
          >
            {project.desc}
          </Typography>
      <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
  {/* Live Project Button */}
  <a
    href={project.liveLink}
    target="_blank"
    rel="noopener noreferrer"
    style={{ textDecoration: "none" }}
  >
    <Box
     sx={{
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
      }}
    >
      🔗 View Project
    </Box>
  </a>

  {/* GitHub Button */}
  <a
    href={project.gitLink}
    target="_blank"
    rel="noopener noreferrer"
    style={{ textDecoration: "none" }}
  >
    <Box
      sx={{
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
      }}
    >
      🐙 View Code
    </Box>
  </a>
</Box>


        </Box>
      </Box>
    </motion.div>
  ))}
</Box>


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