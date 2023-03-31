import React from "react";
import { Grid, Paper, Box } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <Paper id="maincontent" variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={8}>
          <img
            src="https://www.freecodecamp.org/news/content/images/size/w2000/2022/11/what-is-programming.png"
            alt="new"
            className="post-img"
          />
          <Grid item xs={6} md={6}>
            <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", ml: 3 }}>
              <img
                src="https://www.freecodecamp.org/news/content/images/size/w2000/2022/11/what-is-programming.png"
                alt="new"
                className="user-img "
              />
              <span>Umar</span>
              <p>Posted 5 days ago</p>
              <Link to={`/write`}>
                <EditIcon />
              </Link>
              {/* fix this latter */}
              <DeleteForeverIcon />
            </Box>
          </Grid>

          <h1>New blogging post</h1>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
            type specimen book.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
            type specimen book.
          </p>
        </Grid>

        <Grid item xs={6} md={4}>
          {/* call the manu componenet here */}
          <Menu />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Single;
