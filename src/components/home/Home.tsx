// import React from "react";
// import { motion } from "framer-motion";
// import personOne from "../../assets/Sathish-image.jpeg";
// import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
// import { Box, Typography, Divider } from "@mui/material";

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


// const Home: React.FC = () => {
//   return (
//     <div
//       style={{
//         padding: "4rem 1rem",
//         background: "#f5f7fa",
//         maxWidth: "1250px",
//         margin: "0 auto",
//       }}
//     >
//       {/* Download Resume Button & Social Links */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//       >
//         <Box
//           sx={{
//             border: "2px solid black",
//             display: "inline-block",
//             padding: "8px 32px",
//             marginBottom: "4px",
//             color: "black",
//             cursor: "pointer",
//             '&:hover': {
//               backgroundColor: "black",
//               color: "white",
//             }
//           }}
//         >
//           <Typography
//             sx={{
//               // color: "black",
//               fontSize: "24px",
//               // fontWeight: "bold",
//               // letterSpacing: 1,
//             }}
//           >
//             <a
//               href="/path/to/resume.pdf"
//               download
//               style={{
//                 color: "inherit",
//                 fontSize: "inherit",
//                 fontWeight: "inherit",
//                 textDecoration: "none",
//               }}
//             >
//               DOWNLOAD RESUME
//             </a>
//           </Typography>
//         </Box>

       
//       </motion.div>

//       {/* Main Content Section */}
//       <div
//         className="home-section"
//         style={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-between",
//           flexWrap: "wrap",
//           gap: "2rem",
//           flexDirection: "row",
//           marginTop: "2rem",
//         }}
//       >
//         {/* Left Side */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           style={{
//             flex: "1 1 600px",
//             textAlign: "left",
//             fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//             color: "#333",
//           }}
//         >
//            <p style={{ fontSize: "1.2rem", color: "black" }}>
//           Get in touch with me:
//         </p>

//         <div
//           className="contact-icons"
//           style={{
//             display: "flex",
//             gap: "1.5rem",
//             flexWrap: "wrap",
//           }}
//         >
//           <a
//             href="https://www.linkedin.com/in/benjamin-sathish-s-7b1274246/"
//             target="_blank"
//             rel="noopener noreferrer"
//             style={{ color: "black", fontSize: "1.8rem" }}
//           >
//             <FaLinkedin />
//           </a>
//           <a
//             href="mailto:sathish638236@gmail.com"
//             style={{ color: "black", fontSize: "1.8rem" }}
//           >
//             <FaEnvelope />
//           </a>
//           <a
//             href="https://github.com/sathishs12/Chat-Application"
//             target="_blank"
//             rel="noopener noreferrer"
//             style={{ color: "black", fontSize: "1.8rem" }}
//           >
//             <FaGithub />
//           </a>
//         </div>
//           <p style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>
//             Hello! I'm <strong>Sathish Benjamin</strong>, a passionate{" "}
//             <strong>MERN Stack</strong> developer with a knack for building
//             engaging and efficient digital experiences.
//           </p>
//           <p style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>
//             I specialize in technologies like{" "}
//             <strong>React, Node.js, TypeScript</strong>, and{" "}
//             <strong>MongoDB</strong>, and I love turning complex problems into
//             elegant solutions.
//           </p>
//           <p style={{ fontSize: "1.1rem" }}>
//             This portfolio showcases my latest projects, skills, and
//             experiences. Feel free to explore and get in touch if you'd like to
//             collaborate!
//           </p>
//         </motion.div>

//         {/* Right Side - Image */}
//         <motion.div
//   whileInView={{ opacity: 1, x: 0 }}
//   initial={{ opacity: 0, x: 30 }}
//   transition={{ duration: 0.8, ease: "easeOut" }}
//   viewport={{ once: true, amount: 0.2 }}
//   style={{
//     flex: "1 1 400px",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//   }}
// >
//   <motion.img
//     src={personOne}
//     alt="Sathish Benjamin"
//     initial={{ scale: 1 }}
//     whileHover={{ scale: 1.05, rotate: 1 }}
//     transition={{ type: "spring", stiffness: 200 }}
//     style={{
//       width: "100%",
//       maxWidth: "400px",
//       height: "auto",
//       borderRadius: "12px",
//       boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
//     }}
//   />
// </motion.div>

//       </div>

//       {/* Responsive CSS Styles */}
//       <style>
//         {`
//           @media (max-width: 1024px) {
//             .home-section {
//               flex-direction: column !important;
//               align-items: center !important;
//               text-align: center !important;
//             }

//             .home-section p {
//               text-align: center !important;
//             }

//             .contact-icons {
//               justify-content: center !important;
//               margin-top: 1rem;
//             }

//             .contact-icons a {
//               font-size: 2rem !important;
//             }

//             img {
//               max-width: 90% !important;
//             }

//             a {
//               text-align: center;
//             }
//           }

//           @media (max-width: 480px) {
//             .home-section p {
//               font-size: 1rem !important;
//             }

//             .contact-icons a {
//               font-size: 1.5rem !important;
//             }

//             a {
//               font-size: 20px !important;
//             }
//           }
//         `}
//       </style>
//       <ChevronDivider />
//     </div>
//   );
// };

// export default Home;


import React from "react";
import { motion } from "framer-motion";
import { Box, Typography, Divider, Button } from "@mui/material";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import personOne from "../../assets/WhatsApp Image 2025-07-23 at 2.47.59 PM.jpeg";

const Home: React.FC = () => {
  return (
    <Box
      sx={{
        px: 2,
        py: 6,
        backgroundColor: "#f9fafb",
        maxWidth: "1280px",
        mx: "auto",
      }}
    >
      {/* Download Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Box textAlign="center" mb={4}>
          <Button
            variant="outlined"
            sx={{
              color: "#000", // Text color (initial)
              borderColor: "#000", // Border color (initial)
              borderRadius: "999px",
              px: 4,
              py: 1,
              fontWeight: 600,
              fontSize: "1rem",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#000",
                color: "#fff", // Text turns white on hover
                borderColor: "#000", // Keeps border black
              },
            }}
          >
            <a
              href="\src\assets\sathishresume-1.pdf"
              download
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Download Resume
            </a>
          </Button>
        </Box>
      </motion.div>


      {/* Main Section */}
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        alignItems="center"
        justifyContent="space-between"
        gap={5}
      >
        {/* Text Section */}
      {/* Text Section */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  style={{ flex: 1 }}
>
  <Typography variant="h4" component="h1" gutterBottom fontWeight="bold">
    Hi, I'm Sathish S
  </Typography>

  <Typography variant="h6" gutterBottom>
    Frontend Engineer | MERN Stack Engineer
  </Typography>

  <Typography variant="body1" paragraph>
    I’m a passionate software developer with experience in building responsive, scalable, and modern web applications.
  </Typography>

  <Typography variant="body1" paragraph>
    My expertise lies in JavaScript frameworks like <strong>React</strong> and <strong>Next.js</strong>, with strong knowledge of <strong>TypeScript</strong>, <strong>Node.js</strong>, <strong>Express</strong>, and <strong>MongoDB</strong>.
  </Typography>

  <Typography variant="body1" paragraph>
    I enjoy working with UI libraries like <strong>Material UI</strong> to create clean and intuitive user experiences.
  </Typography>

  <Typography variant="body1" paragraph>
    I’m always eager to collaborate on exciting projects and solve complex problems with elegant solutions.
  </Typography>

  {/* Contact Icons */}
  <Box mt={3}>
    <Typography fontWeight="bold" mb={1}>
      Connect with me:
    </Typography>
    <Box display="flex" gap={3} flexWrap="wrap">
      <a href="https://www.linkedin.com/in/benjamin-sathish-s-7b1274246/" target="_blank" rel="noreferrer" style={{ fontSize: "1.8rem", color: "#0e76a8" }}>
        <FaLinkedin />
      </a>
      <a href="mailto:sathish638236@gmail.com" style={{ fontSize: "1.8rem", color: "#d93025" }}>
        <FaEnvelope />
      </a>
      <a href="https://github.com/sathishs12/Chat-Application" target="_blank" rel="noreferrer" style={{ fontSize: "1.8rem", color: "#171515" }}>
        <FaGithub />
      </a>
    </Box>
  </Box>
</motion.div>


        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          style={{ flex: 1, textAlign: "center" }}
        >
          <motion.img
            src={personOne}
            alt="Sathish Benjamin"
            style={{
              width: "100%",
              maxWidth: "350px",  // Smaller width
              height: "auto",
              borderRadius: "16px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
            }}
            whileHover={{ scale: 1.03, rotate: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        </motion.div>

      </Box>

      {/* Chevron Divider */}
      <Box mt={6} display="flex" justifyContent="center" alignItems="center">
        <Divider sx={{ flex: 1, mr: 1 }} />
        <Typography color="gray" mx={1}>
          ▼ ▲ ▼
        </Typography>
        <Divider sx={{ flex: 1, ml: 1 }} />
      </Box>
    </Box>
  );
};

export default Home;
