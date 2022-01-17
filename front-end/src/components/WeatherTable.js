import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import WeatherIcon from './WeatherIcon';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function WeatherTable({ rows }) {
  const date = new Date()
  const updateDate = (d) => { d.setDate(date.getDate() + 1) }
  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={rows.indexOf(row)}>
              <StyledTableCell component="th" scope="row">
                {updateDate(date)}
                {date.toString().split(' ', 3).join(' ')}
              </StyledTableCell>
              <StyledTableCell align="left">
                <WeatherIcon code={row.weather[0].icon} size='3em' />
              </StyledTableCell>
              <StyledTableCell align="left">{row.weather[0].description}</StyledTableCell>
              <StyledTableCell align="right">
                {Math.round(row.temp.min)}°F / {Math.round(row.temp.max)}°F
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
