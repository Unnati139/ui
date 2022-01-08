
import './App.css';
import left_part from './components/Left_part';
import Navbar from './components/Navbar';

import right_part from './components/Right_part';
import Main from './pages/Main';
import ViewportProvider from './viewport/ViewportProvider';
import useViewport from './viewport/index';
import { Typography } from '@mui/material';


function App() {
  const {width,height,isMobile,isTablet } = useViewport();
  return (
    <div className="App">
      <Navbar />  
     
      <Main />
      <img  src="/Json/footer1.png" style={{height: "285px" , width:"1262px" , marginTop:"43px"  }}></img>
    </div>
    
  );
}

export default App;
