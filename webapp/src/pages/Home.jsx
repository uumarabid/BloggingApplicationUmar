import { Button, Paper } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const posts = [
    {
      id: 1,
      title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      img: "https://www.freecodecamp.org/news/content/images/size/w2000/2022/11/what-is-programming.png",
    },
    {
      id: 2,
      title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      img: "https://www.freecodecamp.org/news/content/images/size/w1000/2022/12/main-image.png",
    },
    {
      id: 3,
      title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      img: "https://www.freecodecamp.org/news/content/images/size/w1000/2022/12/what-is-a-programming-language.png",
    },
    {
      id: 4,
      title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      img: "https://www.freecodecamp.org/news/content/images/size/w1600/2022/12/Screen-Shot-2022-12-02-at-9.06.50-PM.png",
    },
    {
      id: 5,
      title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      img: "https://www.freecodecamp.org/news/content/images/size/w1000/2022/12/binary.png",
    },
  ];
  return (
    <div>
      {/* <Paper id="maincontent" variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}> */}
      <h1>Welcome programmers</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <img src={post.img} alt="ipsum img" />

          <Link to={`/post/${post.id}`}>
            <h2>{post.title}</h2>
          </Link>
          <p>{post.desc}</p>
          <Button variant="contained" sx={{ mb: 2 }}>
            Read more
          </Button>
        </div>
      ))}
      {/* </Paper> */}
    </div>
  );
};

export default Home;
