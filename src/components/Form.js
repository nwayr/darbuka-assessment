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
} from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

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
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();


    if (!name || !email || !country || !gender || !image || !date) {
      setErrorSnackbar(true);
      setErrorMessage(
        "Please fill in all fields, including date and personal image."
      );
      return;
    }

    onSubmit({ name, email, country, gender, image, date });

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

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <input
          type="file"
          accept="image/*"
          id="image-upload"
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
        <label htmlFor="image-upload">
          <IconButton component="span" color="primary">
            <PhotoCamera fontSize="large" />
          </IconButton>
        </label>
        {preview && (
          <Avatar
            src={preview}
            alt="Preview"
            sx={{ width: 100, height: 100, margin: "auto" }}
          />
        )}
      </div>

      <Button variant="contained" color="primary" fullWidth type="submit">
        Submit
      </Button>

      {/* Success Snackbar */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
      >
        <Alert onClose={() => setOpenSnackbar(false)} severity="info">
          User added successfully!
          <br />
          Go to People page to view!
        </Alert>
      </Snackbar>

      {/* Error Snackbar */}
      <Snackbar
        open={errorSnackbar}
        autoHideDuration={6000}
        onClose={() => setErrorSnackbar(false)}
      >
        <Alert onClose={() => setErrorSnackbar(false)} severity="error">
          {errorMessage}
        </Alert>
      </Snackbar>
    </form>
  );
};

export default FormSection;
