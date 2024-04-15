import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div><br></br><br></br>
<Typography variant='h4'>Login</Typography>
<TextField label="Enter Name" variant='outlined'/>
<TextField label="Password" type='password' variant='outlined'/>
<Button variant="contained" color='success'>Log In</Button>
    
    </div>
  )
}

export default Login
