import React from "react";
import { Card, CardContent, Avatar, Typography } from "@mui/material";

const Profile = () => {
  return (
    <Card sx={{ maxWidth: 400, margin: "auto", textAlign: "center", mt: 3 }}>
      <Avatar
        sx={{
          width: { xs: 80, sm: 100, md: 120 }, // Responsive sizes
          height: { xs: 80, sm: 100, md: 120 },
          margin: "auto",
        }}
        src={`${process.env.PUBLIC_URL}/avt.jpg`}
      />
      <CardContent>
        <Typography variant="h5">Elena N</Typography>
        <Typography variant="body2" color="text.secondary">
          Web Developer & UI Designer
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Profile;
