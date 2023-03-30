import { Button, FormControl, Grid, Paper, TextField } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
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
              />
            </Grid>

            <Grid item xs={12}>
              <Button type="submit" variant="contained">
                Login
              </Button>
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
