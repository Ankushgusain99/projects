import React from 'react'
import user from './user.png'
import { Grid, Typography } from '@mui/material'
const Sidebar = () => {
  return (
    <>
        <Grid container spacing={0} display={'flex'}>
            <Grid items xs={6}>
                <img src={user} alt='user' style={{paddingTop:'5px', width:'150px',height:'100px'}}></img>
            </Grid>
            <Grid items xs={6}>
                <Typography variant='body1' sx={{paddingTop:'5px'}}>John Smith</Typography>
            </Grid>
        </Grid>
    </>
  )
}

export default Sidebar
