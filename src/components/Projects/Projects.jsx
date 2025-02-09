import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  useMediaQuery,
} from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const projects = [
  {
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, eos?",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, suscipit! Eveniet sunt dignissimos voluptates nihil facilis odio, earum obcaecati voluptatem..",
    image: "src/assets/ProjectImages/ndaMainBanner5-JDh33Kob.jpg",
  },
  {
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, eos?",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, suscipit! Eveniet sunt dignissimos voluptates nihil facilis odio, earum obcaecati voluptatem..",
    image: "src/assets/ProjectImages/ndaMainBanner5-JDh33Kob.jpg",
  },
  {
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, eos?",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, suscipit! Eveniet sunt dignissimos voluptates nihil facilis odio, earum obcaecati voluptatem..",
    image: "src/assets/ProjectImages/ndaMainBanner5-JDh33Kob.jpg",
  },
  {
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, eos?",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, suscipit! Eveniet sunt dignissimos voluptates nihil facilis odio, earum obcaecati voluptatem..",
    image: "src/assets/ProjectImages/ndaMainBanner5-JDh33Kob.jpg",
  },
  {
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, eos?",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, suscipit! Eveniet sunt dignissimos voluptates nihil facilis odio, earum obcaecati voluptatem..",
    image: "src/assets/ProjectImages/ndaMainBanner5-JDh33Kob.jpg",
  },
  {
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, eos?",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, suscipit! Eveniet sunt dignissimos voluptates nihil facilis odio, earum obcaecati voluptatem..",
    image: "src/assets/ProjectImages/ndaMainBanner5-JDh33Kob.jpg",
  },
];

const Projects = () => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <Box sx={{ backgroundColor: "#1e1e1e", color: "#fff", px: 4,pt:10 }}>
      {/* Projects Header */}
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
          Projects
        </Typography>
        <Typography variant="subtitle1" mt={2}>
          Below are the sample projects developed in React, NEXT Js, Core HTML,
          and CSS
        </Typography>
      </Box>

      <Box>
        {isSmallScreen ? (
          <Slider {...carouselSettings}>
            {projects.map((project, index) => (
              <Box key={index} sx={{ padding: 2 }}>
                <Card
                  sx={{
                    backgroundColor: "#333",
                    borderRadius: 2,
                    overflow: "hidden",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt="Project image"
                  />
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {project.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Slider>
        ) : (
          <Box display="flex" flexWrap="wrap" justifyContent="center" gap={2}>
            {projects.map((project, index) => (
              <Box
                key={index}
                sx={{
                  width: "30%",
                  backgroundColor: "rgb(120, 175, 192)",
                  borderRadius: 2,
                  overflow: "hidden",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Card
                  sx={{ backgroundColor: "transparent", boxShadow: "none" }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt="Project image"
                  />
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {project.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Projects;
