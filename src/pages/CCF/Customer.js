import React from "react";
import { Grid, TextField } from "@material-ui/core";

const Customer = () => {
  return (
    <>
      <Grid container justify="space-evenly" spacing={4}>
        <Grid item xs={12} sm={4}>
          <TextField
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            margin="normal"
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            id="outlined-basic"
            label="Middle Name"
            variant="outlined"
            margin="normal"
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            margin="normal"
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            margin="normal"
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            id="outlined-basic"
            label="Phone"
            variant="outlined"
            margin="normal"
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            id="outlined-basic"
            label="Address"
            variant="outlined"
            margin="normal"
            required
            fullWidth
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Customer;
