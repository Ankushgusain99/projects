import React, { useState } from 'react';
import { Drawer, IconButton} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const ScrollableDrawer = () => {
  const [open, setOpen] = useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div>
      <IconButton onClick={toggleDrawer} style={{marginTop:'110px',marginRight:'20px'}}>
        <MenuIcon />
      </IconButton>
    
      <Drawer  sx={{
          width: '220px',
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: '220px',
            top: '170px',
            marginBottom:'50px'
          },overflow:'hidden'
        }} anchor="right" open={open} onClose={toggleDrawer} >
        <div
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
          role="presentation">
            <div>
  <div style={{display:'flex', alignItems:'center', margin:'12px'}}>
    <button style={{height:'25px', width:'25px',cursor:'pointer'}}>0</button>
    <text style={{fontSize:'10px', marginLeft:'2px'}}>Answered</text>
    <button style={{marginLeft:'10px',cursor:'pointer'}}>1</button>
    <text style={{fontSize:'10px', marginLeft:'2px'}}>Not Answered</text>
  </div>
  <div style={{display:'flex', alignItems:'center', margin:'12px'}}>
    <button style={{cursor:'pointer'}}>49</button>
    <text style={{fontSize:'10px', marginLeft:'2px'}}>Not Visited</text>
    <button style={{marginLeft:'12px',cursor:'pointer'}}>0</button>
    <text style={{fontSize:'10px', marginLeft:'2px'}}>Marked for Review</text>
  </div>
  <div style={{display:'flex', alignItems:'center', margin:'12px'}}>
    <button style={{cursor:'pointer'}}>0</button>
    <text style={{fontSize:'10px', marginLeft:'2px'}}>Answered and Marked for Review (will be considered for evaluation)</text>
  </div>
</div>

        </div>

        <div style={{textAlign:'center',backgroundColor:'#1e90ff',color:'white'}}>
          General Awarness
        </div>
        <div style={{backgroundColor:'#00bfff'}}>
        <strong style={{fontSize:'15px'}}>Choose a question</strong>

<div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 40px)', gridGap: '12px', margin: '8px'}}>
<button style={{ height: '25px', width: '30px',cursor:'pointer' }}>1</button>
<button style={{ height: '25px', width: '30px' ,cursor:'pointer'}}>2</button>
<button style={{ height: '25px', width: '30px',cursor:'pointer' }}>3</button>
<button style={{ height: '25px', width: '30px',cursor:'pointer' }}>4</button>

<button style={{ height: '25px', width: '30px',cursor:'pointer' }}>5</button>
<button style={{ height: '25px', width: '30px',cursor:'pointer' }}>6</button>
<button style={{ height: '25px', width: '30px',cursor:'pointer' }}>7</button>
<button style={{ height: '25px', width: '30px',cursor:'pointer' }}>8</button>

<button style={{ height: '25px', width: '30px',cursor:'pointer' }}>9</button>
<button style={{ height: '25px', width: '30px',cursor:'pointer' }}>10</button>
<button style={{ height: '25px', width: '30px',cursor:'pointer' }}>11</button>
<button style={{ height: '25px', width: '30px',cursor:'pointer' }}>12</button>

<button style={{ height: '25px', width: '30px',cursor:'pointer' }}>13</button>
<button style={{ height: '25px', width: '30px',cursor:'pointer' }}>14</button>
<button style={{ height: '25px', width: '30px',cursor:'pointer' }}>15</button>
<button style={{ height: '25px', width: '30px',cursor:'pointer' }}>16</button>

<button style={{ height: '25px', width: '30px',cursor:'pointer' }}>17</button>
<button style={{ height: '25px', width: '30px',cursor:'pointer' }}>18</button>
<button style={{ height: '25px', width: '30px',cursor:'pointer' }}>19</button>
<button style={{ height: '25px', width: '30px' }}>20</button>
</div>
        </div>
        

      </Drawer>
      
    </div>
  );
};

export default ScrollableDrawer;
