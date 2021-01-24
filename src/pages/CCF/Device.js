import React from "react";
import {
  Grid,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import "date-fns";

const Device = () => {
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2020-01-24"),
  );
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <>
      <Grid container justify="space-evenly" spacing={4}>
        <Grid item xs={12} sm={4}>
          <FormControl variant="outlined" fullWidth margin="normal">
            <InputLabel id="demo-simple-select-outlined-label">
              Device Type
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={age}
              onChange={handleChange}
              label="Device Type"
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
          <TextField
            id="outlined-basic"
            label="Brand Name"
            variant="outlined"
            margin="normal"
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            id="outlined-basic"
            label="Model Number"
            variant="outlined"
            margin="normal"
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            id="outlined-basic"
            label="IMEI"
            variant="outlined"
            margin="normal"
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormControl variant="outlined" fullWidth margin="normal">
            <InputLabel id="demo-simple-select-outlined-label">
              Warranty
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={age}
              onChange={handleChange}
              label="Device Type"
              required
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem>Yes</MenuItem>
              <MenuItem>No</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <MuiPickersUtilsProvider variant="outlined" utils={DateFnsUtils}>
          <Grid item xs={12} sm={4}>
            <KeyboardDatePicker
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="date-picker-dialog"
              label="Purchased Date"
              format="dd/MM/yyyy"
              value={selectedDate}
              onChange={handleDateChange}
            />
          </Grid>
        </MuiPickersUtilsProvider>
      </Grid>
    </>
  );
};

export default Device;
