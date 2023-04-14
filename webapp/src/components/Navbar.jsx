import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import { AuthContext } from "../context/authContext";
import { useContext } from "react";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <DeveloperModeIcon />{" "}
            <Link to="/" className="navbar-link">
              <Box sx={{ ml: 1 }}>Blogging app</Box>
            </Link>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>

          <Button color="inherit">
            <Link to="/?cat=programming" className="navbar-link">
              Programming
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="/?cat=AWS" className="navbar-link">
              AWS
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="/?cat=GCP" className="navbar-link">
              GCP
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="/?cat=AZUR" className="navbar-link">
              AZUR
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="/?cat=operatingSystem" className="navbar-link">
              Operating systems
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="/" className="navbar-link">
              <span>{currentUser?.username}</span>
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="/" className="navbar-link">
              {currentUser ? (
                <span onClick={logout}>Lougout</span>
              ) : (
                <Link to={"/login"} className="navbar-link">
                  Login
                </Link>
              )}
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
