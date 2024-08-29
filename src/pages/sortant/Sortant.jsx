import React from 'react'
import Navbar from "./coponents/Navbar";
import { Box } from "@mui/material";
import Envoi from './coponents/Envoi';
import Tableau from './coponents/Tableau';

export default function Sortant() {
  return (
    <Box bgcolor={"#eef4ff"} display="flex" flexDirection="column" sx={{backgroundColor: 'white'}}>
        <Box marginBottom={10} >
          <Navbar />
        </Box>
        <Box padding={3}>
          <Envoi />
        </Box>
        <Box margin={2}>
          <Tableau />
        </Box>
    </Box>
  )
}
