import Info from './Components/Info';
import './App.css';
import Page2 from './Components/Page2';
import { Grid } from '@mui/material';
import Page3 from './Components/Page3';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page4 from './Components/Page4';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Grid container spacing={2} sx={{ margin: '20px' }}>
              <Grid item xs={12}>
                <Info />
                <br />
              </Grid>
              <Grid item xs={12}>
                <Page2 />
              </Grid>
              <Grid item xs={12}>
                <Page3 />
              </Grid>
            </Grid>
          }
        />
        <Route path="/page4" element={<Page4 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
