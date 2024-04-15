import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
    <div style={({marginTop:"80px"})}><br></br><br></br>
      <br></br>
      <Typography variant='h4'>Sign Up</Typography><br /><br /><br/>
      <TextField label="Enter Firstname" variant='outlined'/><br /><br />
      <TextField label="Enter Lastname" variant='outlined'/><br /><br />
      <TextField label="Enter Email" variant='outlined'/><br /><br />
      <TextField label="Password" type='password' variant='outlined'/><br /><br />
      <TextField label="Confirm Password" type='password' variant='outlined'/><br /><br />
      <Button variant='contained' color='success'> Sign In</Button>
    </div>
  )
}

export default Signup