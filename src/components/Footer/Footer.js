import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import TvIcon from "@mui/icons-material/Tv";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate(0);

  useEffect(() => {
    if (value === 0) {
      navigate("/");
    } else if (value === 1) {
      navigate("/movies");
    } else {
      navigate("/tvseries");
    }
  }, [value, navigate]);

  return (
    <Box className="footer-nav-container">
      <BottomNavigation
        sx={{ background: "#333", borderTop: "2px solid #FFF" }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Trending"
          icon={<WhatshotIcon style={{ color: "#FFF" }} />}
        />
        <BottomNavigationAction
          label="Movies"
          icon={<MovieCreationIcon style={{ color: "#FFF" }} />}
        />
        <BottomNavigationAction
          label="Tv Series"
          icon={<TvIcon style={{ color: "#FFF" }} />}
        />
      </BottomNavigation>
    </Box>
  );
};

export default Footer;
