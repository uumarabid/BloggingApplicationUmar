import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <DeveloperModeIcon /> <Box sx={{ ml: 1 }}>Bloging app</Box>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>

          <Button color="inherit">
            <Link to="/" className="navbar-link">
              Programming
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="/employee" className="navbar-link">
              AWS
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="/user" className="navbar-link">
              GCP
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="/room" className="navbar-link">
              AZUR
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="/reservation" className="navbar-link">
              Operating systems
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="/" className="navbar-link">
              <span>Umar</span>
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="/" className="navbar-link">
              <span>Lougout</span>
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="/write" className="navbar-link">
              Write blog
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
