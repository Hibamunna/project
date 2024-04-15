import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
            <Typography variant='h4'></Typography>
            <Button variant='contained'color='success'>
                Login
            </Button>
            <Button variant='contained' color='error'>
                Signup
            </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
