import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Customer from "./Customer";
import Device from "./Device";
import Product from "./Product";

import { TextField } from "@material-ui/core";

// components
import PageTitle from "../../components/PageTitle/PageTitle";
import Widget from "../../components/Widget/Widget";
import { Typography } from "../../components/Wrappers/Wrappers";

// Stepper

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  textBox: {
    margin: "14px",
    marginTop: theme.spacing(2),
  },
  stepperWidth: {
    maxWidth: "85%",
    margin: "auto",
  },
}));

function getSteps() {
  return ["Customer Information", "Device Information", "Product Information"];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return (
        <>
          <Grid container justify="center">
            {/* <TextField
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              style={{ margin: "16px" }}
            />
            <TextField
              id="outlined-basic"
              label="Middel Name"
              variant="outlined"
              style={{ margin: "16px" }}
            />
            <TextField
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              style={{ margin: "16px" }}
            /> */}
            <Customer />
          </Grid>
        </>
      );
    case 1:
      return (
        <>
          <Grid container justify="center">
            <Device />
          </Grid>
        </>
      );
    case 2:
      return (
        <>
          <Grid container justify="center">
            <Product />
          </Grid>
        </>
      );
    default:
      return "Unknown stepIndex";
  }
}

// Stepper End

export default function CCF() {
  var classes = useStyles();

  // Stepper Start

  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  // Stepper End

  return (
    <>
      <PageTitle title="C C F" />
      <Grid container spacing={4}>
        <Grid item xs={12} className={classes.stepperWidth}>
          <Widget title="CCF Registration" disableWidgetMenu>
            <div className={classes.root}>
              <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
              <div>
                {activeStep === steps.length ? (
                  <div>
                    <Typography className={classes.instructions}>
                      All steps completed
                    </Typography>
                    <Button onClick={handleReset}>Reset</Button>
                  </div>
                ) : (
                  <div>
                    <Typography className={classes.instructions}>
                      {getStepContent(activeStep)}
                    </Typography>
                    <div>
                      <Button
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        className={classes.backButton}
                      >
                        Back
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                      >
                        {activeStep === steps.length - 1 ? "Finish" : "Next"}
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Widget>
        </Grid>
      </Grid>
    </>
  );
}
