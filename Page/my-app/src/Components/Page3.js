import React from 'react'
import { Grid,Typography ,Box,FormControlLabel,Radio,RadioGroup} from '@mui/material'
import { Link } from 'react-router-dom'

const Page3 = () => {
  return (
    <div>
      <Grid container spacing={2} margin={'15px'}>
        <Grid items xs={12}>
            <Typography fontSize={'20px'}>Question <strong>4</strong> of <strong>10</strong></Typography>
        </Grid>
        <br></br>
        <br></br>
        <Grid items xs={12}>
            <div style={{display:'flex'}}>
                <div>4.Question</div>
                <div style={{marginLeft:'1000px'}}><strong>1 Points</strong></div>
            </div>
        </Grid>
        <br></br>
        <Grid items xs={12}>
            <Typography variant='body1'><strong>Category: History</strong></Typography>
        </Grid>
        <Grid items xs={12}>
            <Typography variant='body1'>Which ruler of Rashtrakuta Dynasty is remembered for constructing the magnificent Kailashnath temple at Ellora?</Typography>
            <br></br>
            <br></br>
            <Box height={200} width={1100} sx={{border:'1px solid black'}}>
            <RadioGroup style={{ marginLeft: "10px" }}>
                <ol>
                    <li><FormControlLabel
                        value="option1"
                        control={<Radio />}
                        label="Dantidurga"/>
                    </li>
                    <li>
                        <FormControlLabel
                        value="option2"
                        control={<Radio />}
                        label="Amoghavarsha I"/>
                    </li>
                    <li>
                        <FormControlLabel
                        value="option3"
                        control={<Radio />}
                        label="Govinda III"/>
                    </li>
                    <li>
                        <FormControlLabel
                        value="option4"
                        control={<Radio />}
                        label="Krishna I"/>
                    </li>
                </ol>
            </RadioGroup>
            </Box>
        </Grid>
        <br></br>
        <br></br>

        <Grid items xs={12} marginTop={'20px'}>
        <div style={{display:'flex'}}>
                    <button style={{backgroundColor:'#003C43',borderRadius:'5px',color:'white'}}>Back</button>
                    <button style={{marginLeft:'20px',backgroundColor:'#003C43',borderRadius:'5px',height:'40px',color:'white'}}> Clear Answer</button>
                    <Link to='/page4'>
                        <button style={{marginLeft:'900px',backgroundColor:'#003C43',borderRadius:'5px',height:'40px',color:'white'}}> Next</button>
                    </Link>
                    
                </div>
        </Grid>

      </Grid>
    </div>
  )
}

export default Page3
