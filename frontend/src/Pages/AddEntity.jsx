import Header from '../Components/Header/Header'
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import axios from 'axios';

export default function FormPropsTextFields() {
    const [formData, setFormData] = React.useState({})
    
    const handleOnChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        axios.post("http://localhost:8080/myclass/create",formData).then((response)=>{
            console.log(response.data);
        })
    }

  return (

    <div>
        <Header/>
        <form onSubmit={handleSubmit}>

        <Box
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
            <TextField
              id="filled-password-input"
              label="First name"
              autoComplete="current-password"
              variant="filled"
              onChange={handleOnChange}
              name="firstName"
            />
            <TextField
              id="filled-password-input"
              label="Last name"
              autoComplete="current-password"
              variant="filled"
              onChange={handleOnChange}
              name="lastName"
            />
            <TextField
              id="filled-password-input"
              label="Phone number"
              autoComplete="current-password"
              variant="filled"
              onChange={handleOnChange}
              name="phoneNumber"
            />
            <TextField
              id="filled-password-input"
              label="Email"
              type="email"
              autoComplete="current-password"
              variant="filled"
              onChange={handleOnChange}
              name="email"
            />
            <Button variant="contained" type='submit'>Submit</Button>
        </Box>
        </form>

    </div>

      );
}