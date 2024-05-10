import React from 'react';
import { Grid, Typography } from '@mui/material';

const Info = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant='h6'>Last updated on Apr 1, 2024</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography fontSize={'25px'} color={'orange'} display={'flex'}>
            You have completed "<Typography color='green' fontSize={'25px'}>NCERT Class 7 History Chapter 2 MCQ Quiz with answers - New Kings and Kingdoms</Typography>"
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='h6'>3 out of 10 questions answered correctly</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='h6'>Your time: 00:00:38</Typography>
        </Grid>
        <Grid item xs={12}>
          <strong>
            Your final score is: 3 <br />
            You have attempted: 8 <br />
            Number of correct questions: <span style={{ color: 'green' }}>3 </span> and scored <span style={{ color: 'green' }}>3</span> <br />
            Number of incorrect questions:<span style={{ color: 'red' }}>5 </span> and Negative marking <span style={{ color: 'red' }}>0</span><br />
          </strong>
          <br />
        </Grid>
        <Grid item xs={12}>
          <table style={{ border: '1px solid black', borderCollapse: 'collapse',marginLeft: '300px', width: '300px', height: '150px' }}>
           <tr>
            <div style={{fontSize:'17px'}}>
                <div style={{display:'flex',width:'500px'}}>
                    <div style={{marginTop:'35px',width:'50px',marginLeft:'20px'}}><strong>Average Score </strong></div>
                    <div style={{border:'1px solid black',marginLeft:'30px',marginTop:'20px',height:'70px',width:'0px'}}></div>
                    <div style={{marginTop:'35px',marginLeft:'10px'}}><strong>0%</strong></div>
                </div>
                <div style={{display:'flex',backgroundColor:'yellow',width:'80%',marginLeft:'10px',height:'30px',marginTop:'7px'}}>
                    <div><strong>Your Score </strong></div>
                    <div style={{backgroundColor:'darkgreen',height:'20px',width:'100px',marginLeft:'5px'}}>   </div>
                    <div style={{marginLeft:'5px'}}><strong>30.00%</strong></div>
                </div>
            </div>
            
           </tr>
          </table>
        </Grid>
      </Grid>
    </>
  )
}

export default Info;
