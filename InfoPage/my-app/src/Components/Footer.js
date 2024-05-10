import React from 'react'
import {Grid,Button} from "@mui/material";
  
const Footer = () => {
  return (
    <div>
      <Grid item xs={12}>
        <Button variant="contained" style={{ marginRight: "10px" }} disabled>
          Mark for Review & Next
        </Button>
        <Button variant="contained" style={{ marginRight: "10px" }} disabled>
          Clear Response
        </Button>
        <Button variant="contained" style={{marginLeft:'500px'}}>Save and Next</Button>
        <Button variant="contained" disabled style={{marginLeft:'70px'}}>Submit</Button>
      </Grid>
    </div>
  )
}

export default Footer
