import React from 'react';
import { Grid, Typography} from '@mui/material';
import IBPS from './IBPS.png'
import { blueGrey } from '@mui/material/colors';
import InfoIcon from '@mui/icons-material/Info';
function Navbar() {
  return (
    <>
    <Grid container spacing={0} >
        <Grid items xs={4}>
            <img src={IBPS} alt='IBPS' style={{marginLeft:'60px', height:'40px'}} ></img>
        </Grid>
        <Grid items xs={4} sx={{marginLeft:'120px',paddingTop:'10px'}}>
            <Typography variant='body1' color={blueGrey}><strong>New IBPS Test</strong></Typography> 
        </Grid>
        <Grid container>
            <Grid item xs={6}>
                <Typography variant='body1' sx={{ backgroundColor: 'black', color: 'yellow' }}>New IBPS Test</Typography>
            </Grid>
            <Grid item xs={6} display={"flex"} backgroundColor={'black'} color={'white'}>
                <InfoIcon style={{height:'17.5px',marginTop:'3px',marginLeft:'500px', }}/>
                <Typography variant='body2' marginTop={'1px'}>View Instructions</Typography>
            </Grid>
        </Grid>
    </Grid>

    </>
  )
}

export default Navbar
