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
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

const FormSection = ({ onSubmit }) => {
  const [date, setDate] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [gender, setGender] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [errorSnackbar, setErrorSnackbar] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any required field is empty
    if (!name || !email || !country || !gender) {
      setErrorSnackbar(true);
      return;
    }

    onSubmit({ name, email, country, gender });

    // Show success message
    setOpenSnackbar(true);

    // Reset form fields
    setName("");
    setEmail("");
    setCountry("");
    setGender("");
    setDate(null);
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
      <Button variant="contained" color="primary" fullWidth type="submit">
        Submit
      </Button>

      {/* Success Snackbar */}
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

      {/* Error Snackbar */}
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
          Please fill in all fields before submitting.
        </Alert>
      </Snackbar>
    </form>
  );
};

export default FormSection;
