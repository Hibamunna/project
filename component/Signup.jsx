import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
    <div>
      <br></br>
      <Typography variant='h4'>Sign In</Typography>
      <TextField label="Enter Firstname" variant='outlined'/>
      <TextField label="Enter Lastname" variant='outlined'/>
      <TextField label="Enter Email" variant='outlined'/>
      <TextField label="Password" type='password' variant='outlined'/>
      <TextField label="Confirm Password" type='password' variant='outlined'/>
      <Button variant='contained' color='success'> Sign In</Button>
    </div>
  )
}

export default Signup
