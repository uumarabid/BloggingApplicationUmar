import { Button, FormControl, Grid, Paper, TextField } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    //prevent from refreshing on click
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3001/auth/register", inputs);
      console.log(res);
    } catch (err) {
      console.log(err);
    }

    // console.log(res);
  };
  return (
    <Container component="main" maxWidth="xs">
      <Paper variant="outlined" backgound="dark" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
        <FormControl>
          <legend>
            <h1>Welcome to Register page</h1>
          </legend>
          <Grid container rowSpacing={2}>
            <Grid item xs={12}>
              <TextField
                type="text"
                id="username"
                name="username"
                placeholder="Enter username"
                label="Username"
                variant="outlined"
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                label="Email"
                variant="outlined"
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                type="password"
                id="password"
                name="password"
                placeholder="Enter password"
                label="Password"
                variant="outlined"
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <Button type="submit" variant="contained" onClick={handleSubmit}>
                Register
              </Button>
            </Grid>
            <Grid item xs={12}>
              <span>
                Already have an account? <Link to={"/login"}>Login</Link>
              </span>
            </Grid>
          </Grid>
        </FormControl>
      </Paper>
    </Container>
  );
};

export default Register;
