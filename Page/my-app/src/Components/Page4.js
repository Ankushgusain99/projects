import React from 'react'
import { Grid,Typography } from '@mui/material'
import clock from './clock-svgrepo-com.png'
import metre from './percentage-discount-svgrepo-com.svg'
import tick from './icons8-correct-96.png'
import BarGraph from './BarGraph'
import PieChart from './PieChart'
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
const Page4 = () => {

  
  return (
    <>
        <Grid container spacing={2}>
            <Grid items xs={12} display={'flex'} sx={{margin:'50px',height:'20px'}}>
                <Typography variant='h4' sx={{marginLeft:'100px'}}>You have completed</Typography>
                <Typography variant='h3' sx={{marginLeft:'100px'}}>Quiz Title</Typography>
            </Grid>
            <Grid items xs={12} display={'flex'} marginLeft={'30px'}>

            <Grid items xs={4}>
                <img src={tick} alt='tick' style={{height:'50px',width:'50px',marginLeft:'150px'}}/>
                <Typography variant='h6'sx={{marginLeft:'150px'}} >50/100</Typography>
                <Typography variant='h6' sx={{marginLeft:'100px'}} ><span style={{color:"grey"}}>Marks Obtained</span></Typography>
            </Grid>
            <Grid items xs={4} sx={{marginLeft:'100px'}}>
              <img src={metre} alt='metre' style={{height:'50px',width:'50px',marginLeft:'150px'}}/>
              <Typography variant='h6'sx={{marginLeft:'160px'}} >71%</Typography>
                <Typography variant='h6' sx={{marginLeft:'130px'}} ><span style={{color:"grey"}}>Accuracy</span></Typography>
            </Grid>
            <Grid items xs={4} sx={{marginLeft:'100px'}}>
              <img src={clock} alt='clock' style={{height:'50px',width:'50px',marginLeft:'150px'}}/>
                <Typography variant='h6'sx={{marginLeft:'130px'}} >00:30:45</Typography>
                <Typography variant='h6' sx={{marginLeft:'120px'}} ><span style={{color:"grey"}}>Time Taken</span></Typography>
            </Grid>
            
        </Grid>
        
          <Grid items xs={6}>
            <PieChart />
          </Grid>
          <Grid items xs={6}>
            <BarGraph />
          </Grid>
          </Grid>
          <div style={{marginLeft:'5px',marginTop:'50px',display:'flex',justifyContent:'center'}}>
            <button style={{backgroundColor:'rgba(255, 206, 86, 1)',borderRadius:'25px',width:'180px',border:'none',height:'50px'}}><div style={{display:'flex',justifyContent:'center',fontSize:'18px',fontWeight:'bold'}}><ShareOutlinedIcon />Share Result</div></button>
          </div>
          <Grid item xs={12} sx={{ marginTop: '20px' }}>
      <table style={{ border: '1px solid black', height: '300px', width: '1000px', marginLeft: '100px', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{height:'50px',backgroundColor:'rgba(255, 206, 86, 1)'}}>
            <th style={{ border: '1px solid black',}}>Subject</th>
            <th style={{ border: '1px solid black'}}>Correct</th>
            <th style={{ border: '1px solid black'}}>Incorrect</th>
            <th style={{ border: '1px solid black' }}>Skipped</th>
            <th style={{ border: '1px solid black'}}>Time</th>
            <th style={{ border: '1px solid black'}}>Score</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid black', textAlign: 'center' ,backgroundColor:'rgba(255, 206, 86, 0.2'}}>Maths</td>
            <td style={{ border: '1px solid black', textAlign: 'center' }}>10/20</td>
            <td style={{ border: '1px solid black', textAlign: 'center' }}>8</td>
            <td style={{ border: '1px solid black', textAlign: 'center' }}>2</td>
            <td style={{ border: '1px solid black', textAlign: 'center' }}>00:15:45</td>
            <td style={{ border: '1px solid black', textAlign: 'center' }}>10</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', textAlign: 'center',backgroundColor:'rgba(255, 206, 86, 0.2' }}>English</td>
            <td style={{ border: '1px solid black', textAlign: 'center' }}>11/20</td>
            <td style={{ border: '1px solid black', textAlign: 'center' }}>2</td>
            <td style={{ border: '1px solid black', textAlign: 'center' }}>7</td>
            <td style={{ border: '1px solid black', textAlign: 'center' }}>00:15:45</td>
            <td style={{ border: '1px solid black', textAlign: 'center' }}>11</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', textAlign: 'center' ,backgroundColor:'rgba(255, 206, 86, 0.2'}}>Science</td>
            <td style={{ border: '1px solid black', textAlign: 'center' }}>7/20</td>
            <td style={{ border: '1px solid black', textAlign: 'center' }}>3</td>
            <td style={{ border: '1px solid black', textAlign: 'center' }}>10</td>
            <td style={{ border: '1px solid black', textAlign: 'center' }}>00:15:45</td>
            <td style={{ border: '1px solid black', textAlign: 'center' }}>7</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', textAlign: 'center',backgroundColor:'rgba(255, 206, 86, 0.2' }}>History</td>
            <td style={{ border: '1px solid black', textAlign: 'center' }}>9/20</td>
            <td style={{ border: '1px solid black', textAlign: 'center' }}>4</td>
            <td style={{ border: '1px solid black', textAlign: 'center' }}>7</td>
            <td style={{ border: '1px solid black', textAlign: 'center' }}>00:15:45</td>
            <td style={{ border: '1px solid black', textAlign: 'center' }}>9</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', textAlign: 'center',backgroundColor:'rgba(255, 206, 86, 0.2' }}>Geography</td>
            <td style={{ border: '1px solid black', textAlign: 'center' }}>13/20</td>
            <td style={{ border: '1px solid black', textAlign: 'center' }}>3</td>
            <td style={{ border: '1px solid black', textAlign: 'center' }}>4</td>
            <td style={{ border: '1px solid black', textAlign: 'center' }}>00:15:45</td>
            <td style={{ border: '1px solid black', textAlign: 'center' }}>13</td>
          </tr>
        </tbody>
      </table>
    </Grid>
        <div style={{marginLeft:'5px',marginTop:'50px',display:'flex'}}>
            <button style={{backgroundColor:'rgba(255, 206, 86, 1)',borderRadius:'25px',width:'180px',border:'none',height:'50px',marginLeft:'150px',fontWeight:'bold',fontSize:'18px'}}>Restart</button>
            <button style={{backgroundColor:'rgba(255, 206, 86, 1)',borderRadius:'25px',width:'180px',border:'none',height:'50px',marginLeft:'150px',fontWeight:'bold',fontSize:'18px'}}>Top List</button>
            <button style={{backgroundColor:'rgba(255, 206, 86, 1)',borderRadius:'25px',width:'180px',border:'none',height:'50px',marginLeft:'150px',fontWeight:'bold',fontSize:'18px'}}>Answer Sheet</button>
          </div>
    </>
  )
}

export default Page4
