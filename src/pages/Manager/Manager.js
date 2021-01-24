import React from "react";
import {
  Grid,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

// styles
import useStyles from "./styles";

// components
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";

export default function Manager() {
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  var classes = useStyles();

  return (
    <>
      <PageTitle title="M A N A G E R" />
      <Grid container spacing={4}>
        <Grid item xs={12} className={classes.stepperWidth}>
          <Widget title="Manager Assigned" disableWidgetMenu>
            <div className={classes.root}>
              <Grid container justify="space-evenly" spacing={4}>
                <Grid item xs={12} sm={4}>
                  <FormControl variant="outlined" fullWidth margin="normal">
                    <InputLabel id="demo-simple-select-outlined-label">
                      Remaing Work
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={age}
                      onChange={handleChange}
                      label="Remaing Work"
                      required
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem>Mobile</MenuItem>
                      <MenuItem>Laptop</MenuItem>
                      <MenuItem>PC</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <FormControl variant="outlined" fullWidth margin="normal">
                    <InputLabel id="demo-simple-select-outlined-label">
                      Assigne to Engineer
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={age}
                      onChange={handleChange}
                      label="Remaing Work"
                      required
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem>Rushi</MenuItem>
                      <MenuItem>Rakesh</MenuItem>
                      <MenuItem>Rohan</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <FormControl variant="outlined" fullWidth margin="normal">
                    <InputLabel id="demo-simple-select-outlined-label">
                      Assigne Product
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={age}
                      onChange={handleChange}
                      label="Remaing Work"
                      required
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem>BrandName</MenuItem>
                      <MenuItem>ModelNumber</MenuItem>
                      <MenuItem>ModelIssue</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={8}>
                  <TextField
                    id="outlined-basic"
                    label="Instrctions"
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    id="outlined-basic"
                    label="Given Time"
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                  />
                </Grid>
              </Grid>
              <Grid container spacing={4}>
                <Button
                  className={classes.styleBtn}
                  variant="contained"
                  margin="normal"
                  color="primary"
                >
                  Assigned
                </Button>
                <Button className={classes.styleBtn}>Cancel</Button>
              </Grid>
            </div>
          </Widget>
        </Grid>
      </Grid>
    </>
  );
}
