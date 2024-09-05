import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ArchiveIcon from '@mui/icons-material/Archive';
import RestoreIcon from '@mui/icons-material/Restore';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#00a652", // Changez cette valeur pour la couleur souhaitée
    color: theme.palette.common.white,
    position: 'sticky',
    top: 0,
    zIndex: 1,
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

function createData(objet, Destinataire, Indication, Date, Heure) {
  return { objet, Destinataire, Indication, Date, Heure };
}

const rows = [
  createData('Demmande de Stage', 'SIMO', 'A Traiter Avec Beaucoup de Rigueur', '12/02/24','12:30'),
  createData('Lettre de Demission', 'Directeur', 'A traiter au Plus Vite', '12/02/24','12:30'),
  createData('Notification de changement d’adresse', 'SIMO', 'A transmettre', '12/02/24','12:30'),
  createData('Demande de budjet',  'SIMO', 'En Rapport avec NHFH', '20/07/23','12:30'),
  createData('Demande augmentation', 'SIMO', 'Pour Ressources Humaine', '10/02/23','17:30'),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper} sx={{marginTop: 10}}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead sx={{backgroundColor: "blueviolet"}}>
          <TableRow>
            <StyledTableCell>Objet</StyledTableCell>
            <StyledTableCell align="right">Destinataire</StyledTableCell>
            <StyledTableCell align="right">Indication</StyledTableCell>
            <StyledTableCell align="right">Date</StyledTableCell>
            <StyledTableCell align="right">Heure</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.objet}>
              <StyledTableCell component="th" scope="row">
                {row.objet}
              </StyledTableCell>
              <StyledTableCell align="right">{row.Destinataire}</StyledTableCell>
              <StyledTableCell align="right">{row.Indication}</StyledTableCell>
              <StyledTableCell align="right">{row.Date}</StyledTableCell>
              <StyledTableCell align="right">{row.Heure}</StyledTableCell>
              <StyledTableCell align="right">
                <IconButton aria-label="restaurer">
                  <RestoreIcon />
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
