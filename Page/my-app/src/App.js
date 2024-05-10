
import Info from './Components/Info';
import './App.css';
import Page2 from './Components/Page2';
import { Grid } from '@mui/material';
import Page3 from './Components/Page3';
function App() {
  return (
    <>
      <Grid container spacing={2} sx={{ margin: '20px' }}>
        <Grid items xs={12}>
          <Info />
          <br></br>
        </Grid>
        <Grid items xs={12}>
          <Page2 />
        </Grid>
        <Grid items xs={12}>
          <Page3 />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
