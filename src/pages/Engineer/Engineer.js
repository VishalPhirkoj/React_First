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

export default function Engineer() {
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  var classes = useStyles();

  return (
    <>
      <PageTitle title="E N G I N E E R" />
      <Grid container spacing={4}>
        <Grid item xs={12} className={classes.stepperWidth}>
          <Widget title="Engineer Dept" disableWidgetMenu>
            <div className={classes.root}>
              <Grid container justify="space-evenly" spacing={4}>
                <Grid item xs={12} sm={4}>
                  <TextField
                    id="outlined-basic"
                    label="Assigned Work"
                    variant="outlined"
                    margin="normal"
                    defaultValue="Mobile Display Change"
                    required
                    fullWidth
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={8}>
                  <TextField
                    id="outlined-basic"
                    label="Given Instruction"
                    variant="outlined"
                    margin="normal"
                    defaultValue="Mobile Display Change please mind with internal battery. Battery is expensive"
                    required
                    fullWidth
                    multiline
                    rows={4}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    id="outlined-basic"
                    label="Given Time"
                    variant="outlined"
                    margin="normal"
                    defaultValue="3 Hrs"
                    required
                    fullWidth
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={8}>
                  <TextField
                    id="outlined-basic"
                    label="Engineer Instrctions / Feedback"
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
                  Submit Work
                </Button>
                <Button
                  className={classes.styleBtn}
                  variant="contained"
                  margin="normal"
                  color="primary"
                >
                  Skip Work
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
