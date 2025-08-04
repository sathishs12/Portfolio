import NextProjectImg1 from "../../assets/next-project-img1.png";
import NextProjectImg2 from "../../assets/next-project-img2.png";
import ChatApplication1 from "../../assets/WhatsApp Image 2025-03-08 at 10.47.58 PM.jpeg";
import ChatApplication2 from "../../assets/chat-app-img1.jpeg";
import ChatApplication3 from "../../assets/chat-app-img2.jpeg";
import ChatApplication4 from "../../assets/chat-app-img3.jpeg";
import NextProjectImg3 from "../../assets/next-project-img3.png";
import NextProjectImg4 from "../../assets/next-project-img4.png";
import imagesNotAvailable from "../../assets/images-not-available.png";

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

{/* <Box sx={{ display: "flex", flexDirection: "column", gap: 6, mb: 6 }}>
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

<Box
  sx={{
    width: { xs: "100%", md: "35%" },
    minWidth: { xs: "100%", md: "300px" },
    maxWidth: { md: "350px" },
    height: { xs: "250px", sm: "300px", md: "100%" }, // increased height
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
</Box> */}