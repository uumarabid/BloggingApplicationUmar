import { Button, FormControl, Grid, Paper, TextField } from "@mui/material";
import { Container } from "@mui/system";
// import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext.js";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const [err, setError] = useState(null);

  // https://reactrouter.com/en/main/hooks/use-navigate
  const navigate = useNavigate();

  // call login function here
  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    //prevent from refreshing on click
    e.preventDefault();
    try {
      // login function from authContext
      await login(inputs);
      // await axios.post("http://localhost:3001/auth/login", inputs);
      navigate("/");
    } catch (err) {
      // console.log(err);
      setError(err.response.data);
    }

    // console.log(res);
  };
  return (
    <Container component="main" maxWidth="xs">
      <Paper variant="outlined" backgound="dark" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
        <FormControl>
          <legend>
            <h1>Welcome to login page</h1>
          </legend>
          <Grid container rowSpacing={2}>
            <Grid item xs={12}>
              <TextField
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
                label="Username"
                variant="outlined"
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                label="Password"
                variant="outlined"
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <Button type="submit" variant="contained" onClick={handleSubmit}>
                Login
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Link to={"/"}>
                <Button type="submit" variant="contained">
                  Cancel
                </Button>
              </Link>
            </Grid>

            {/* fix this */}
            <Grid item xs={12}>
              {err && <span>{err}</span>}
            </Grid>

            <Grid item xs={12}>
              <span>
                Don't have an account? <Link to={"/register"}>Register</Link>
              </span>
            </Grid>
          </Grid>
        </FormControl>
      </Paper>
    </Container>
  );
};

export default Login;
