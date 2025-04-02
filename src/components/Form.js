import React, { useState } from "react";
import {
  TextField,
  Button,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

const FormSection = () => {
  const [date, setDate] = useState(null);

  return (
    <form style={{ maxWidth: 400, margin: "auto", marginTop: "20px" }}>
      <TextField fullWidth label="Name" margin="normal" />
      <TextField fullWidth label="Email" margin="normal" type="email" />
      <TextField select fullWidth label="Country" margin="normal">
        <MenuItem value="USA">USA</MenuItem>
        <MenuItem value="UK">UK</MenuItem>
        <MenuItem value="Lebanon">Lebanon</MenuItem>
        <MenuItem value="Cairo">Cairo</MenuItem>
        <MenuItem value="India">Canada</MenuItem>
      </TextField>
      <RadioGroup row>
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
    </form>
  );
};

export default FormSection;
