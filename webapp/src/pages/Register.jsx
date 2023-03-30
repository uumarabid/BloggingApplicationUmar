import { Button, FormControl, Grid, Paper, TextField } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
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
              />
            </Grid>

            <Grid item xs={12}>
              <TextField type="email" id="email" name="email" placeholder="Enter your email" label="Email" variant="outlined" />
            </Grid>

            <Grid item xs={12}>
              <TextField
                type="password"
                id="password"
                name="password"
                placeholder="Enter password"
                label="Password"
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12}>
              <Button type="submit" variant="contained">
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
