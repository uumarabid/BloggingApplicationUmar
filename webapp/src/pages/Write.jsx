import React, { useState } from "react";
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

const Write = () => {
  const [value, setValue] = useState("");
  const [tilte, setTilte] = useState("");
  const [file, setFile] = useState("");
  const [cat, setCat] = useState("");

  const upload = async () => {
    try {
      // to upload a file create form data
      const formData = new FormData();
      // inside this data padss the file
      formData.append("file", file);
      const res = await axios.post("http://localhost:3001/upload/", formData);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    upload();
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
                onChange={(e) => setTilte(e.target.value)}
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
                label="Programmer"
                id="programmer"
                onChange={(e) => setCat(e.target.value)}
              />
              <FormControlLabel value="AWS" control={<Radio />} label="AWS" id="AWS" onChange={(e) => setCat(e.target.value)} />
              <FormControlLabel value="GCP" control={<Radio />} label="GCP" id="GCP" onChange={(e) => setCat(e.target.value)} />
              <FormControlLabel
                value="AZUR"
                control={<Radio />}
                label="AZUR"
                id="AZUR"
                onChange={(e) => setCat(e.target.value)}
              />
              <FormControlLabel
                value="opersys"
                control={<Radio />}
                label="Operating system"
                id="opersys"
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
