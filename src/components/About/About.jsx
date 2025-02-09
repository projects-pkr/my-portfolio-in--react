import React from "react";
import { Box, Typography, LinearProgress, Avatar } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CustomButton from "../CustomComponents/Button";
import ProfilePhoto from "../../assets/AboutMeImages/profile-photo.jpg";
import Backgroundimage from "../../assets/AboutMeImages/background-image - Copy.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
  }, []);
  const skills = [
    { name: "HTML", level: 80 },
    { name: "CSS", level: 75 },
    { name: "Bootstrap", level: 70 },
    { name: "JavaScript", level: 70 },
    { name: "React", level: 70 },
  ];
  return (
    <Box
      sx={{
        display: { xl: "flex", lg: "flex", md: "block", sx: "block" },
        flexDirection: "row",
        backgroundImage: `url(${Backgroundimage})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        color: "#fff",
        pt: 5 ,
        position:"relative"
      }}
    >
      {/* Profile Section */}
      <Box
        sx={{
          p: 5,
          textAlign: "center",
          display: { xl: "block", lg: "block", md: "flex", sx: "flex" },
        }}
         data-aos="fade-up"
      >
        <Box>
          {" "}
          <Avatar
            alt="Pradeep Kumar"
            src={ProfilePhoto}
            sx={{
              width: 150,
              height: 150,
              margin: "0 auto",
              border: "0.2rem solid #ffcc00",
            }}
          />
          <Typography variant="h6">Name: Pradeep Kumar</Typography>
          <Typography>Job Role: Web Developer (FrontEnd)</Typography>
          <Typography>Experience: 6 Months</Typography>
          <Typography>Address: Korba, Chhattisgarh, India</Typography>
        </Box>
        <Box>
          {" "}
          {/* Skills Section */}
          <Typography variant="h6">Skills</Typography>
          {skills.map((skill) => (
            <Box key={skill.name}>
              <Typography>
                {skill.name} {skill.level}%
              </Typography>
              <LinearProgress
                variant="determinate"
                value={skill.level}
                sx={{
                  height: 8,
                  backgroundColor: "#333",
                  "& .MuiLinearProgress-bar": {
                    background:
                      "linear-gradient(90deg,rgb(255, 51, 0),rgb(7, 139, 48))", // Linear gradient here
                  },
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>
      {/* About Section */}
      <Box sx={{ p: 5 }} data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
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
          About Me
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          With over 6 months of internship experience at EVD Technology,
          accompanied by a bachelor&apos;s degree in computer application.
        </Typography>

        <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1 }}>
          <Typography>
            <strong>Profile:</strong> Web Designer (Front End)
          </Typography>
          <Typography>
            <strong>Domain:</strong> Web Developer
          </Typography>
          <Typography>
            <strong>Education:</strong> Bachelor in Computer Application (BCA)
          </Typography>
          <Typography>
            <strong>Language:</strong> English, Hindi
          </Typography>
          <Typography>
            <strong>Other Skills:</strong> MS Office, Corel Draw, Adobe
            Photoshop
          </Typography>
          <Typography>
            <strong>Interest:</strong> Traveling and exploring nature and local
            places
          </Typography>
        </Box>

        {/* Projects and LinkedIn Section */}
        <Box sx={{ mt: 4, display: "flex", alignItems: "center", gap: 2 }}>
          <Typography
            variant="h5"
            sx={{ color: "#ffcc00", fontWeight: "bold" }}
          >
            10+ Projects completed
          </Typography>
        </Box>
        <Box>
          <CustomButton label="LinkedIn" startIcon={<LinkedInIcon />} />
        </Box>
      </Box>
    </Box>
  );
};
export default About;
