import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

export default function Connexion() {
  return (
    <Stack
      alignItems={"center"}
      justifyContent={"center"}
      width={"100%"}
      height={"100vh"}
      backgroundColor={"#f5f5f5"}
      sx={{
        backgroundImage: 'url(https://img.freepik.com/vecteurs-libre/copie-fond-lumieres-printemps-espace-bokeh_52683-55649.jpg?t=st=1724925575~exp=1724929175~hmac=3c1558f09a8307b545e68df0826e2b7d5d31bebfaad2ef0f92c57f3009edb973&w=1060)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%',
      }}
    >
      <Box
        width={400}
        sx={{
          backgroundColor: "#f7f7f7",
          padding: 3,
          textAlign: "center",
        }}
      >
        <img
          src="src\pages\connexion\Présentation-du-CENADI.jpg"
          alt="Logo"
          style={{
            width: 100,
            height: 100,
            borderRadius: "50%",
            marginBottom: 20,
          }}
        />
        <Typography variant="h5">Connexion</Typography>
        <form
          style={{
            marginTop: 4,
          }}
        >
          <Stack direction={"column"} gap={2}>
            <TextField
              id="filled-basic"
              label="Veuillez saisir votre adresse mail"
              variant="outlined"
              fullWidth
              size="small"
              type="email"
            />
            <TextField
              id="filled-basic"
              label="Veuillez saisir un mot de passe"
              variant="outlined"
              fullWidth
              size="small"
              type="password"
            />
          </Stack>
          <Link to="/dashbord">
          <Button
            variant="contained"
            sx={{
              marginTop: 2,
              backgroundColor: "#00a652", // Couleur principale verte
              ":hover": {
                backgroundColor: "#8fdc5c", // Vert citron au survol
              },
            }}
            type="submit"
            onClick={() => toast.success("Vous êtes connecté !")}
          >
            Connexion
          </Button></Link>
          <Typography paddingTop={2}>
            Voulez-vous créer un compte ?{" "}
            <Link to="/inscription">Cliquez ici</Link>
          </Typography>
        </form>
      </Box>
    </Stack>
  );
}
