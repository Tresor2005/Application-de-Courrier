import React from 'react'
import Navbar from "./coponents/Navbar";
import { Box } from "@mui/material";
import Tableau from "./coponents/Tableau"

export default function Entrant() {
  return (
    <Box 
    display="flex"
      height="100vh"
      flexDirection="column"
      sx={{backgroundImage: 'url(https://tse4.mm.bing.net/th?id=OIG2.NIYk0il3jAI6ZTYN2XFb&pid=ImgGn)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: "cover"  ,
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%',
        backgroundColor: ""
      }}
    >
        <Box marginBottom={10} >
          <Navbar />
        </Box>
        <Box margin={2}>
          <Tableau />
        </Box>
    </Box>  

  )
}
