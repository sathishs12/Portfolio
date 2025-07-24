// import { Box, Typography, Button, Divider } from "@mui/material";
// import { motion } from "framer-motion";

// const cardVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.3 },
//   }),
// };

// const AboutMeSection = () => {
//   return (
//     <Box
//       id="about-me"
//       sx={{
//         backgroundColor: "#f8f8f8",
//         py: 3,
//         px: 4,
//         textAlign: "center",
//         maxWidth: "1250px",
//         margin: "0 auto",
//         width:"1239px"
//       }}
//     >
//       {/* Title */}
//       <Box
//         sx={{
//           border: "2px solid black",
//           display: "inline-block",
//           px: "32px",
//           py: "8px",
//           mb: 3,
//         }}
//       >
//         <Typography sx={{ color: "black", fontSize: "24px", fontWeight: "bold" }} letterSpacing={2}>
//           ABOUT ME
//         </Typography>
//       </Box>

//       {/* Description */}
//       <Typography
//         sx={{
//           maxWidth: "600px",
//           mx: "auto",
//           mb: 4,
//           color: "#050505",
//           fontSize: "15px",
//         }}
//       >
//         Hello! I'm <strong>Sathish Benjamin</strong>, a passionate <strong>MERN Stack</strong> developer
//         with a knack for building engaging and efficient digital experiences.
//       </Typography>

//       {/* Explore Button with Dividers */}
//       <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 2, mb: 6 }}>
//         <Divider sx={{ flex: 1 }} />
//         <Button
//           sx={{
//             borderBottom: "2px solid black",
//             borderRadius: 0,
//             px: 4,
//             fontWeight: "bold",
//           }}
//         >
//           Explore
//         </Button>
//         <Divider sx={{ flex: 1 }} />
//       </Box>

//       {/* Cards Layout: Top Row with DESIGN & DEVELOPMENT */}
//       <Box
//         sx={{
//           display: "flex",
//           flexWrap: "wrap",
//           justifyContent: "center",
//           gap: 4,
//           mb: 4,
//         }}
//       >
//         {/* DESIGN */}
//         <motion.div variants={cardVariants} initial="hidden" animate="visible" custom={0}>
//           <Box sx={{ maxWidth: 300 }}>
//             <Typography sx={{ color: "black" }} variant="h6" fontWeight="bold" gutterBottom letterSpacing={6}>
//               DESIGN
//             </Typography>
//             <Typography sx={{ color: "#050505" }} variant="body2" color="text.secondary">
//               I can design the site based on your needs and suggestions. I can
//               also design the site from scratch and consult you during the job.
//             </Typography>
//           </Box>
//         </motion.div>

//         {/* DEVELOPMENT */}
//         <motion.div variants={cardVariants} initial="hidden" animate="visible" custom={1}>
//           <Box sx={{ maxWidth: 300 }}>
//             <Typography sx={{ color: "black" }} variant="h6" fontWeight="bold" gutterBottom letterSpacing={6}>
//               DEVELOPMENT
//             </Typography>
//             <Typography sx={{ color: "#050505" }} variant="body2" color="text.secondary">
//               I can design the site based on your needs and suggestions. I can
//               also design the site from scratch and consult you during the job.
//             </Typography>
//           </Box>
//         </motion.div>
//       </Box>

//       {/* MAINTENANCE - Centered Below */}
//       <Box sx={{ display: "flex", justifyContent: "center" }}>
//         <motion.div variants={cardVariants} initial="hidden" animate="visible" custom={2}>
//           <Box sx={{ maxWidth: 300 }}>
//             <Typography sx={{ color: "black" }} variant="h6" fontWeight="bold" gutterBottom letterSpacing={6}>
//               MAINTENANCE
//             </Typography>
//             <Typography sx={{ color: "#050505" }} variant="body2" color="text.secondary">
//               I can design the site based on your needs and suggestions. I can
//               also design the site from scratch and consult you during the job.
//             </Typography>
//           </Box>
//         </motion.div>
//       </Box>
//     </Box>
//   );
// };

// export default AboutMeSection;


// import React from "react";
// import { Box, Typography, Button, Divider } from "@mui/material";
// import { motion } from "framer-motion";
// import personOne from "../../assets/Sathish-image.jpeg";
// import DESIGN from "../../assets/136378-200 1.svg";
// import DEVELOPMENT from "../../assets/img_533288 1.svg";
// import maintenance from "../../assets/maintenance--v3 1.svg";

// import { Typewriter } from "react-simple-typewriter";

// // Define animation variants
// const cardVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.3 },
//   }),
// };

// // Define the decorative chevron icon
// const ChevronDivider: React.FC = () => (
//   <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", my: 4 }}>
//     <Box sx={{ display: "flex", alignItems: "center", width: "150px" }}>
//       <Divider sx={{ flex: 1 }} />
//       <Typography component="span" sx={{ mx: 1, fontSize: "16px", color: "#555" }}>
//         &#x25BC;
//       </Typography>
//       <Typography component="span" sx={{ mx: 1, fontSize: "16px", color: "#555" }}>
//         &#x25B2;
//       </Typography>
//       <Typography component="span" sx={{ mx: 1, fontSize: "16px", color: "#555" }}>
//         &#x25BC;
//       </Typography>
//       <Divider sx={{ flex: 1 }} />
//     </Box>
//   </Box>
// );

// // Create interface for component props
// interface AboutMeSectionProps {
//   profileImage?: string;
// }

// const AboutMeSection: React.FC<AboutMeSectionProps> = ({
// }) => {
//   return (
//     <Box
//       id="about-me"
//       sx={{
//         backgroundColor: "#f5f5f5",
//         py: 6,
//         px: 4,
//         textAlign: "center",
//         minWidth:"auto",
//         maxWidth: "auto",
//         margin: "0 auto",
//         // width: { xs: "100%", md: "1239px" },
//       }}
//     >
//       {/* Title */}
//       <Box
//         sx={{
//           border: "2px solid black",
//           display: "inline-block",
//           px: "32px",
//           py: "8px",
//           mb: 4,
//         }}
//       >
//         <Typography sx={{ color: "black", fontSize: "24px", fontWeight: "bold" }} letterSpacing={2}>
//           ABOUT ME
//         </Typography>
//       </Box>

//       {/* Profile Image */}
//       <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
//         <Box
//           component="img"
//           src={personOne}
//           alt="Profile"
//           sx={{
//             width: 150,
//             height: 150,
//             borderRadius: "50%",
//             objectFit: "cover",
//             border: "4px solid white",
//             boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
//           }}
//         />
//       </Box>

//       {/* Description */}
//           <Typography
//               sx={{
//                   maxWidth: "600px",
//                   mx: "auto",
//                   mb: 4,
//                   color: "#050505",
//                   fontSize: "15px",
//                   minHeight: "48px", // optional: to avoid content shifting while typing
//               }}
//           >
//               <Typewriter
//                   words={[
//                       "Hello! I'm Sathish Benjamin, a passionate MERN Stack developer with a knack for building engaging and efficient digital experiences.",
//                   ]}
//                   loop={1}
//                   cursor
//                   cursorStyle="|"
//                   typeSpeed={40}
//                   deleteSpeed={30}
//                   delaySpeed={2000}
//               />
//           </Typography>

//       {/* Explore Button with Dividers */}
//       <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 2, mb: 4 }}>
//         <Divider sx={{ flex: 1, maxWidth: "200px" }} />
//         <Button
//           sx={{
//             border: "1px solid black",
//             borderRadius: 0,
//             px: 4,
//             py: 1,
//             fontWeight: "bold",
//             color: "black",
//             '&:hover': {
//               backgroundColor: "black",
//               color: "white",
//             }
//           }}
//         >
//           EXPLORE
//         </Button>
//         <Divider sx={{ flex: 1, maxWidth: "200px" }} />
//       </Box>

//       {/* Decorative Divider */}
//       <ChevronDivider />

//       {/* Cards Layout: Top Row with DESIGN & DEVELOPMENT */}
//       <Box
//         sx={{
//           display: "flex",
//           flexWrap: "wrap",
//           justifyContent: "center",
//           gap: { xs: 4, md: 8 },
//           mb: 6,
//         }}
//       >
//         {/* DESIGN */}
//         <motion.div variants={cardVariants} initial="hidden" animate="visible" custom={0}>
//           <Box sx={{ maxWidth: 440 }}>
//             <img src={DESIGN} />
//             <Typography sx={{ color: "black"}} variant="h6" fontWeight="bold" gutterBottom letterSpacing={6}>
//               DESIGN
//             </Typography>
//             <Typography  sx={{
//                           color: "#050505",
//                           fontSize: "14px",
//                           display: "-webkit-box",
//                           WebkitLineClamp: 2,
//                           WebkitBoxOrient: "vertical",
//                           overflow: "hidden",
//                           textOverflow: "ellipsis",
//                       }}
//                           variant="body2">
//               I can design the site based on your needs and suggestions. I can
//               also design the site from scratch and consult you during the job.
//             </Typography>
//           </Box>
//         </motion.div>

//         {/* DEVELOPMENT */}
//         <motion.div variants={cardVariants} initial="hidden" animate="visible" custom={1}>
//           <Box sx={{ maxWidth: 440 }}>
//           <img src={DEVELOPMENT} />
//             <Typography sx={{ color: "black"}} variant="h6" fontWeight="bold" gutterBottom letterSpacing={6}>
//               DEVELOPMENT
//             </Typography>
//             <Typography sx={{
//                           color: "#050505",
//                           fontSize: "14px",
//                           display: "-webkit-box",
//                           WebkitLineClamp: 2,
//                           WebkitBoxOrient: "vertical",
//                           overflow: "hidden",
//                           textOverflow: "ellipsis",
//                       }}
//                           variant="body2">
//               I can design the site based on your needs and suggestions. I can
//               also design the site from scratch and consult you during the job.
//             </Typography>
//           </Box>
//         </motion.div>
//       </Box>

//       {/* MAINTENANCE - Centered Below */}
//       <Box sx={{ display: "flex", justifyContent: "center" }}>
//         <motion.div variants={cardVariants} initial="hidden" animate="visible" custom={2}>
//           <Box sx={{ maxWidth: 440 }}>
//           <img src={maintenance} />
//             <Typography sx={{ color: "black"}} variant="h6" fontWeight="bold" gutterBottom letterSpacing={6}>
//             Maintenance
//             </Typography>
//             <Typography  sx={{
//                           color: "#050505",
//                           fontSize: "14px",
//                           display: "-webkit-box",
//                           WebkitLineClamp: 2,
//                           WebkitBoxOrient: "vertical",
//                           overflow: "hidden",
//                           textOverflow: "ellipsis",
//                       }}
//                           variant="body2">
//               I can design the site based on your needs and suggestions. I can
//               also design the site from scratch and consult you during the job.
//             </Typography>
//           </Box>
//         </motion.div>
//       </Box>

//       {/* Bottom Decorative Divider */}
//       <ChevronDivider />
//     </Box>
//   );
// };

// export default AboutMeSection;

// import React, { useState } from "react";
// import { Box, Typography, Button, Divider, Dialog, DialogContent, IconButton } from "@mui/material";
// import { motion } from "framer-motion";
// import personOne from "../../assets/Sathish-image.jpeg";
// import DESIGN from "../../assets/136378-200 1.svg";
// import DEVELOPMENT from "../../assets/img_533288 1.svg";
// import maintenance from "../../assets/maintenance--v3 1.svg";
// import { Typewriter } from "react-simple-typewriter";
// import { Link, useNavigate } from "react-router-dom";
// import AboutFull from "../../pages/AboutFull";
// import CloseIcon from '@mui/icons-material/Close';
// // Animation variant
// const fadeUpVariant = {
//   hidden: { opacity: 0, y: 50 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6,
//       ease: "easeOut",
//     },
//   },
// };

// const cardVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.2,
//       duration: 0.6,
//       ease: "easeOut",
//     },
//   }),
// };

// const ChevronDivider: React.FC = () => (
//   <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", my: 4 }}>
//     <Box sx={{ display: "flex", alignItems: "center", width: "150px" }}>
//       <Divider sx={{ flex: 1 }} />
//       <Typography component="span" sx={{ mx: 1, fontSize: "16px", color: "#555" }}>
//         &#x25BC;
//       </Typography>
//       <Typography component="span" sx={{ mx: 1, fontSize: "16px", color: "#555" }}>
//         &#x25B2;
//       </Typography>
//       <Typography component="span" sx={{ mx: 1, fontSize: "16px", color: "#555" }}>
//         &#x25BC;
//       </Typography>
//       <Divider sx={{ flex: 1 }} />
//     </Box>
//   </Box>
// );


// const AboutMeSection: React.FC = () => {
//   const navigate = useNavigate();
//     const [open, setOpen] = useState(false);


//   return (
//     <Box
//       id="about-me"
//       sx={{
//         backgroundColor: "#f5f5f5",
//         py: 6,
//         px: 4,
//         textAlign: "center",
//         margin: "0 auto",
//       }}
//     >
//       {/* Title */}
//       <motion.div
//         variants={fadeUpVariant}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: false }}
//       >
//         <Box
//           sx={{
//             border: "2px solid black",
//             display: "inline-block",
//             px: "32px",
//             py: "8px",
//             mb: 4,
//           }}
//         >
//           <Typography sx={{ color: "black", fontSize: "24px", fontWeight: "bold" }} letterSpacing={2}>
//             ABOUT ME
//           </Typography>
//         </Box>
//       </motion.div>

//       {/* Profile Image */}
//       <motion.div
//         variants={fadeUpVariant}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: false }}
//       >
//         <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
//           <Box
//             component="img"
//             src={personOne}
//             alt="Profile"
//             sx={{
//               width: 150,
//               height: 150,
//               borderRadius: "50%",
//               objectFit: "cover",
//               border: "4px solid white",
//               boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
//             }}
//           />
//         </Box>
//       </motion.div>

//       {/* Description */}
//       <motion.div
//         variants={fadeUpVariant}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: false }}
//       >
//         <Typography
//           sx={{
//             maxWidth: "600px",
//             mx: "auto",
//             mb: 4,
//             color: "#050505",
//             fontSize: "15px",
//             minHeight: "48px",
//           }}
//         >
//           <Typewriter
//             words={[
//               "Hello! I'm Sathish S, a passionate MERN Stack developer with a knack for building engaging and efficient digital experiences.",
//             ]}
//             loop={1}
//             cursor
//             cursorStyle="|"
//             typeSpeed={40}
//             deleteSpeed={30}
//             delaySpeed={2000}
//           />
//         </Typography>
//       </motion.div>

//       {/* Explore Button */}
//       <motion.div
//         variants={fadeUpVariant}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: false }}
//       >
//         <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 2, mb: 4 }}>
//           <Divider sx={{ flex: 1, maxWidth: "200px" }} />
//          {/* <Link to="/about-full"> */}
//   <Button
//    onClick={() => setOpen(true)}
//     sx={{
//       border: "1px solid black",
//       borderRadius: 0,
//       px: 4,
//       py: 1,
//       fontWeight: "bold",
//       color: "black",
//       '&:hover': {
//         backgroundColor: "black",
//         color: "white",
//       }
//     }}
//   >
//     EXPLORE
//   </Button>
// {/* </Link> */}

//           <Divider sx={{ flex: 1, maxWidth: "200px" }} />
//         </Box>
//       </motion.div>

//       <ChevronDivider />

//       {/* DESIGN & DEVELOPMENT Cards */}
//       <Box
//         sx={{
//           display: "flex",
//           flexWrap: "wrap",
//           justifyContent: "center",
//           gap: { xs: 4, md: 8 },
//           mb: 6,
//         }}
//       >
//         {[{ src: DESIGN, title: "DESIGN", delay: 0 }, { src: DEVELOPMENT, title: "DEVELOPMENT", delay: 1 }].map((item, index) => (
//           <motion.div
//             key={item.title}
//             variants={cardVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: false, amount: 0.2 }}
//             custom={item.delay}
//           >
//             <Box sx={{ maxWidth: 440 }}>
//               <img src={item.src} alt={item.title} />
//               <Typography sx={{ color: "black" }} variant="h6" fontWeight="bold" gutterBottom letterSpacing={6}>
//                 {item.title}
//               </Typography>
//               <Typography
//                 sx={{
//                   color: "#050505",
//                   fontSize: "14px",
//                   display: "-webkit-box",
//                   WebkitLineClamp: 2,
//                   WebkitBoxOrient: "vertical",
//                   overflow: "hidden",
//                   textOverflow: "ellipsis",
//                 }}
//                 variant="body2"
//               >
//                  I create intuitive, responsive UI designs using modern libraries like MUI and Tailwind CSS. My goal is to deliver clean, user-focused layouts that enhance usability and visual appeal across devices.
// </Typography>
//             </Box>
//           </motion.div>
//         ))}
//       </Box>

//       {/* Maintenance Card */}
//       <Box sx={{ display: "flex", justifyContent: "center" }}>
//         <motion.div
//           variants={cardVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: false, amount: 0.2 }}
//           custom={2}
//         >
//           <Box sx={{ maxWidth: 440 }}>
//             <img src={maintenance} />
//             <Typography sx={{ color: "black" }} variant="h6" fontWeight="bold" gutterBottom letterSpacing={6}>
//               Maintenance
//             </Typography>
//             <Typography
//               sx={{
//                 color: "#050505",
//                 fontSize: "14px",
//                 display: "-webkit-box",
//                 WebkitLineClamp: 2,
//                 WebkitBoxOrient: "vertical",
//                 overflow: "hidden",
//                 textOverflow: "ellipsis",
//               }}
//               variant="body2"
//             >
//                I offer ongoing support to keep your application running smoothly. This includes bug fixes, performance tuning, feature updates, and adapting to evolving tech or business needs.
// </Typography>
//           </Box>
//         </motion.div>
//       </Box>

//       <ChevronDivider />
//         {/* Dialog for AboutFull */}
//       <Dialog open={open} onClose={() => setOpen(false)} fullScreen>
//         <DialogContent sx={{ px: 0 }}>
//           <IconButton
//             onClick={() => setOpen(false)}
//             sx={{ position: "absolute", top: 10, right: 10, zIndex: 1000 }}
//           >
//             <CloseIcon />
//           </IconButton>
//           <AboutFull />
//         </DialogContent>
//       </Dialog>
//     </Box>
//   );
// };

// export default AboutMeSection;



import React, { useState } from "react";
import { Box, Typography, Button, Divider, Dialog, DialogContent, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import personOne from "../../assets/Sathish-image.jpeg";
import DESIGN from "../../assets/136378-200 1.svg";
import DEVELOPMENT from "../../assets/img_533288 1.svg";
import maintenance from "../../assets/maintenance--v3 1.svg";
import { Typewriter } from "react-simple-typewriter";
import AboutFull from "../../pages/AboutFull";
import CloseIcon from '@mui/icons-material/Close';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

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

const AboutMeSection: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box id="about-me" sx={{ backgroundColor: "#f5f5f5", py: 6, px: 4, textAlign: "center", margin: "0 auto" }}>
      
      {/* Title */}
      <motion.div variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: false }}>
        <Box sx={{ border: "2px solid black", display: "inline-block", px: "32px", py: "8px", mb: 4 }}>
          <Typography sx={{ color: "black", fontSize: "24px", fontWeight: "bold" }} letterSpacing={2}>
            ABOUT ME
          </Typography>
        </Box>
      </motion.div>

      {/* Profile Image */}
      <motion.div variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: false }}>
        <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
          <Box
            component="img"
            src={personOne}
            alt="Profile"
            sx={{
              width: 150,
              height: 150,
              borderRadius: "50%",
              objectFit: "cover",
              border: "4px solid white",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
          />
        </Box>
      </motion.div>

      {/* Intro with Typewriter */}
      <motion.div variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: false }}>
        <Typography sx={{ maxWidth: "600px", mx: "auto", mb: 4, color: "#050505", fontSize: "15px", minHeight: "48px" }}>
          <Typewriter
            words={[
              "Hello! I'm Sathish S, a passionate MERN Stack developer with a knack for building engaging and efficient digital experiences.",
            ]}
            loop={1}
            cursor
            cursorStyle="|"
            typeSpeed={40}
            deleteSpeed={30}
            delaySpeed={2000}
          />
        </Typography>
      </motion.div>

      {/* Explore Button */}
      <motion.div variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: false }}>
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 2, mb: 4 }}>
          <Divider sx={{ flex: 1, maxWidth: "200px" }} />
          <Button
            onClick={() => setOpen(true)}
            sx={{
              border: "1px solid black",
              borderRadius: "999px",
              px: 4,
              py: 1,
              fontWeight: "bold",
              color: "black",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#000",
                color: "#fff", // Text turns white on hover
                borderColor: "#000", // Keeps border black
              },
            }}
          >
            EXPLORE
          </Button>
          <Divider sx={{ flex: 1, maxWidth: "200px" }} />
        </Box>
      </motion.div>

      <ChevronDivider />

      {/* DESIGN & DEVELOPMENT Cards */}
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: { xs: 4, md: 8 }, mb: 6 }}>
        {/* DESIGN */}
        <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: false }} custom={0}>
          <Box sx={{ maxWidth: 440 }}>
            <img src={DESIGN} alt="Design" />
            <Typography sx={{ color: "black" }} variant="h6" fontWeight="bold" gutterBottom letterSpacing={6}>
              DESIGN
            </Typography>
            <Typography sx={{
              color: "#050505",
              fontSize: "14px",
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }} variant="body2">
              I craft clean, user-centric designs that balance functionality and aesthetics. Whether wireframes or high-fidelity prototypes, I ensure the visuals align with your brand and user goals.
            </Typography>
          </Box>
        </motion.div>

        {/* DEVELOPMENT */}
        <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: false }} custom={1}>
          <Box sx={{ maxWidth: 440 }}>
            <img src={DEVELOPMENT} alt="Development" />
            <Typography sx={{ color: "black" }} variant="h6" fontWeight="bold" gutterBottom letterSpacing={6}>
              DEVELOPMENT
            </Typography>
            <Typography sx={{
              color: "#050505",
              fontSize: "14px",
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }} variant="body2">
              I build fast, scalable web applications using the MERN stack. From backend APIs to frontend interfaces, I focus on clean code, best practices, and performance.
            </Typography>
          </Box>
        </motion.div>
      </Box>

      {/* Maintenance Card */}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: false }} custom={2}>
          <Box sx={{ maxWidth: 440 }}>
            <img src={maintenance} alt="Maintenance" />
            <Typography sx={{ color: "black" }} variant="h6" fontWeight="bold" gutterBottom letterSpacing={6}>
              MAINTENANCE
            </Typography>
            <Typography sx={{
              color: "#050505",
              fontSize: "14px",
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }} variant="body2">
              I provide long-term support including bug fixes, updates, and server monitoring. Ensuring your site stays secure, fast, and aligned with evolving business goals.
            </Typography>
          </Box>
        </motion.div>
      </Box>

      <ChevronDivider />

      {/* AboutFull Dialog */}
      <Dialog open={open} onClose={() => setOpen(false)} fullScreen>
        <DialogContent sx={{ px: 0 }}>
          <IconButton onClick={() => setOpen(false)} sx={{ position: "absolute", top: 10, right: 10, zIndex: 1000 }}>
            <CloseIcon />
          </IconButton>
          <AboutFull />
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default AboutMeSection;
