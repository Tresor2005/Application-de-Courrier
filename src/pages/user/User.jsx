import React from 'react'
import Navbar from "./coponents/Navbar";
import { Box } from "@mui/material";
import Tableau from './coponents/Tableau'

export default function User() {
  return (
    <Box bgcolor={"#eef4ff"} display="flex" flexDirection="column" sx={{backgroundColor: "white"}}>
        <Box >
          <Navbar />
        </Box>
        <Box>
          <Tableau />
        </Box>
    </Box>
  )
}
