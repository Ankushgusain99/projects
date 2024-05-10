import React from "react";
import {
  Grid,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  Paper
} from "@mui/material";

const ExamPage = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} height={'320px'}>
        <Paper sx={{height:'280px'}}>
        <Typography variant="body1" marginLeft={"10px"}>
          <strong>Question No.1</strong>
        </Typography>
        <Typography variant="body1" marginLeft={"10px"}>
          Mr. Donald Rumsfeld was the :-
        </Typography>
        <RadioGroup style={{ marginLeft: "10px" }}>
          <FormControlLabel
            value="option1"
            control={<Radio />}
            label="Foreign Minister of Britain"
          />
          <FormControlLabel
            value="option2"
            control={<Radio />}
            label="Foreign Minister of USA"
          />
          <FormControlLabel
            value="option3"
            control={<Radio />}
            label="Foreign Minister of France"
          />
          <FormControlLabel
            value="option4"
            control={<Radio />}
            label="Deputy Prime Minister of France"
          />
          <FormControlLabel
            value="option5"
            control={<Radio />}
            label="None of these"
          />
        </RadioGroup>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ExamPage;
