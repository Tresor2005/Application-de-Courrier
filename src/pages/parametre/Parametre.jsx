import React from 'react'
import Navbar from "./coponents/Navbar";
import { Box } from "@mui/material";
import List from './coponents/List'

export default function Parametre() {
  return (
    <Box bgcolor={"#eef4ff"} display="flex" flexDirection="column" sx={{backgroundColor: "white"}}>
      <Box >
        <Navbar />
      </Box>
      <Box>
        <List />
      </Box>
    </Box>
  )
}
