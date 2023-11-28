import * as React from 'react'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const defaultTheme = createTheme()
export default function FormPropsTextFields() {

    const navigate = useNavigate();

    const [details,setDetails] = React.useState({
      "id" : "",
      "name": "",
      "password": "",
      "email": "",
      "mobileNumber":"",
      "passwordConfirm":"",
      
    })
    const [open, setOpen] = React.useState(false)
    const [Erropen, setErrOpen] = React.useState(false)
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if(details.password !== details.passwordConfirm){
        setErrOpen(true);
        return;
      }
      axios
        .post('http://localhost:3001/user', details)
        .then((response) => {
          console.log('Success:', response.data);
          alert('Registration successful');
          setTimeout(() => {
            navigate('/SignInPage');
          }, 2000);
        })
        .catch((error) => {
          console.error('Error:', error);
          alert('Error in signup');
        })
    }
  
    const handleInputChange = (event) => {
      setDetails({...details,[event.target.name] : event.target.value});
    }

  return (
    <body className='total1' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh', backgroundImage: 'url(https://images.pexels.com/photos/220182/pexels-photo-220182.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',backgroundSize:'cover',backgroundRepeat:'no-repeat'}}>
    <div>

    <Box className='bb'
      component="form"
      onSubmit={handleSubmit}
      sx={{
        '& .MuiTextField-root': { m: 1, width: '45ch',height:'50px' },
        border: '2px solid black',
        borderRadius: '25px',
        padding: '5px',
        backgroundColor: 'rgba(255, 255, 255, 0.8)'
      }}
      noValidate
      autoComplete="off"
      >
        <h1 style={{textAlign:'center'}}>Sign Up</h1>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <TextField
          autoComplete="name"
          name="name"
          required
          fullWidth
          id="name"
          label="User Name"
          autoFocus
          onChange={handleInputChange}
          />
        <TextField
        required
        fullWidth
        id="mobileNumber"
        label="Mobile Number"
        name="mobileNumber"
        autoComplete="family-name"
        onChange={handleInputChange}
          />
        <TextField
           required
           fullWidth
           id="email"
           label="Email Address"
           name="email"
           autoComplete="email"
           onChange={handleInputChange}
          />
        <TextField
           required
           fullWidth
           name="password"
           label="Password"
           type="password"
           id="password"
           autoComplete="new-password"
           onChange={handleInputChange}
          />
        <TextField
           required
           fullWidth
           name="passwordConfirm"
           label="Confirm Password"
           type="password"
           id="Confirmpassword"
           autoComplete="Confirmpassword"
           onChange={handleInputChange}
          />
       <br/>
       <div>
       <input className='check1' type='checkbox'></input>
       <label> I agree the terms and conditions   </label>

       </div>
  
       <button style={{margin:'25px', backgroundColor: 'blue', color: 'white', fontSize: '20px', borderRadius: '20px', padding: '10px 75px'}}>
        <b>SUBMIT</b></button>
      </div>
    </Box>
          </div>
          </body>
  );
}
