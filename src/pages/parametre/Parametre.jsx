import React from 'react'
import Navbar from "./coponents/Navbar";
import { Box } from "@mui/material";
import List from './coponents/List'

export default function Parametre() {
  return (
    <Box  display="flex" flexDirection="column" sx={{backgroundImage: 'url(https://img.freepik.com/vecteurs-libre/vert-realiste-leaves_23-2149552087.jpg?t=st=1725289770~exp=1725293370~hmac=0723aae6aa077bae99cbed9a47f0940ed3a8316f26691ec380bea0a592f457c2&w=1060)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: "cover"  ,
      backgroundPosition: 'center',
      height: '100vh',
      width: '100%',
    }}>
        <Navbar />
        <List />
    </Box>
  )
}
