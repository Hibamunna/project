import { Breadcrumbs, Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div style={({marginTop:"80px"})}><br></br><br></br>
<Typography variant='h4'>Login</Typography><br /><br />
<TextField label="Enter Name" variant='outlined'/><br /><br /><br />
<TextField label="Password" type='password' variant='outlined'/><br /><br />
<Button variant="contained" color='success'>Log In</Button>
    
    </div>
  )
}

export default Login