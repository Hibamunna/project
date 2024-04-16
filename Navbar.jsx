import { AppBar, Button,Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import IconButton from '@mui/material/IconButton';
// import DeleteIcon from '@mui/icons-material/Delete';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Image from './src/Image/resto.jpg';

const Navbar = () => {
  const backgroundImageStyle = {
    position:'fixed',
    top:0,
    left:0,
    width:'100%',
    height:'100%',
    zIndex:-1,
  };

  return (
    <div>
      <img
       src={Image}
       alt="background"
       style={backgroundImageStyle }/>
       </div>
  )
  <div>
      <AppBar color='error'>
        <Toolbar>
            <Typography variant='h5'>RED STILLETTO RESTURANT</Typography>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div>
            <Button color='error'>
            <Link to={'/Homepage'} style={{textDecoration:'none', color:'white'}}>HOME</Link>
            </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button>
               <Link to={''} style={{textDecoration:'none', color:'white'}}>MENU</Link>
            </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button>
            <Link to={''} style={{textDecoration:'none', color:'white'}}>OFFERS</Link>
            </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button>

            <Link to={'/Login'} style={{textDecoration:'none', color:'white'}}>LOGIN</Link>
            </Button>&nbsp;&nbsp;
            <Button>
            <Link to={'/Signup'} style={{textDecoration:'none', color:'white'}}>SIGNUP</Link>
            </Button>
          
           
            <IconButton aria-label="Dashboard" color='secondary'>
        <DashboardIcon />
      </IconButton>
            </div>
        </Toolbar>
      </AppBar>
    </div>
}

export default Navbar