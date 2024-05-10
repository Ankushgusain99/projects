import React from 'react'
import { Grid,Typography } from '@mui/material'
const Page2 = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid items xs={12}>
            <Typography variant='h5' marginLeft={'20px'}>Time limit : 00:09:53</Typography>
        </Grid>
        <br></br>
        <Grid items xs={11}>
            <div style={{backgroundColor:'darkblue',marginLeft:'20px',height:'20px'}}></div>
        </Grid>
        <Grid items xs={11}>
            <div style={{height:'150px',marginLeft:'20px',overflow:'auto'}}>
                <div style={{display:'flex',marginTop:'30px',overflow:'auto',height:'80px',backgroundColor:'grey'}}>
                    <button style={{height:'35px',marginTop:'20px',marginLeft:'10px'}}>1</button>
                    <button style={{height:'35px',marginTop:'20px',marginLeft:'10px'}}>2</button>
                    <button style={{height:'35px',marginTop:'20px',marginLeft:'10px'}}>3</button>
                    <button style={{height:'35px',marginTop:'20px',marginLeft:'10px'}}>4</button>
                    <button style={{height:'35px',marginTop:'20px',marginLeft:'10px'}}>5</button>
                    <button style={{height:'35px',marginTop:'20px',marginLeft:'10px'}}>6</button>
                    <button style={{height:'35px',marginTop:'20px',marginLeft:'10px'}}>7</button>
                    <button style={{height:'35px',marginTop:'20px',marginLeft:'10px'}}>8</button>
                    <button style={{height:'35px',marginTop:'20px',marginLeft:'10px'}}>9</button>
                    <button style={{height:'35px',marginTop:'20px',marginLeft:'10px'}}>10</button>
                </div>
                <div style={{display:'flex'}}>
                    <div style={{backgroundColor:'green',height:'10px',width:'10px',marginTop:'5px'}}></div>
                    <div style={{marginLeft:'3px'}}>Answered</div>
                    <div style={{backgroundColor:'orange',height:'10px',width:'10px',marginTop:'5px',marginLeft:'5px'}}></div>
                    <div style={{marginLeft:'3px'}}>Review</div>
                    <br></br>
                    <br></br>

                </div>
                <div style={{display:'flex'}}>
                    <button style={{backgroundColor:'#003C43',borderRadius:'5px',color:'white'}}>Review Question</button>
                    <button style={{marginLeft:'900px',backgroundColor:'#003C43',borderRadius:'5px',height:'40px',color:'white'}}> Quiz-Summary</button>
                </div>
            </div>
        </Grid>
      </Grid>
      <br></br>
    </div>
  )
}

export default Page2
