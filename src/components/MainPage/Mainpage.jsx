import { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import photo from "../../assets/MainpageImages/photo-main.png";
import MyCustomButton from "../CustomComponents/Button";
import backgroundimage from "../../assets/MainpageImages/background-image.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Mainpage() {
  useEffect(() => {
    AOS.init({ duration: 5000,once:false }); // Initialize AOS with animation duration
  }, []);

  const fullText = "Front End Developer";

  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundimage})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        position: "relative",
        pt:{xl:0,md:5,xs:10}
      }}
    >
      <Box
        sx={{
          display: { xl: "flex", lg: "flex", md: "block" },
          alignItems: "center",
          justifyContent: "space-around",
        }}
        data-aos="zoom" // Add AOS attribute here
      >
        {/* Box for first section */}
        <Box data-aos="zoom-out-up">
          {" "}
          {/* Animate the first section on scroll */}
          <Typography
            variant="h6"
            sx={{ color: "#FFBD39", fontSize: "1.5rem" }}
          >
            HELLO !
          </Typography>
          <Box sx={{ display: "flex" }}>
            <Typography
              variant="h2"
              sx={{ fontSize: "4rem", fontWeight: "800", color: "white" }}
            >
              I&apos;m &nbsp;
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: "4rem",
                fontWeight: "800",
                background: "linear-gradient(45deg, #FF6B6B, #FFD93D)", // Gradient colors
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Pradeep Kumar
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="body1"
              component="div"
              sx={{
                my: 2,
                display: "inline-block",
                color: "white",
                fontSize: "2rem",
                fontWeight: "bold",
              }}
            >
              {fullText.split("").map((char, index) => (
                <span
                  key={index}
                  style={{
                    opacity: 0,
                    animation: `fadeIn 2s forwards`,
                    animationDelay: `${index * 0.1}s`,
                    display: "inline-block",
                    animationDirection: "alternate",
                  }}
                >
                  {char}
                </span>
              ))}
            </Typography>
          </Box>
          <Typography
            variant="h6"
            sx={{
              my: 2,
              color: "white",
              fontSize: "1.5rem",
              background: "linear-gradient(45deg, #FF6B6B, #FFD93D)", // Text gradient
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: `1px 2px #d6491680`,
            }}
          >
            A Web Designer (Front End)
          </Typography>
          <MyCustomButton
            label="My Works"
            data-aos="zoom-in"
            filePath="https://github.com"
          />{" "}
          {/* Add animation to button */}
        </Box>

        {/* Box for second section */}
        <Box
          sx={{
            width: { xl: "40%", lg: "40%", ms: "90%" },
            height: { xl: "80%", lg: "80%", sm: "auto" },
          }}
          data-aos="fade-left"
        >
          <img
            src={photo}
            alt="Profile"
            style={{ width: "100%", height: "100%", borderRadius: "10px" }}
          />
        </Box>

        {/* CSS Animation */}
        <style>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(0);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      </Box>
    </Box>
  );
}
