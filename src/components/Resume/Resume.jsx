import { Box, Typography, Divider } from "@mui/material";
import MyCustomButton from "../CustomComponents/Button";
import resume from "../../assets/ResumeContent/pradeep resume  BLUE FORMATE.pdf";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Resume = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <Box
      sx={{
        backgroundColor: "#1e1e1e",
        color: "#fff",
        pt: 10,
        px:4,
        minHeight: "100vh",
      }}
    >
      {/* Resume Header */}
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
          Resume
        </Typography>
        <Typography variant="subtitle1" mt={2}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sit
          quo voluptatibus architecto sit facere fuga explicabo eligendi.
        </Typography>
      </Box>

      {/* Experience Section */}
      <Box textAlign="center" mt={6}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            mb: 2,
            textShadow: "1px 1px 4px #ffcc00",
            WebkitTextStroke: "1px black",
          }}
        >
          Experience
        </Typography>
      </Box>
      <Divider
        sx={{
          backgroundColor: "#ffbb33",
          margin: "16px auto",
          width: "60px",
          height: "3px",
        }}
      />

      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        gap={4}
        mt={4}
        
      >
        <Box p={4} sx={{ backgroundColor: "#333", borderRadius: 2, flex: 1 }}data-aos="zoom-in-right">
          <Typography variant="h6" color="primary">
            2000–Present
          </Typography>
          <Typography variant="h5" fontWeight="bold">
            Lorem ipsum dolor sit amet.
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            Merkle
          </Typography>
          <Typography variant="body2" mt={2}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <ul>
              <li>
                Analyzed ad campaigns, clickstream, and customer surveys data,
                identified an increasing demand and launched a strategic product
                line.
              </li>
              <li>
                Developed time series forecasting models to predict sales and
                optimize marketing budgets, got model performance at 92%.
              </li>
              <li>
                Designed and executed A/B tests, performed rigorous statistical
                analysis, led to 20% MoM increase in the conversion rate.
              </li>
            </ul>
          </Typography>
        </Box>

        <Box p={4} sx={{ backgroundColor: "#333", borderRadius: 2, flex: 1 }}data-aos="zoom-in-left">
          <Typography variant="h6" color="primary">
            2000–2000
          </Typography>
          <Typography variant="h5" fontWeight="bold">
            Lorem ipsum dolor sit amet.
          </Typography>
          <Typography variant="subtitle2" color="#333">
            iQuanti
          </Typography>
          <Typography variant="body2" mt={2}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <ul>
              <li>
                Performed in-depth market research and analysis to create online
                pages. Resulted in +10% website growth and 30% increase in
                conversion rate YoY.
              </li>
              <li>
                Delivered multiple training and mentorship sessions on
                analytical tools like SQL, MS Excel, Power BI, Tableau and
                Python.
              </li>
              <li>
                Performed migration and enhancements for merchandising
                dashboard, involved data integration and its feature
                improvement.
              </li>
            </ul>
          </Typography>
        </Box>
      </Box>

      {/* Education Section */}
      <Box textAlign="center" mt={8}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            mb: 2,
            textShadow: "1px 1px 4px #ffcc00",
            WebkitTextStroke: "1px black",
          }}
        >
          Education
        </Typography>
      </Box>
      <Divider
        sx={{
          backgroundColor: "#ffbb33",
          margin: "16px auto",
          width: "60px",
          height: "3px",
        }}
      />

      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        gap={4}
        mt={4}
      >
        <Box p={4} sx={{ backgroundColor: "#333", borderRadius: 2, flex: 1 }}data-aos="zoom-in-right">
          <Typography variant="h6" color="primary">
            2017–2020
          </Typography>
          <Typography variant="h5" fontWeight="bold">
            Bachelor in Computer Application
          </Typography>
          <Typography variant="subtitle2" color="#ffcc00">
            Atal Bihari Vajpayee Vishwavidyalaya Bilaspur Chhattisgarh
          </Typography>
          <Typography variant="body2" mt={2}>
            College: Kamla Nehru College, Korba Chhattisgarh.
            <br />
            Grade: First class.
          </Typography>
        </Box>

        <Box p={4} sx={{ backgroundColor: "#333", borderRadius: 2, flex: 1 }}data-aos="zoom-in-left">
          <Typography variant="h6" color="primary">
            2014–2015
          </Typography>
          <Typography variant="h5" fontWeight="bold">
            Higher Secondary School
          </Typography>
          <Typography variant="subtitle2" color="#ffcc00">
            Board: Chhattisgarh Board of Secondary Education, Raipur
          </Typography>
          <Typography variant="body2" mt={2}>
            School: Govt Higher Sec. School Rampur Korba Chhattisgarh.
            <br />
            Grade: First class.
          </Typography>
        </Box>
      </Box>

      {/* Download CV Button */}
      <Box textAlign="center" mt={6}>
        <MyCustomButton label="Download CV" filePath={resume} />
      </Box>
    </Box>
  );
};

export default Resume;
