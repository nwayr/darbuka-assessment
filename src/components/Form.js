import React, { useState } from "react";
import {
  TextField,
  Button,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
  Snackbar,
  Alert,
  Avatar,
  IconButton,
  Typography,
} from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { LocalizationProvider, DatePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

const FormSection = ({ onSubmit }) => {
  const [date, setDate] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [gender, setGender] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [errorSnackbar, setErrorSnackbar] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !country || !gender || !image) {
      setErrorSnackbar(true);
      return;
    }

    onSubmit({ name, email, country, gender, image });

    setOpenSnackbar(true);

    setName("");
    setEmail("");
    setCountry("");
    setGender("");
    setDate(null);
    setImage(null);
    setPreview(null);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        alert("Please upload a valid image file.");
        return;
      }
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ maxWidth: 400, margin: "auto", marginTop: "20px" }}
    >
      <TextField
        fullWidth
        label="Name"
        margin="normal"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        fullWidth
        label="Email"
        margin="normal"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        select
        fullWidth
        label="Country"
        margin="normal"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      >
        <MenuItem value="USA">USA</MenuItem>
        <MenuItem value="UK">UK</MenuItem>
        <MenuItem value="Lebanon">Lebanon</MenuItem>
        <MenuItem value="Cairo">Cairo</MenuItem>
        <MenuItem value="Canada">Canada</MenuItem>
        <MenuItem value="Paris">Paris</MenuItem>
      </TextField>
      <RadioGroup
        row
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      >
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="female" control={<Radio />} label="Female" />
      </RadioGroup>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Date of Birth"
          value={date}
          onChange={setDate}
          renderInput={(params) => (
            <TextField {...params} fullWidth margin="normal" />
          )}
        />
      </LocalizationProvider>

      {/* Image Upload Section */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <input
          type="file"
          accept="image/*"
          id="image-upload"
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
        <label htmlFor="image-upload">
          <IconButton
            component="span"
            color="primary"
            sx={{
              background: "#f5f5f5",
              borderRadius: "10px",
              padding: "10px",
              "&:hover": { background: "#e0e0e0" },
            }}
          >
            <PhotoCamera fontSize="large" />
          </IconButton>
        </label>

        {preview && (
          <div style={{ marginTop: "10px" }}>
            <Avatar
              src={preview}
              alt="Preview"
              sx={{
                width: 100,
                height: 100,
                margin: "auto",
                border: "2px solid #3f51b5",
              }}
            />
          </div>
        )}

        <Typography
          variant="body2"
          color="textSecondary"
          sx={{ marginTop: "5px" }}
        >
          Upload an image
        </Typography>
      </div>
      <br />
      <Button variant="contained" color="primary" fullWidth type="submit">
        Submit
      </Button>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity="info"
          sx={{ backgroundColor: "blue", color: "white" }}
        >
          User added successfully!
          <br /> Go to People page to view
        </Alert>
      </Snackbar>

      <Snackbar
        open={errorSnackbar}
        autoHideDuration={6000}
        onClose={() => setErrorSnackbar(false)}
      >
        <Alert
          onClose={() => setErrorSnackbar(false)}
          severity="error"
          sx={{ backgroundColor: "red", color: "white" }}
        >
          Please fill in all fields and upload an image before submitting.
        </Alert>
      </Snackbar>
    </form>
  );
};

export default FormSection;
