
import './App.css';
//import ExamPage from './Components/ExamPage';
import { Grid } from '@mui/material';
import Navbar from './Components/Navbar';
import Heading from './Components/Heading'
import ExamPage from './Components/ExamPage';
import Sidebar from './Components/Sidebar';
import Footer from './Components/Footer';
import Drawer from './Components/Drawer';
function App() {
  return (
    <>
      <Navbar />
      <Grid container spacing={0}>
        <Grid items xs={10}>
          <Heading />
        </Grid>
        <Grid items xs={2}>
          <Sidebar />
        </Grid>
        <Grid items xs={10}>
          <ExamPage />
        </Grid>
        <Grid items xs={2}>
          <Drawer />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default App;
