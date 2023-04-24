import React, { useContext, useState } from "react";

import {
  Grid,
  Paper,
  FormControl,
  TextField,
  InputLabel,
  Input,
  Button,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
// https://www.npmjs.com/package/react-quill
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";
import { AuthContext } from "../context/authContext";

const Write = () => {
  const state = useLocation().state;

  const [value, setValue] = useState(state?.title || "");
  const [title, setTitle] = useState(state?.description || "");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.cat || "");

  const navigate = useNavigate();

  const { currentUser } = useContext(AuthContext);
  axios.defaults.headers.common["Authorization"] = `Bearer ${currentUser.token}`;

  const upload = async () => {
    return new Promise((resolve, reject) => {
      try {
        // to upload a file create form data
        const formData = new FormData();
        // inside this data padss the file
        formData.append("file", file);
        const res = axios
          .post("http://localhost:3001/upload", formData)
          .then((res) => {
            resolve(res.data);
          })
          .catch((err) => reject(err));
      } catch (err) {
        reject(err);
      }
    });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const imgUrl = await upload();

    try {
      state
        ? await axios.put(`http://localhost:3001/posts/${state.id}`, {
            title,
            description: value,
            cat,
            img: imgUrl ?? "",
          })
        : await axios.post(`http://localhost:3001/posts/`, {
            title,
            description: value,
            cat,
            img: imgUrl ?? "",
            date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
          });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
      <Grid container rowSpacing={2}>
        <Grid item xs={6} md={8}>
          <FormControl fullWidth sx={{ mb: 1 }}>
            <Grid item xs={6} md={4}>
              <TextField
                type="text"
                id="title"
                name="title"
                placeholder="Enter tile"
                label="Title"
                variant="outlined"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                // className="quill-title"
              />
            </Grid>
          </FormControl>

          <Grid item xs={6} md={8}>
            <ReactQuill theme="snow" value={value} onChange={setValue} className={"react-quill"} />
          </Grid>
        </Grid>

        <Grid item xs={6} md={4}>
          <h1>Publish</h1>
          <Grid item xs={6} md={12}>
            <p>Status: Draft</p>
            <p>Visibility: Public</p>
          </Grid>

          <Grid item xs={6} md={12}>
            <FormControl>
              {/* fix this later */}
              <Input type="file" id="file" name="" onChange={(e) => setFile(e.target.files[0])} />
              <InputLabel htmlFor="file">Upload image</InputLabel>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <Button type="submit" variant="contained" sx={{ m: 3 }}>
              Save as a draft
            </Button>
            <Button type="submit" variant="contained" onClick={handleClick}>
              Publish
            </Button>
          </Grid>

          {/* <h1>Category</h1> */}

          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Category</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="programmer"
              name="cat"
              onChange={(e) => setCat(e.target.value)}
            >
              <FormControlLabel
                value="programmer"
                control={<Radio />}
                checked={cat === "programmer"}
                label="Programmer"
                id="programmer"
                onChange={(e) => setCat(e.target.value)}
              />
              <FormControlLabel
                value="AWS"
                control={<Radio />}
                checked={cat === "AWS"}
                label="AWS"
                id="AWS"
                onChange={(e) => setCat(e.target.value)}
              />
              <FormControlLabel
                value="GCP"
                control={<Radio />}
                checked={cat === "GCP"}
                label="GCP"
                id="GCP"
                onChange={(e) => setCat(e.target.value)}
              />
              <FormControlLabel
                value="AZUR"
                control={<Radio />}
                checked={cat === "AZUR"}
                label="AZUR"
                id="AZUR"
                onChange={(e) => setCat(e.target.value)}
              />
              <FormControlLabel
                value="OperatingSystem"
                control={<Radio />}
                checked={cat === "OperatingSystem"}
                label="Operating system"
                id="OperatingSystem"
                onChange={(e) => setCat(e.target.value)}
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Write;
