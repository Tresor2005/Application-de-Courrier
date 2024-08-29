import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import SendIcon from '@mui/icons-material/Send';
import ArchiveIcon from '@mui/icons-material/Archive';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from "react-router-dom";

export default function Boutons() {
  return (
    
    <Box marginTop={10}
        alignItems={"center"}
        justifyContent={"center"}
    >
        <Link to="/entrant">
        <Button 
                variant="contained"
                sx={{width: "45%",
                    height: 100,
                    margin: 2,
                    backgroundColor: "#00a652", // Couleur principale verte
              ":hover": {
                backgroundColor: "#8fdc5c", // Vert citron au survol
              },
                }}
        >
            <InboxIcon /> Courrier Entrant
        </Button>
        </Link>
        
        <Link to="/sortant"><Button variant="contained"
                sx={{width: "45%",
                    height: 100,
                    margin: 2,
                    backgroundColor: "#00a652", // Couleur principale verte
              ":hover": {
                backgroundColor: "#8fdc5c", // Vert citron au survol
              },
                }}
        >
            <SendIcon /> Courrier Sortant
        </Button></Link>
        
        <Link to="/archivage"><Button variant="contained"
                sx={{width: "45%",
                    height: 100,
                    margin: 2,
                    backgroundColor: "#00a652", // Couleur principale verte
              ":hover": {
                backgroundColor: "#8fdc5c", // Vert citron au survol
              },
                }}
        >
            <ArchiveIcon/>Archive 
        </Button></Link>

        <Link to="/parametre"><Button variant="contained"
                sx={{width: "45%",
                    height: 100,
                    margin: 2,
                    backgroundColor: "#00a652", // Couleur principale verte
              ":hover": {
                backgroundColor: "#8fdc5c", // Vert citron au survol
              },
                }}
        >
            <SettingsIcon/>Parametre
        </Button></Link>
  </Box>
  )
}
