import { Button, FormControl, Grid, Paper, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  // use location to get to cat string
  const cat = useLocation().search;
  // console.log(location);

  // create a async function inside use efffect
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/posts${cat}`);
        // debugger;
        console.log(res.data);
        setPosts(res.data);
        setFilteredPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);

  // https://dev.to/mar1anna/create-a-search-bar-with-react-and-material-ui-4he
  const handleSearchChange = (e) => {
    const searchItem = e.target.value;
    let filteredPosts = posts;
    if (searchItem) {
      filteredPosts = posts.filter((x) => x.title.toLowerCase().includes(searchItem.toLowerCase()));
    }
    setFilteredPosts(filteredPosts);
  };

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  return (
    <div>
      {/* <Paper id="maincontent" variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}> */}
      <h1>Welcome programmers</h1>
      <Grid container rowSpacing={2}>
        <Grid item xs={8}></Grid>
        <Grid item xs={4}>
          <FormControl sx={{ m: 3 }}>
            <TextField
              type="search"
              id="search"
              name="search"
              placeholder="Search post"
              label="search"
              variant="outlined"
              onChange={handleSearchChange}
            />
          </FormControl>
        </Grid>
      </Grid>

      {filteredPosts.map((post) => (
        <div key={post.id}>
          <img src={`http://localhost:3000/upload/${post.img}`} alt={post.title} />

          {/* <Link to={`/post/${post.id}`}> */}
          <h2>{post.title}</h2>
          {/* </Link> */}
          <p>{getText(post.description)}</p>

          <Link to={`/post/${post.id}`}>
            <Button variant="contained" sx={{ mb: 2 }}>
              Read more
            </Button>
          </Link>
        </div>
      ))}
      {/* </Paper> */}
    </div>
  );
};

export default Home;
