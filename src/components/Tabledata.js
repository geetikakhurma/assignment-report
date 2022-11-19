import  React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function createData(id, name, response, reslink, dreport, sreport, certificate) {
  return { id, name, response, reslink,dreport, sreport, certificate };
}

const headers = ['Candidate ID', 'Name', 'Interaction ID / Response', 'Detailed Report', 'Summary Report','Certificate'];

const rows = [
  createData('123456', "Abc singh", 686569, "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf","https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf","https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"),
  createData('556564', "123 Testing", 579560, "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf","https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf","https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"),
  createData('579565', "NBhavya Khurana", 123456, "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf","https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf","https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"),
  createData('344646', "Monika Khatri", 973456, "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf","https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf","https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"),
  createData('468656', "Ashna Nagpal",454633, "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf","https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf","https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"),
];

export default function Tabledata() {
  return (
    
    <Box display="flex"  alignitems="center" height="60vh"  mx={5} mt={5} justifyContent="center"  >
    <TableContainer   component={Paper}>
      <Table size="small" aria-label="a dense table">


  <TableHead display="flex"  alignitems="center"  width="100vw"colSpan={6} >
  <TableRow  >
  <TableCell align='center' colSpan={6}   sx={{bgcolor:"#3f50b5", color:"white"}}>  Individual Reports</TableCell>
  </TableRow>



  </TableHead>
     <TableHead>
        <TableRow>
        {headers.map((row,index) => (       
         <TableCell key={row.index} align="center">{row}</TableCell>
       ))}         
        </TableRow>
     </TableHead>
      
 
 
        <TableBody  >
          {rows.map((row,index) => (
            <TableRow 
              key={row.index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
            <TableCell align="center" >{row.id}</TableCell>
              <TableCell align="center" >{row.name}</TableCell>
               <TableCell align="center" ><Button  style={{ textTransform: 'none'}}  variant="contained"color="primary" href={row.reslink}>{row.response}</Button></TableCell>
              <TableCell align="center"><Button  style={{ textTransform: 'none'}}  variant="contained"color="primary" href={row.dreport}>View Report</Button></TableCell>
              <TableCell align="center"><Button  style={{ textTransform: 'none'}}  variant="contained"color="primary" href={row.sreport}>View Report</Button></TableCell>
              <TableCell align="center"><Button  style={{ textTransform: 'none'}}  variant="contained"color="primary" href={row.certificate}>View Certificate</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
  );
}