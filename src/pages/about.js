import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";

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
              <CardContent>
                <Typography variant="h6">{submission.name}</Typography>
                <Typography color="text.secondary">
                  {submission.email}
                </Typography>
                <Typography color="text.secondary">
                  {submission.country}
                </Typography>
                <Typography color="text.secondary">
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
