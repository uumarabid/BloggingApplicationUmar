import React, { useContext, useEffect, useState } from "react";
import { Grid, Paper, Box } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
import axios from "axios";
import moment from "moment";
import { AuthContext } from "../context/authContext";

const Single = () => {
  const [post, setPost] = useState({});

  // use location to get to cat string
  const location = useLocation();

  const navigate = useNavigate();

  // use split method to get to the post id index 2 in url
  const postId = location.pathname.split("/")[2];

  // dissplay edit and delete button only to the owner of the post
  const { currentUser } = useContext(AuthContext);
  axios.defaults.headers.common["Authorization"] = `Bearer ${currentUser.token}`;

  // create a async function inside use efffect
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/posts/${postId}`);
        // debugger;
        // console.log(res.data);
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3001/posts/${postId}`);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  return (
    <Paper id="maincontent" variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={8}>
          <img
            // ? will not give any error while loading
            src={`http://localhost:3000/upload/${post.img}`}
            alt="new"
            className="post-img"
          />
          <Grid item xs={6} md={6}>
            <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", ml: 3 }}>
              {post.userImg && <img src={post.userImg} alt="new" className="user-img " />}

              <span>{post.username}</span>

              {/* moment library */}
              <p>Posted {moment(post.date).fromNow()}</p>

              {currentUser.username === post.username && (
                <>
                  <Link to={"/write?edit=2"} state={post}>
                    <EditIcon />
                  </Link>
                  <Link>
                    <DeleteForeverIcon onClick={handleDelete} />
                  </Link>
                </>
              )}
            </Box>
          </Grid>

          <h1>{post.title}</h1>

          <p>{getText(post.description)}</p>
        </Grid>

        <Grid item xs={6} md={4}>
          {/* call the manu componenet here */}
          <Menu cat={post.cat} />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Single;
