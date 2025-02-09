import { Box, Typography, IconButton } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LanguageIcon from "@mui/icons-material/Language";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import MyCustomButton from "../CustomComponents/Button";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
    });
  }, []);
  return (
    <Box sx={{ backgroundColor: "#1e1e1e", color: "#fff", px: 4,pt:{xl:4,md:5,xs:10} }}data-aos="zoom-in-up">
      {/* Contact Header */}
      <Box textAlign="center" mb={4}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            position: "relative",
            color: "#fff",
            mb: 2,
            textShadow: "2px 2px 4px #ffcc00",
            WebkitTextStroke: "1px black",
          }}
        >
          Contact Me
        </Typography>
        <Typography variant="subtitle1" mt={2}>
          Below are the details to reach out to me !
        </Typography>
      </Box>

      {/* Contact Information */}
      <Box
        sx={{
          display: { xl: "flex", md: "Block", xs: "block" },
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        {/* Address */}
        <Box textAlign="center">
          <IconButton
            sx={{
              color: "#ffc107",
              backgroundColor: "#333",
              padding: 2,
              "&:hover": { backgroundColor: "#444" },
            }}
          >
            <LocationOnIcon fontSize="large" />
          </IconButton>
          <Typography variant="h6" fontWeight="bold" mt={2}>
            ADDRESS
          </Typography>
          <Typography variant="body2" textAlign={"center"} width={300}>
            Near ash brick factory narsari para kohadia Korba Chhattisgarh India
          </Typography>
        </Box>

        {/* Contact Number */}
        <Box textAlign="center">
          <IconButton
            sx={{
              color: "#ffc107",
              backgroundColor: "#333",
              padding: 2,
              "&:hover": { backgroundColor: "#444" },
            }}
          >
            <PhoneIcon
              fontSize="large"
              onClick={() => (window.location.href = "tel:+1234567890")}
            />
          </IconButton>
          <Typography variant="h6" fontWeight="bold" mt={2}>
            CONTACT NUMBER
          </Typography>
          <Typography variant="body2">+91 7024305686</Typography>
        </Box>

        {/* Email Address */}
        <Box textAlign="center">
          <IconButton
            sx={{
              color: "#ffc107",
              backgroundColor: "#333",
              padding: 2,
              "&:hover": { backgroundColor: "#444" },
            }}
          >
            <EmailIcon
              fontSize="large"
              onClick={() =>
                (window.location.href =
                  "mailto:rathorepradeepkumar.16@gmail.com")
              }
            />
          </IconButton>
          <Typography variant="h6" fontWeight="bold" mt={2}>
            EMAIL ADDRESS
          </Typography>
          <Typography variant="body2">
            rathorepradeepkumar.16@gmail.com
          </Typography>
        </Box>

        {/* Download Resume */}
        <Box textAlign="center">
          <IconButton
            sx={{
              color: "#ffc107",
              backgroundColor: "#333",
              padding: 2,
              "&:hover": { backgroundColor: "#444" },
            }}
          >
            <LanguageIcon
              fontSize="large"
              onClick={() =>
                window.open("/ContactContents/pradeep resume  blue.docx")
              }
            />
          </IconButton>
          <Typography variant="h6" fontWeight="bold" mt={2}>
            DOWNLOAD RESUME
          </Typography>
          <Typography variant="body2">Resume Link</Typography>
        </Box>
      </Box>

      {/* Question and Social Media */}
      <Box textAlign="center" my={4}>
        <Typography variant="h5" fontWeight="bold" mb={2}>
          Have a Question?
        </Typography>
        <MyCustomButton label="Contact" />
      </Box>

      {/* Social Media Links */}
      <Box textAlign="center" mt={2}>
        <Typography variant="subtitle1" mb={2}>
          Find me on
        </Typography>
        <Box display="flex" justifyContent="center" gap={2}>
          <IconButton
            sx={{ color: "#ffc107" }}
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <YouTubeIcon />
          </IconButton>
          <IconButton
            sx={{ color: "#ffc107" }}
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            sx={{ color: "#ffc107" }}
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            sx={{ color: "#ffc107" }}
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
