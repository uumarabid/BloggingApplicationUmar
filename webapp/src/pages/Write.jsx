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

const Write = () => {
  const [value, setValue] = useState("");

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
              <Input type="file" id="file" name="" />
              <InputLabel htmlFor="file">Upload image</InputLabel>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <Button type="submit" variant="contained" sx={{ m: 3 }}>
              Save as a draft
            </Button>
            <Button type="submit" variant="contained">
              Update
            </Button>
          </Grid>

          {/* <h1>Category</h1> */}

          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Category</FormLabel>
            <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="programmer" name="cat">
              <FormControlLabel value="programmer" control={<Radio />} label="Programmer" id="programmer" />
              <FormControlLabel value="AWS" control={<Radio />} label="AWS" id="AWS" />
              <FormControlLabel value="GCP" control={<Radio />} label="GCP" id="GCP" />
              <FormControlLabel value="AZUR" control={<Radio />} label="AZUR" id="AZUR" />
              <FormControlLabel value="opersys" control={<Radio />} label="Operating system" id="opersys" />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Write;
