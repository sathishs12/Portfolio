// // // import React from "react";
// // // import {
// // //   AppBar,
// // //   Toolbar,
// // //   Button,
// // //   Box,
// // //   IconButton,
// // //   Drawer,
// // //   List,
// // //   ListItem,
// // //   ListItemText,
// // //   useMediaQuery,
// // //   useTheme,
// // //   ListItemButton,
// // // } from "@mui/material";
// // // import MenuIcon from "@mui/icons-material/Menu";
// // // import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
// // // import Projects from "./components/projects/Projects";
// // // import Home from "./components/home/Home";
// // // import "./App.css";
// // // import Contact from "./components/contact/contact";
// // // import AboutMeSection from "./components/about/AboutMeSection";
// // // import LOGO from "./assets/b5f1d9e0-da0a-4228-9263-0108556c2118.png";

// // // const App: React.FC = () => {
// // //   const [drawerOpen, setDrawerOpen] = React.useState(false);
// // //   const theme = useTheme();
// // //   const isMobile = useMediaQuery(theme.breakpoints.down("md")); // <960px

// // //   const navItems = [
// // //     { name: "Home", link: "/" },
// // //     { name: "Projects", link: "/projects" },
// // //     { name: "About me", link: "/about" },
// // //     { name: "Contact", link: "/contact" },
// // //   ];

// // //   const formatClassName = (name: string) => {
// // //     return `${name.replace(/\s+/g, "")}-button`;
// // //   };

// // //   return (
// // //     <Router>
// // //       <div>
// // //         <AppBar
// // //           position="fixed"
// // //           sx={{ backgroundColor: "black", color: "white", boxShadow: "none" }}
// // //         >
// // //           <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
// // //           <img src={LOGO}  style={{width:"30px",height:"30px"}}/>
// // //             {/* <Typography className="name-button">Sathish Benjamin</Typography> */}

// // //             {isMobile ? (
// // //               <>
// // //                 <IconButton
// // //                   edge="end"
// // //                   color="inherit"
// // //                   aria-label="menu"
// // //                   onClick={() => setDrawerOpen(true)}
// // //                 >
// // //                   <MenuIcon />
// // //                 </IconButton>

// // //                 <Drawer
// // //                   anchor="right"
// // //                   open={drawerOpen}
// // //                   onClose={() => setDrawerOpen(false)}
// // //                 >
// // //                   <Box sx={{ width: 200 }} role="presentation">
// // //                     <List>
// // //                       {navItems.map((item) => (
// // //                         <ListItem key={item.name} disablePadding>
// // //                           <Link
// // //                             to={item.link}
// // //                             style={{ textDecoration: "none", width: "100%" }}
// // //                             onClick={() => setDrawerOpen(false)}
// // //                           >
// // //                             <ListItemButton>
// // //                               <ListItemText
// // //                                 primary={item.name}
// // //                                 primaryTypographyProps={{
// // //                                   className: formatClassName(item.name),
// // //                                 }}
// // //                               />
// // //                             </ListItemButton>
// // //                           </Link>
// // //                         </ListItem>
// // //                       ))}
// // //                     </List>
// // //                   </Box>
// // //                 </Drawer>
// // //               </>
// // //             ) : (
// // //               <Box sx={{ display: "flex", gap: 2 }}>
// // //                 {navItems.map((item) => (
// // //                   <Button
// // //                     key={item.name}
// // //                     component={Link}
// // //                     to={item.link}
// // //                     className={formatClassName(item.name)}
// // //                     sx={{ textTransform: "none" }}
// // //                   >
// // //                     {item.name}
// // //                   </Button>
// // //                 ))}
// // //               </Box>
// // //             )}
// // //           </Toolbar>
// // //         </AppBar>

// // //         <Box sx={{ padding: 3, marginTop: "54px", backgroundColor:"#f5f5f5"}}>
// // //           <Routes>
// // //             <Route path="/" element={<Home />} />
// // //             <Route path="/projects" element={<Projects />} />
// // //             <Route path="/contact" element={<Contact />} />
// // //             <Route path="/about" element={<AboutMeSection />} />
// // //             {/* Add other routes for About me, Contact, etc. */}
// // //           </Routes>
// // //         </Box>
// // //       </div>
// // //     </Router>
// // //   );
// // // };

// // // export default App;




// // import React, { useEffect } from "react";
// // import {
// //   AppBar,
// //   Toolbar,
// //   Button,
// //   Box,
// //   IconButton,
// //   Drawer,
// //   List,
// //   ListItem,
// //   ListItemText,
// //   useMediaQuery,
// //   useTheme,
// //   ListItemButton,
// // } from "@mui/material";
// // import MenuIcon from "@mui/icons-material/Menu";
// // import { HashRouter as Router, useLocation } from "react-router-dom";
// // import Home from "./components/home/Home";
// // import Projects from "./components/projects/Projects";
// // import Contact from "./components/contact/contact";
// // import AboutMeSection from "./components/about/AboutMeSection";
// // import LOGO from "./assets/logo_white-removebg-preview.png";
// // import Footer from "./components/footer/Footer";

// // const ScrollToSection = () => {
// //   const location = useLocation();

// //   useEffect(() => {
// //     const sectionId = location.pathname.replace("/", "") || "home";
// //     const el = document.getElementById(sectionId);
// //     if (el) {
// //       el.scrollIntoView({ behavior: "smooth" });
// //     }
// //   }, [location]);

// //   return null;
// // };

// // const AppContent = () => {
// //   const [drawerOpen, setDrawerOpen] = React.useState(false);
// //   const theme = useTheme();
// //   const isMobile = useMediaQuery(theme.breakpoints.down("md"));

// //   const navItems = [
// //     { name: "Home", link: "/" },
// //     { name: "Projects", link: "/projects" },
// //     { name: "About me", link: "/about" },
// //     { name: "Contact", link: "/contact" },
// //   ];

// //   return (
// //     <Router>
// //       <ScrollToSection />
// //       <AppBar
// //         position="fixed"
// //         sx={{ backgroundColor: "black", color: "white", boxShadow: "none" }}
// //       >
// //         <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
// //           <img src={LOGO} style={{ width: "50px", height: "50px" }} />

// //           {isMobile ? (
// //             <>
// //               <IconButton
// //                 edge="end"
// //                 color="inherit"
// //                 aria-label="menu"
// //                 onClick={() => setDrawerOpen(true)}
// //               >
// //                 <MenuIcon />
// //               </IconButton>

// //               <Drawer
// //                 anchor="right"
// //                 open={drawerOpen}
// //                 onClose={() => setDrawerOpen(false)}
// //               >
// //                 <Box sx={{ width: 200 }} role="presentation">
// //                   <List>
// //                     {navItems.map((item) => (
// //                       <ListItem key={item.name} disablePadding>
// //                         <ListItemButton
// //                           component="a"
// //                           href={`#${item.link.replace("/", "") || "home"}`}
// //                           onClick={() => setDrawerOpen(false)}
// //                         >
// //                           <ListItemText primary={item.name} />
// //                         </ListItemButton>
// //                       </ListItem>
// //                     ))}
// //                   </List>
// //                 </Box>
// //               </Drawer>
// //             </>
// //           ) : (
// //             <Box sx={{ display: "flex", gap: 2 }}>
// //               {navItems.map((item) => (
// //                 <Button
// //                   key={item.name}
// //                   component="a"
// //                   href={`#${item.link.replace("/", "") || "home"}`}
// //                   sx={{ textTransform: "none", color: "white" }}
// //                 >
// //                   {item.name}
// //                 </Button>
// //               ))}
// //             </Box>
// //           )}
// //         </Toolbar>
// //       </AppBar>

// //       <Box sx={{ paddingTop: "64px", backgroundColor: "#f5f5f5" }}>
// //         {/* Sections in one page */}
// //         <div id="home"><Home /></div>
// //         <div id="projects"><Projects /></div>
// //         <div id="about"><AboutMeSection /></div>
// //         <div id="contact"><Contact /></div>
// //       </Box>
// //       <Footer />
// //     </Router>
// //   );
// // };

// // export default AppContent;


// import React, { useEffect, useState } from "react";
// import {
//   AppBar,
//   Toolbar,
//   Button,
//   Box,
//   IconButton,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   useMediaQuery,
//   useTheme,
//   ListItemButton,
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import { HashRouter as Router, useLocation } from "react-router-dom";
// import Home from "./components/home/Home";
// import Projects from "./components/projects/Projects";
// import Contact from "./components/contact/contact";
// import AboutMeSection from "./components/about/AboutMeSection";
// import LOGO from "./assets/logo_white-removebg-preview.png";
// import Footer from "./components/footer/Footer";

// const ScrollToSection = () => {
//   const location = useLocation();
//   useEffect(() => {
//     const sectionId = location.pathname.replace("/", "") || "home";
//     const el = document.getElementById(sectionId);
//     if (el) {
//       el.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [location]);
//   return null;
// };

// const AppContent = () => {
//   const [drawerOpen, setDrawerOpen] = React.useState(false);
//   const [activeItem, setActiveItem] = useState('home');
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("md"));
//   const [lastScrollPosition, setLastScrollPosition] = useState(0);
//   const [showAppBar, setShowAppBar] = useState(true);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollPosition = window.scrollY;
      
//       if (currentScrollPosition === lastScrollPosition) {
//         return;
//       }

//       const shouldShow = currentScrollPosition < lastScrollPosition;
//       setShowAppBar(shouldShow);
//       setLastScrollPosition(currentScrollPosition);
//     };

//     window.addEventListener('scroll', handleScroll, { passive: true });
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [lastScrollPosition]);

//   const navItems = [
//     { id: 'home', name: "Home", link: "/" },
//     { id: 'projects', name: "Projects", link: "/projects" },
//     { id: 'about', name: "About me", link: "/about" },
//     { id: 'contact', name: "Contact", link: "/contact" },
//   ];

//   return (
//     <Router>
//       <ScrollToSection />
//       <AppBar
//         position="fixed"
//         sx={{
//           backgroundColor: "black",
//           color: "white",
//           boxShadow: "none",
//           transform: showAppBar ? 'translateY(0)' : 'translateY(-100%)',
//           transition: 'transform 300ms ease-in-out',
//         }}
//       >
//         <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
//           <img src={LOGO} style={{ width: "50px", height: "50px" }} />
          
//           {isMobile ? (
//             <>
//               <IconButton
//                 edge="end"
//                 color="inherit"
//                 aria-label="menu"
//                 onClick={() => setDrawerOpen(true)}
//               >
//                 <MenuIcon />
//               </IconButton>
//               <Drawer
//                 anchor="right"
//                 open={drawerOpen}
//                 onClose={() => setDrawerOpen(false)}
//               >
//                 <Box sx={{ width: 200 }} role="presentation">
//                   <List>
//                     {navItems.map((item) => (
//                       <ListItem key={item.name} disablePadding>
//                         <ListItemButton
//                           component="a"
//                           href={`#${item.link.replace("/", "") || "home"}`}
//                           onClick={() => {
//                             setDrawerOpen(false);
//                             setActiveItem(item.id);
//                           }}
//                           sx={{
//                             justifyContent: 'flex-start',
//                             backgroundColor: activeItem === item.id ? 'white' : 'transparent',
//                             color: activeItem === item.id ? 'black' : 'inherit',
//                             transition: 'all 300ms ease-in-out',
//                             '&:hover': {
//                               backgroundColor: activeItem === item.id ? '#f0f0f0' : 'rgba(0,0,0,0.05)',
//                               transform: 'translateX(10px)',
//                             }
//                           }}
//                         >
//                           <ListItemText primary={item.name} />
//                         </ListItemButton>
//                       </ListItem>
//                     ))}
//                   </List>
//                 </Box>
//               </Drawer>
//             </>
//           ) : (
//             <Box sx={{ display: "flex", gap: 2 }}>
//               {navItems.map((item) => (
//                 <Button
//                   key={item.name}
//                   component="a"
//                   href={`#${item.link.replace("/", "") || "home"}`}
//                   sx={{
//                     textTransform: "none",
//                     color: activeItem === item.id ? 'black' : 'white',
//                     backgroundColor: activeItem === item.id ? 'white' : 'transparent',
//                     borderRadius: 1,
//                     transition: 'all 300ms ease-in-out',
//                     '&:hover': {
//                       backgroundColor: activeItem === item.id ? '#f0f0f0' : 'rgba(255,255,255,0.1)',
//                       color: activeItem === item.id ? 'black' : 'white',
//                       transform: activeItem === item.id ? 'scale(1.05)' : 'translateY(-2px)',
//                     }
//                   }}
//                   onClick={() => setActiveItem(item.id)}
//                 >
//                   {item.name}
//                 </Button>
//               ))}
//             </Box>
//           )}
//         </Toolbar>
//       </AppBar>

//       <Box sx={{ paddingTop: "64px", backgroundColor: "#f5f5f5" }}>
//         {/* Sections in one page */}
//         <div id="home"><Home /></div>
//         <div id="projects"><Projects /></div>
//         <div id="about"><AboutMeSection /></div>
//         <div id="contact"><Contact /></div>
//       </Box>
//       <Footer />
//     </Router>
//   );
// };

// export default AppContent;


// import React, { useEffect, useState } from "react";
// import {
//   AppBar,
//   Toolbar,
//   Button,
//   Box,
//   IconButton,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   useMediaQuery,
//   useTheme,
//   ListItemButton,
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// // import HomeIcon from "@mui/icons-material/Home";
// // import WorkIcon from "@mui/icons-material/Work";
// // import PersonIcon from "@mui/icons-material/Person";
// // import ContactMailIcon from "@mui/icons-material/ContactMail";
// import { HashRouter as Router, useLocation } from "react-router-dom";

// import Home from "./components/home/Home";
// import Projects from "./components/projects/Projects";
// import Contact from "./components/contact/contact";
// import AboutMeSection from "./components/about/AboutMeSection";
// import LOGO from "./assets/logo_white-removebg-preview.png";
// import Footer from "./components/footer/Footer";

// const ScrollToSection = () => {
//   const location = useLocation();
//   useEffect(() => {
//     const sectionId = location.pathname.replace("/", "") || "home";
//     const el = document.getElementById(sectionId);
//     if (el) {
//       el.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [location]);
//   return null;
// };

// const AppContent = () => {
//   const [drawerOpen, setDrawerOpen] = React.useState(false);
//   const [activeItem, setActiveItem] = useState('home');
//   const [lastScrollPosition, setLastScrollPosition] = useState(0);
//   const [showAppBar, setShowAppBar] = useState(true);
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("md"));
//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollPosition = window.scrollY;
//       if (currentScrollPosition === lastScrollPosition) {
//         return;
//       }
//       const shouldShow = currentScrollPosition < lastScrollPosition;
//       setShowAppBar(shouldShow);
//       setLastScrollPosition(currentScrollPosition);
//     };
//     window.addEventListener('scroll', handleScroll, { passive: true });
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [lastScrollPosition]);

//   const navItems = [
//     { id: 'home', name: "Home", link: "/" },
//     { id: 'projects', name: "Projects", link: "/projects" },
//     { id: 'about', name: "About me", link: "/about" },
//     { id: 'contact', name: "Contact", link: "/contact" },
//   ];

//   // const speedDialActions = [
//   //   { icon: <HomeIcon />, name: 'Home', href: '#home' },
//   //   { icon: <WorkIcon />, name: 'Projects', href: '#projects' },
//   //   { icon: <PersonIcon />, name: 'About me', href: '#about' },
//   //   { icon: <ContactMailIcon />, name: 'Contact', href: '#contact' }
//   // ];

//   return (
//     <Router>
//       <ScrollToSection />
//       <AppBar
//         position="fixed"
//         sx={{
//           backgroundColor: "black",
//           color: "white",
//           boxShadow: "none",
//           // transform: showAppBar ? 'translateY(0)' : 'translateY(-100%)',
//           // transition: 'transform 300ms ease-in-out',
//         }}
//       >
//         <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
//           <img src={LOGO} style={{ width: "50px", height: "50px" }} />
          
//           {isMobile ? (
//             <>
//               <IconButton
//                 edge="end"
//                 color="inherit"
//                 aria-label="menu"
//                 onClick={() => setDrawerOpen(true)}
//               >
//                 <MenuIcon />
//               </IconButton>
              
//               <Drawer
//                 anchor="right"
//                 open={drawerOpen}
//                 onClose={() => setDrawerOpen(false)}
//               >
//                 <Box sx={{ width: 200 }} role="presentation">
//                   <List>
//                     {navItems.map((item) => (
//                       <ListItem key={item.name} disablePadding>
//                         <ListItemButton
//                           component="a"
//                           href={`#${item.link.replace("/", "") || "home"}`}
//                           onClick={() => {
//                             setDrawerOpen(false);
//                             setActiveItem(item.id);
//                           }}
//                           sx={{
//                             justifyContent: 'flex-start',
//                             backgroundColor: activeItem === item.id ? 'white' : 'transparent',
//                             color: activeItem === item.id ? 'black' : 'inherit',
//                             transition: 'all 300ms ease-in-out',
//                             '&:hover': {
//                               backgroundColor: activeItem === item.id ? '#f0f0f0' : 'rgba(0,0,0,0.05)',
//                               transform: 'translateX(10px)'
//                             }
//                           }}
//                         >
//                           <ListItemText primary={item.name} />
//                         </ListItemButton>
//                       </ListItem>
//                     ))}
//                   </List>
//                 </Box>
//               </Drawer>
//             </>
//           ) : (
//             <Box sx={{ display: "flex", gap: 2 }}>
//               {navItems.map((item) => (
//                 <Button
//                   key={item.name}
//                   component="a"
//                   href={`#${item.link.replace("/", "") || "home"}`}
//                   sx={{
//                     textTransform: "none",
//                     color: activeItem === item.id ? 'black' : 'white',
//                     backgroundColor: activeItem === item.id ? 'white' : 'transparent',
//                     borderRadius: 1,
//                     transition: 'all 300ms ease-in-out',
//                     '&:hover': {
//                       backgroundColor: activeItem === item.id ? '#f0f0f0' : 'rgba(255,255,255,0.1)',
//                       color: activeItem === item.id ? 'black' : 'white',
//                       transform: activeItem === item.id ? 'scale(1.05)' : 'translateY(-2px)'
//                     }
//                   }}
//                   onClick={() => setActiveItem(item.id)}
//                 >
//                   {item.name}
//                 </Button>
//               ))}
//             </Box>
//           )}
//         </Toolbar>
//       </AppBar>

//       {/* <SpeedDial
//   ariaLabel="Navigation menu"
//   sx={{
//     position: 'fixed',
//     bottom: 16,
//     right: 16,
//     '& .MuiSpeedDialAction-staticTooltip': {
//       backgroundColor: '#000',
//       color: 'white',
//       '&:hover': {
//         backgroundColor: '#333',
//       },
//     },
//   }}
//   icon={<SpeedDialIcon />}
//   onClose={() => setSpeedDialOpen(false)}
//   onOpen={() => setSpeedDialOpen(true)}
//   open={speedDialOpen}
// >
//   {speedDialActions.map((action) => (
//     <SpeedDialAction
//       key={action.name}
//       icon={action.icon}
//       tooltipTitle={action.name}
//       onClick={() => {
//         const sectionId = action.href.replace("#", "");
//         const section = document.getElementById(sectionId);
//         if (section) {
//           section.scrollIntoView({ behavior: "smooth" });
//         }
//         setActiveItem(sectionId);
//         setSpeedDialOpen(false);
//       }}
//       sx={{
//         backgroundColor: activeItem === action.name.toLowerCase() ? '#333' : '#000',
//         '&:hover': {
//           backgroundColor: '#444',
//         },
//       }}
//     />
//   ))}
// </SpeedDial> */}


//       <Box sx={{ paddingTop: "64px", backgroundColor: "#f5f5f5" }}>
//         {/* Sections in one page */}
//         <div id="home"><Home /></div>
//         <div id="projects"><Projects /></div>
//         <div id="about"><AboutMeSection /></div>
//         <div id="contact"><Contact /></div>
//       </Box>
      
//       <Footer />
//     </Router>

// //           <Routes>
// //     <Route path="/" element={
// //       <Box sx={{ paddingTop: "64px", backgroundColor: "#f5f5f5" }}>
// //         <div id="home"><Home /></div>
// //         <div id="projects"><Projects /></div>
// //         <div id="about"><AboutMeSection /></div>
// //         <div id="contact"><Contact /></div>
// //       </Box>
// //     } />
// //     <Route path="/about-full" element={<AboutFull />} />
// //   </Routes>

// //   <Footer />
// // </Router>

//   );
// };

// export default AppContent;


import  { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  ListItemButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { HashRouter as Router, useLocation } from "react-router-dom";

import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/contact";
import AboutMeSection from "./components/about/AboutMeSection";
import LOGO from "./assets/logo_white-removebg-preview.png";
import Footer from "./components/footer/Footer";

const ScrollToSection = () => {
  const location = useLocation();
  useEffect(() => {
    const sectionId = location.pathname.replace("/", "") || "home";
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);
  return null;
};

const AppContent = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("home");
  const [lastScrollPosition, setLastScrollPosition] = useState(0);
  const [showAppBar, setShowAppBar] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      if (currentScrollPosition === lastScrollPosition) {
        return;
      }
      const shouldShow = currentScrollPosition < lastScrollPosition;
      setShowAppBar(shouldShow);
      setLastScrollPosition(currentScrollPosition);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollPosition]);

  const navItems = [
    { id: "home", name: "Home", link: "/" },
    { id: "projects", name: "Projects", link: "/projects" },
    { id: "about", name: "About me", link: "/about" },
    { id: "contact", name: "Contact", link: "/contact" },
  ];

  return (
    <Router>
      <ScrollToSection />
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "black",
          color: "white",
          boxShadow: "none",
          transform: showAppBar ? "translateY(0)" : "translateY(-100%)",
          transition: "transform 300ms ease-in-out",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <img src={LOGO} style={{ width: "50px", height: "50px" }} alt="Logo" />

          {isMobile ? (
            <>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={() => setDrawerOpen(true)}
              >
                <MenuIcon />
              </IconButton>

              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
              >
                <Box sx={{ width: 200 }} role="presentation">
                  <List>
                    {navItems.map((item) => (
                      <ListItem key={item.name} disablePadding>
                        <ListItemButton
                          component="a"
                          href={`#${item.link.replace("/", "") || "home"}`}
                          onClick={() => {
                            setDrawerOpen(false);
                            setActiveItem(item.id);
                          }}
                          sx={{
                            justifyContent: "flex-start",
                            backgroundColor:
                              activeItem === item.id ? "white" : "transparent",
                            color: activeItem === item.id ? "black" : "inherit",
                            transition: "all 300ms ease-in-out",
                            "&:hover": {
                              backgroundColor:
                                activeItem === item.id
                                  ? "#f0f0f0"
                                  : "rgba(0,0,0,0.05)",
                              transform: "translateX(10px)",
                            },
                          }}
                        >
                          <ListItemText primary={item.name} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Drawer>
            </>
          ) : (
            <Box sx={{ display: "flex", gap: 2 }}>
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  component="a"
                  href={`#${item.link.replace("/", "") || "home"}`}
                  sx={{
                    textTransform: "none",
                    color: activeItem === item.id ? "black" : "white",
                    backgroundColor:
                      activeItem === item.id ? "white" : "transparent",
                    borderRadius: 1,
                    transition: "all 300ms ease-in-out",
                    "&:hover": {
                      backgroundColor:
                        activeItem === item.id
                          ? "#f0f0f0"
                          : "rgba(255,255,255,0.1)",
                      color: activeItem === item.id ? "black" : "white",
                      transform:
                        activeItem === item.id
                          ? "scale(1.05)"
                          : "translateY(-2px)",
                    },
                  }}
                  onClick={() => setActiveItem(item.id)}
                >
                  {item.name}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Box sx={{ paddingTop: "64px", backgroundColor: "#f5f5f5" }}>
        <div id="home">
          <Home />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="about">
          <AboutMeSection />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </Box>

      <Footer />
    </Router>
  );
};

export default AppContent;
