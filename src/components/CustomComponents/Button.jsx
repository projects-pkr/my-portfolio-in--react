
import { Button } from '@mui/material';
import PropTypes from 'prop-types';
const MyCustomButton = ({ label,startIcon,filePath }) => (
  
  <a
      href={filePath} 
      style={{ textDecoration: "none" }}
      target="_blank" 
      rel="noopener noreferrer">  
  <Button
    variant="contained"
    startIcon={startIcon}
    sx={{
      my: 3, 
      fontSize: "1.2rem", 
      background: "linear-gradient(45deg, #FF6B6B, #FFD93D)", 
      color: "purple", 
      fontWeight: "bold", 
      boxShadow: "1px 2px grey",
      borderRadius: "20px", 
      transition: " 1s ease", 

      "&:hover": {
        background: "linear-gradient(270deg, #FF6B6B, #FFD93D)", 
        color: "blue", 
        boxShadow: "1px 2px white", 
      },
    }}
  >
   { label }
  </Button>
  </a>
);
MyCustomButton.propTypes = {
    label: PropTypes.string.isRequired,
    startIcon: PropTypes.element,
    filePath: PropTypes.string,
  };
export default MyCustomButton;
