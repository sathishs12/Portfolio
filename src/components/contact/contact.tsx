// import React from "react";
// import { Box, Typography, TextField, Button, Divider } from "@mui/material";
// import { motion } from "framer-motion";

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

// // Animation variants
// const fadeInUp = {
//   hidden: { opacity: 0, y: 50 },
//   visible: (i: number = 0) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.2,
//       duration: 0.6,
//       ease: "easeOut"
//     }
//   })
// };

// const Contact: React.FC = () => {
//   return (
//     <motion.div
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.2 }}
//       variants={fadeInUp}
//     >
//       <Box
//         id="contact"
//         sx={{
//           backgroundColor: "#f5f5f5",
//           py: 6,
//           px: 4,
//           textAlign: "center",
//           // width: { xs: "100%", md: "1239px" },
//           margin: "0 auto",
//         }}
//       >
//         {/* Title */}
//         <motion.div custom={0} variants={fadeInUp}>
//           <Box
//             sx={{
//               border: "2px solid black",
//               display: "inline-block",
//               px: "32px",
//               py: "8px",
//               mb: 4,
//             }}
//           >
//             <Typography
//               sx={{
//                 color: "black",
//                 fontSize: "24px",
//                 fontWeight: "bold",
//                 letterSpacing: 2,
//               }}
//             >
//               CONTACT
//             </Typography>
//           </Box>
//         </motion.div>

//         {/* Description Text */}
//         <motion.div custom={1} variants={fadeInUp}>
//           <Typography
//             sx={{
//               maxWidth: "600px",
//               margin: "0 auto",
//               mb: 3,
//               color: "#666",
//               fontSize: "14px",
//             }}
//           >
//             We're here to help with any questions or inquiries you may have.
//             Whether you're looking for more information about our services or
//             simply want to say hello, feel free to reach out—we’d love to hear
//             from you.
//           </Typography>
//         </motion.div>

//         <motion.div custom={2} variants={fadeInUp}>
//           <ChevronDivider />
//         </motion.div>

//         {/* Contact Form */}
//         <motion.div
//           custom={3}
//           variants={fadeInUp}
//         >
//           <Box
//             sx={{
//               maxWidth: "600px",
//               margin: "0 auto",
//               display: "flex",
//               flexDirection: "column",
//               gap: 3,
//             }}
//           >
//             {["ENTER YOUR NAME*", "ENTER YOUR EMAIL*", "PHONE NUMBER"].map(
//               (placeholder, idx) => (
//                 <motion.div key={idx} custom={idx + 4} variants={fadeInUp}>
//                   <TextField
//                     fullWidth
//                     placeholder={placeholder}
//                     variant="standard"
//                     InputProps={{
//                       sx: {
//                         borderRadius: 0,
//                         borderBottom: "1px solid black",
//                         pb: 1,
//                         fontSize: "14px",
//                       },
//                     }}
//                   />
//                 </motion.div>
//               )
//             )}

//             <motion.div custom={7} variants={fadeInUp}>
//               <TextField
//                 fullWidth
//                 multiline
//                 rows={4}
//                 placeholder="YOUR MESSAGE*"
//                 variant="standard"
//                 InputProps={{
//                   sx: {
//                     borderRadius: 0,
//                     borderBottom: "1px solid black",
//                     pb: 1,
//                     fontSize: "14px",
//                   },
//                 }}
//               />
//             </motion.div>

//             <motion.div custom={8} variants={fadeInUp}>
//               <Button
//                 variant="outlined"
//                 sx={{
//                   alignSelf: "center",
//                   borderColor: "black",
//                   color: "black",
//                   borderRadius: 0,
//                   px: 4,
//                   py: 1,
//                   mt: 2,
//                   "&:hover": {
//                     borderColor: "black",
//                     backgroundColor: "rgba(0,0,0,0.05)",
//                   },
//                 }}
//               >
//                 SUBMIT
//               </Button>
//             </motion.div>
//           </Box>
//         </motion.div>
//       </Box>
//     </motion.div>
//   );
// };

// export default Contact;


// import React from "react";
// import { Box, Typography, TextField, Button, Divider } from "@mui/material";
// import { motion } from "framer-motion";

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

// // Animation variants
// const fadeInUp = {
//   hidden: { opacity: 0, y: 50 },
//   visible: (i: number = 0) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.2,
//       duration: 0.6,
//       ease: "easeOut"
//     }
//   }),
// };

// const Contact: React.FC = () => {
//   return (
//     <Box
//       id="contact"
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
//         initial="hidden"
//         whileInView="visible"
//         exit="hidden"
//         viewport={{ once: false, amount: 0.2 }}
//         variants={fadeInUp}
//         custom={0}
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
//           <Typography
//             sx={{
//               color: "black",
//               fontSize: "24px",
//               fontWeight: "bold",
//               letterSpacing: 2,
//             }}
//           >
//             CONTACT
//           </Typography>
//         </Box>
//       </motion.div>

//       {/* Description Text */}
//       <motion.div
//         initial="hidden"
//         whileInView="visible"
//         exit="hidden"
//         viewport={{ once: false, amount: 0.2 }}
//         variants={fadeInUp}
//         custom={1}
//       >
//         <Typography
//           sx={{
//             maxWidth: "600px",
//             margin: "0 auto",
//             mb: 3,
//             color: "#666",
//             fontSize: "14px",
//           }}
//         >
//           We're here to help with any questions or inquiries you may have.
//           Whether you're looking for more information about our services or
//           simply want to say hello, feel free to reach out—we’d love to hear
//           from you.
//         </Typography>
//       </motion.div>

//       <motion.div
//         initial="hidden"
//         whileInView="visible"
//         exit="hidden"
//         viewport={{ once: false, amount: 0.2 }}
//         variants={fadeInUp}
//         custom={2}
//       >
//         <ChevronDivider />
//       </motion.div>

//       {/* Contact Form */}
//       <motion.div
//         initial="hidden"
//         whileInView="visible"
//         exit="hidden"
//         viewport={{ once: false, amount: 0.2 }}
//         variants={fadeInUp}
//         custom={3}
//       >
//         <Box
//           sx={{
//             maxWidth: "600px",
//             margin: "0 auto",
//             display: "flex",
//             flexDirection: "column",
//             gap: 3,
//           }}
//         >
//           {["ENTER YOUR NAME*", "ENTER YOUR EMAIL*", "PHONE NUMBER"].map(
//             (placeholder, idx) => (
//               <motion.div
//                 key={idx}
//                 initial="hidden"
//                 whileInView="visible"
//                 exit="hidden"
//                 viewport={{ once: false, amount: 0.2 }}
//                 variants={fadeInUp}
//                 custom={idx + 4}
//               >
//                 <TextField
//                   fullWidth
//                   placeholder={placeholder}
//                   variant="standard"
//                   InputProps={{
//                     sx: {
//                       borderRadius: 0,
//                       borderBottom: "1px solid black",
//                       pb: 1,
//                       fontSize: "14px",
//                     },
//                   }}
//                 />
//               </motion.div>
//             )
//           )}

//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             exit="hidden"
//             viewport={{ once: false, amount: 0.2 }}
//             variants={fadeInUp}
//             custom={7}
//           >
//             <TextField
//               fullWidth
//               multiline
//               rows={4}
//               placeholder="YOUR MESSAGE*"
//               variant="standard"
//               InputProps={{
//                 sx: {
//                   borderRadius: 0,
//                   borderBottom: "1px solid black",
//                   pb: 1,
//                   fontSize: "14px",
//                 },
//               }}
//             />
//           </motion.div>

//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             exit="hidden"
//             viewport={{ once: false, amount: 0.2 }}
//             variants={fadeInUp}
//             custom={8}
//           >
//             <Button
//               variant="outlined"
//               sx={{
//                 alignSelf: "center",
//                 borderColor: "black",
//                 color: "black",
//                 borderRadius: 0,
//                 px: 4,
//                 py: 1,
//                 mt: 2,
//                 "&:hover": {
//                   borderColor: "black",
//                   backgroundColor: "rgba(0,0,0,0.05)",
//                 },
//               }}
//             >
//               SUBMIT
//             </Button>
//           </motion.div>
//         </Box>
//       </motion.div>
//     </Box>
//   );
// };

// export default Contact;



// import React, { useRef } from "react";
// import { Box, Typography, TextField, Button, Divider, Link } from "@mui/material";
// import { motion } from "framer-motion";
// import emailjs from "emailjs-com";

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

// // Animation variants
// const fadeInUp = {
//   hidden: { opacity: 0, y: 50 },
//   visible: (i: number = 0) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.2,
//       duration: 0.6,
//       ease: "easeOut"
//     }
//   }),
// };

// const Contact: React.FC = () => {

//    const formRef = useRef<HTMLFormElement>(null);
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     if (formRef.current) {
//       emailjs
//         .sendForm(
//           "service_55z3r2n",     // 🔁 Replace with your service ID
//           "template_4p0nc8p",    // 🔁 Replace with your template ID
//           formRef.current,
//           "pgMDYDfsCYiXs2F4G"      // 🔁 Replace with your public key
//         )
//         .then(
//           () => {
//             alert("Message sent successfully!");
//             formRef.current?.reset();
//           },
//           (error) => {
//             alert("Failed to send. Please try again.");
//             console.error("Email error:", error);
//           }
//         );
//     }
//   };

//   return (
//     <Box
//       id="contact"
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
//         initial="hidden"
//         whileInView="visible"
//         exit="hidden"
//         viewport={{ once: false, amount: 0.2 }}
//         variants={fadeInUp}
//         custom={0}
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
//           <Typography
//             sx={{
//               color: "black",
//               fontSize: "24px",
//               fontWeight: "bold",
//               letterSpacing: 2,
//             }}
//           >
//             CONTACT
//           </Typography>
//         </Box>
//       </motion.div>

//       {/* Description Text */}
//       <motion.div
//         initial="hidden"
//         whileInView="visible"
//         exit="hidden"
//         viewport={{ once: false, amount: 0.2 }}
//         variants={fadeInUp}
//         custom={1}
//       >
//         <Typography
//           sx={{
//             maxWidth: "600px",
//             margin: "0 auto",
//             mb: 3,
//             color: "#666",
//             fontSize: "14px",
//           }}
//         >
//           We're here to help with any questions or inquiries you may have.
//           Whether you're looking for more information about our services or
//           simply want to say hello, feel free to reach out—we’d love to hear
//           from you.
//         </Typography>
//       </motion.div>

//       {/* Email & Phone */}
//       <motion.div
//         initial="hidden"
//         whileInView="visible"
//         exit="hidden"
//         viewport={{ once: false, amount: 0.2 }}
//         variants={fadeInUp}
//         custom={2}
//       >
//         <Typography sx={{ fontWeight: "bold", mb: 0.5, color: "#111" }}>
//           📧 Email:{" "}
//           <Link href="mailto:sathish.dev@gmail.com" underline="hover">
//             sathish.dev@gmail.com
//           </Link>
//         </Typography>
//         <Typography sx={{ fontWeight: "bold", mb: 2, color: "#111" }}>
//           📞 Phone:{" "}
//           <Link href="tel:+919876543210" underline="hover">
//             +91 98765 43210
//           </Link>
//         </Typography>
//       </motion.div>

//       <motion.div
//         initial="hidden"
//         whileInView="visible"
//         exit="hidden"
//         viewport={{ once: false, amount: 0.2 }}
//         variants={fadeInUp}
//         custom={3}
//       >
//         <ChevronDivider />
//       </motion.div>

//       {/* Contact Form */}
//        <motion.div
//         initial="hidden"
//         whileInView="visible"
//         exit="hidden"
//         viewport={{ once: false, amount: 0.2 }}
//         variants={fadeInUp}
//         custom={4}
//       >
//         <Box
//           component="form"
//           ref={formRef}
//           onSubmit={handleSubmit}
//           sx={{
//             maxWidth: "600px",
//             margin: "0 auto",
//             display: "flex",
//             flexDirection: "column",
//             gap: 3,
//           }}
//         >
//           <TextField name="user_name" placeholder="ENTER YOUR NAME*" variant="standard" fullWidth required
//             InputProps={{ sx: { borderRadius: 0, borderBottom: "1px solid black", pb: 1, fontSize: "14px" } }}
//           />
//           <TextField name="user_email" placeholder="ENTER YOUR EMAIL*" variant="standard" fullWidth required
//             InputProps={{ sx: { borderRadius: 0, borderBottom: "1px solid black", pb: 1, fontSize: "14px" } }}
//           />
//           <TextField name="user_phone" placeholder="PHONE NUMBER" variant="standard" fullWidth
//             InputProps={{ sx: { borderRadius: 0, borderBottom: "1px solid black", pb: 1, fontSize: "14px" } }}
//           />
//           <TextField name="message" placeholder="YOUR MESSAGE*" multiline rows={4} variant="standard" fullWidth required
//             InputProps={{ sx: { borderRadius: 0, borderBottom: "1px solid black", pb: 1, fontSize: "14px" } }}
//           />

//           <Button
//             type="submit"
//             variant="outlined"
//             sx={{
//               alignSelf: "center",
//               borderColor: "black",
//               color: "black",
//               borderRadius: "999px",
//               px: 4,
//               py: 1,
//               mt: 2,
//              transition: "all 0.3s ease",
//               "&:hover": {
//                 backgroundColor: "#000",
//                 color: "#fff", // Text turns white on hover
//                 borderColor: "#000", // Keeps border black
//               },
//             }}
//           >
//             SUBMIT
//           </Button>
//         </Box>
//       </motion.div>
//     </Box>
//   );
// };

// export default Contact;



import React, { useRef, useState } from "react";
import {
  Box, Typography, TextField, Button, Divider, Link,
  Dialog, DialogTitle, DialogContent, DialogActions
} from "@mui/material";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const ChevronDivider: React.FC = () => (
  <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", my: 4 }}>
    <Box sx={{ display: "flex", alignItems: "center", width: "150px" }}>
      <Divider sx={{ flex: 1 }} />
      <Typography component="span" sx={{ mx: 1, fontSize: "16px", color: "#555" }}>&#x25BC;</Typography>
      <Typography component="span" sx={{ mx: 1, fontSize: "16px", color: "#555" }}>&#x25B2;</Typography>
      <Typography component="span" sx={{ mx: 1, fontSize: "16px", color: "#555" }}>&#x25BC;</Typography>
      <Divider sx={{ flex: 1 }} />
    </Box>
  </Box>
);

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut"
    }
  }),
};

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [open, setOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formRef.current) {
      emailjs
        .sendForm(
          "service_55z3r2n",
          "template_4p0nc8p",
          formRef.current,
          "pgMDYDfsCYiXs2F4G"
        )
        .then(
          () => {
            setDialogContent("✅ Your message has been sent successfully!");
            setOpen(true);
            formRef.current?.reset();
          },
          (error) => {
            console.error("Email error:", error);
            setDialogContent("❌ Failed to send your message. Please try again.");
            setOpen(true);
          }
        );
    }
  };

  return (
    <Box id="contact" sx={{ backgroundColor: "#f5f5f5", py: 6, px: 4, textAlign: "center", margin: "0 auto" }}>
      {/* Title */}
      <motion.div initial="hidden" whileInView="visible" exit="hidden" viewport={{ once: false, amount: 0.2 }} variants={fadeInUp} custom={0}>
        <Box sx={{ border: "2px solid black", display: "inline-block", px: "32px", py: "8px", mb: 4 }}>
          <Typography sx={{ color: "black", fontSize: "24px", fontWeight: "bold", letterSpacing: 2 }}>CONTACT</Typography>
        </Box>
      </motion.div>

      {/* Description */}
      <motion.div initial="hidden" whileInView="visible" exit="hidden" viewport={{ once: false, amount: 0.2 }} variants={fadeInUp} custom={1}>
        <Typography sx={{ maxWidth: "600px", margin: "0 auto", mb: 3, color: "#666", fontSize: "14px" }}>
          We're here to help with any questions or inquiries you may have. Whether you're looking for more information about our services or simply want to say hello, feel free to reach out—we’d love to hear from you.
        </Typography>
      </motion.div>

      {/* Contact Info */}
      <motion.div initial="hidden" whileInView="visible" exit="hidden" viewport={{ once: false, amount: 0.2 }} variants={fadeInUp} custom={2}>
        <Typography sx={{ fontWeight: "bold", mb: 0.5, color: "#111" }}>
          📧 Email: <Link href="mailto:sathish.dev@gmail.com" underline="hover">sathish.dev@gmail.com</Link>
        </Typography>
        <Typography sx={{ fontWeight: "bold", mb: 2, color: "#111" }}>
          📞 Phone: <Link href="tel:+919876543210" underline="hover">+91 98765 43210</Link>
        </Typography>
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" exit="hidden" viewport={{ once: false, amount: 0.2 }} variants={fadeInUp} custom={3}>
        <ChevronDivider />
      </motion.div>

      {/* Contact Form */}
      <motion.div initial="hidden" whileInView="visible" exit="hidden" viewport={{ once: false, amount: 0.2 }} variants={fadeInUp} custom={4}>
        <Box
          component="form"
          ref={formRef}
          onSubmit={handleSubmit}
          sx={{ maxWidth: "600px", margin: "0 auto", display: "flex", flexDirection: "column", gap: 3 }}
        >
          <TextField name="user_name" placeholder="ENTER YOUR NAME*" variant="standard" fullWidth required
            InputProps={{ sx: { borderRadius: 0, borderBottom: "1px solid black", pb: 1, fontSize: "14px" } }} />
          <TextField name="user_email" placeholder="ENTER YOUR EMAIL*" variant="standard" fullWidth required
            InputProps={{ sx: { borderRadius: 0, borderBottom: "1px solid black", pb: 1, fontSize: "14px" } }} />
          <TextField name="user_phone" placeholder="PHONE NUMBER" variant="standard" fullWidth
            InputProps={{ sx: { borderRadius: 0, borderBottom: "1px solid black", pb: 1, fontSize: "14px" } }} />
          <TextField name="message" placeholder="YOUR MESSAGE*" multiline rows={4} variant="standard" fullWidth required
            InputProps={{ sx: { borderRadius: 0, borderBottom: "1px solid black", pb: 1, fontSize: "14px" } }} />

          <Button
            type="submit"
            variant="outlined"
            sx={{
              alignSelf: "center",
              borderColor: "black",
              color: "black",
              borderRadius: "999px",
              px: 4,
              py: 1,
              mt: 2,
             transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#000",
                color: "#fff", // Text turns white on hover
                borderColor: "#000", // Keeps border black
              },
            }}
          >
            SUBMIT
          </Button>
        </Box>
      </motion.div>

      {/* Popup Dialog */}
       <Dialog
      open={open}
      onClose={() => setOpen(false)}
      maxWidth="xs"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 4,
          boxShadow: 6,
          p: 2,
        },
      }}
    >
      <DialogTitle
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          fontWeight: "bold",
          fontSize: "18px",
          color: "#000",
        }}
      >
        {/* <CheckCircleIcon color="success" /> */}
        Message Status
      </DialogTitle>

      <DialogContent>
        <Box
          sx={{
            bgcolor: "#f9f9f9",
            p: 2,
            borderRadius: 2,
            border: "1px solid #e0e0e0",
          }}
        >
          <Typography sx={{ fontSize: "14px", color: "#444" }}>
            {dialogContent}
          </Typography>
        </Box>
      </DialogContent>

      <DialogActions>
        <Button
          onClick={() => setOpen(false)}
          variant="outlined"
          sx={{
              alignSelf: "center",
              borderColor: "black",
              color: "black",
              borderRadius: "999px",
              px: 3,
              py: 1,
              mt: 1,
             transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#000",
                color: "#fff", // Text turns white on hover
                borderColor: "#000", // Keeps border black
              },
            }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
    </Box>
  );
};

export default Contact;
