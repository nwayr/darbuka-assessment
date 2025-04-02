import React from "react";
import { Card, CardContent, Avatar, Typography, Grid } from "@mui/material";

const About = ({ submissions }) => {
  return (
    <div
      style={{
        maxWidth: 800,
        margin: "auto",
        marginTop: 20,
        textAlign: "center",
      }}
    >
      <Typography variant="h4" gutterBottom>
        People
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {submissions.map((submission, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card style={{ boxShadow: "0px 4px 10px rgba(0,0,0,0.1)" }}>
              <CardContent style={{ textAlign: "center" }}>
                <Avatar
                  sx={{
                    width: { xs: 80, sm: 100, md: 120 },
                    height: { xs: 80, sm: 100, md: 120 },
                    margin: "auto",
                  }}
                  src={
                    submission.image
                      ? URL.createObjectURL(submission.image)
                      : `${process.env.PUBLIC_URL}/default-avatar.jpg`
                  }
                />

                <Typography variant="h6" sx={{ mt: 1 }}>
                  {submission.name}
                </Typography>
                <Typography color="text.secondary">
                  {submission.email}
                </Typography>
                <Typography color="text.secondary">
                  <span style={{ color: "green" }}>Country:</span>{" "}
                  {submission.country}
                </Typography>
                <Typography color="text.secondary">
                  <span style={{ color: "blue" }}>Gender:</span>{" "}
                  {submission.gender}
                </Typography>
                <Typography color="text.secondary">
                  {submission.date?.toLocaleDateString()}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default About;
