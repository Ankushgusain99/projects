import React from 'react';
import { Grid, Typography,MenuItem,Select,Button} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
function Navbar() {
  return (
    <>
        <Grid container spacing={0} >
            <Grid items xs={12} sx={{background:'lightgrey'}}>
                <Grid items xs={4} style={{color:'white',marginLeft:'20px'}}>
                <Button variant="contained" sx={{height:'28px', fontSize:'10px',width:'170px',backgroundColor:'#00bfff'}}>
                    <span>General Awarness</span><InfoIcon style={{height:'20px'}} /></Button>
                </Grid>
            </Grid>
            <Grid item xs={6}>
                <Typography variant='body2'>Sections</Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography variant='body2' textAlign={'right'}>Time Left: 29:58</Typography>
            </Grid>
            <Grid items xs={12} sx={{background:'lightgrey'}}>
                <Grid items xs={4} style={{color:'white',marginLeft:'20px'}}>
                <Button variant="contained" sx={{height:'30px', fontSize:'10px',backgroundColor:'#1e90ff',width:'170px'}}>General Awarness<InfoIcon style={{height:'20px'}} /></Button>

                </Grid>
            </Grid>
            <Grid item xs={5}>
                <Typography variant='body1'><strong>Question Type: Multiple Choice Questions</strong></Typography>
            </Grid>

            <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', backgroundColor:'#1e90ff'}}>
                <Typography fontSize={'11px'} marginLeft={'870px'} color={'white'}>View in:</Typography>
                <Select variant="outlined" defaultValue="en" style={{ height: '23px', marginRight: '20px',color:'black',backgroundColor:'white',marginLeft:'10px',marginTop:'5px',marginBottom:'3px',fontSize:'12px' }}>
                    <MenuItem value="en">English</MenuItem>
                    <MenuItem value="fr">French</MenuItem>
                    <MenuItem value="es">Spanish</MenuItem>
                    <MenuItem value="de">German</MenuItem>
                </Select>
        </Grid>
        </Grid>
    </>
  )
}

export default Navbar
