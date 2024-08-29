import React from "react";
import Navbar from "./components/Navbar";
import { Box } from "@mui/material";
import Boutons from "./components/Boutons";
import './components/styles.css';

export default function Dashboard() {
  return (
    <Box
    display="flex"
      height="100vh"
      flexDirection="column"
      sx={{backgroundImage: 'url(https://img.freepik.com/photos-premium/enveloppe-verte-carres-verts-fond-blanc-fond-blanc_1308157-170550.jpg?w=740)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%', }}
    >
      <Navbar />
      <div style={{ marginTop: 100, textAlign: 'center' }}>
        <h1 className="animatedText">BIENVENU DANS VOTRE APPLICATION DE COURRIER</h1>
      </div>
      <Boutons />
    </Box>
  );
}
