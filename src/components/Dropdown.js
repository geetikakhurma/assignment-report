import  {React, useState}from 'react';

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import Tabledata from './Tabledata';
import { Typography } from '@mui/material';




  



const Dropdown = () => {

  const [show, setShow] = useState(true);

  const handleChange = (event) => {
    setShow(event.target.value);
  }
 

  
  return (
 <Box sx={{  margin: {sm: 10} }} >
  <Box display="flex"  alignItems="center" justifyContent="center"  >
 
  <Typography sx={{ fontWeight: 'bold' }} >
  Choose to display:
</Typography>

  
 
    <FormControl sx={{ m: 1,  width: { xs: 120, md: 320}}}>
   
        <Select
          value={show}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value={show}>
        
          </MenuItem>
          <MenuItem value={true}>Show All</MenuItem>
          <MenuItem value={false}>Hide</MenuItem>
          
        </Select>
   
      </FormControl>
      </Box>

      {show ? <Tabledata/> : null } 
 </Box>
  )
}

export default Dropdown