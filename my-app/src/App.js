import './App.css';
import { Container, IconButton, ThemeProvider, Button } from '@mui/material';
import CustomBtn from './components/CustomBtn';
import theme from './styles/themes/index';
import NavBar from './components/1. NavBar';
import ProductsList from './components/2a. ProductsList'
import { useEffect } from 'react';

function App() {
  const newFunc = () => {
    alert('Scrolling to a different part of the page... beep beep boop boop');
  }

  return (
    <div>
      <div className="app" style={{background:'#ffe3e0'}}>
          <Container id="About" maxWidth="xl" maxHeight="xl" sx={{ bgcolor: '#ffe3e0', height: '100vh'}}>
            <NavBar id="navigation" />

            <br/>
            <br/>
            <br/>
            <br/>

            <h1 className="header"> Taking orders now </h1>
            <p className="text"> 
                <i> 
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet scelerisque 
                  mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas est lorem, 
                  blandit a ornare vel, hendrerit elementum lacus.  
                  <br/>
                  <br/>
                  
                </i> 
              </p>

            <br />
          </Container>

          <Container maxWidth="xl" maxHeight="xl" sx={{ bgcolor: '#FFBEB7', height: '225vh'}}>
              <br />
              <h1 className="header"> Our Menu </h1>
              <p className="text"> 
                <i> 
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet scelerisque 
                  mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas est lorem, 
                  blandit a ornare vel, hendrerit elementum lacus. Proin hendrerit ligula nisi, quis varius 
                  neque blandit a. Morbi faucibus est nisl, sed euismod turpis sodales ut. Interdum et 
                  malesuada fames ac ante ipsum primis in faucibus. 
                </i> 
              </p>

              <ProductsList />
              
              <Button variant = "contained" disableRipple={true} onClick={newFunc} style={{backgroundColor:'#EF6351', marginLeft:"590px"}}> <b> Place order </b> </Button>
          </Container>
      </div>
    </div>
  );
}

export default App;