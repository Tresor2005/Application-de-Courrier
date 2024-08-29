import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Inscription() {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (data.motDePasse !== data.motDePasseConfirmation) {
      toast.error("Les mots de passe ne correspondent pas");
    } else {
      axios
        .get(
          `http://localhost:3000/utilisateurs?mailUtilisateur=${data.mailUtilisateur}`
        )
        .then((res) => {
          if (res.data.length > 0) {
            toast.error("Un compte existe déjà avec cette adresse mail");
          } else {
            axios
              .post("http://localhost:3000/utilisateurs", data)
              .then((res) => {
                console.log(res);

                toast.success("Inscription réussie");
                navigate("/");
              })
              .catch((err) => {
                console.log(err);
                toast.error("Une erreur est survenue");
              });
          }
        });
    }
  };
  return (
    <Stack
      alignItems={"center"}
      justifyContent={"center"}
      width={"100%"}
      height={"100vh"}
      backgroundColor={"#f5f5f5"}
      sx={{backgroundImage: 'url(https://img.freepik.com/vecteurs-libre/copie-fond-lumieres-printemps-espace-bokeh_52683-55649.jpg?t=st=1724925575~exp=1724929175~hmac=3c1558f09a8307b545e68df0826e2b7d5d31bebfaad2ef0f92c57f3009edb973&w=1060)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%', }}
    >
      <Box
        width={400}
        sx={{
          backgroundColor: "#f7f7f7",
          padding: 3,
        }}
      >
        <Typography variant="h5">Inscription</Typography>
        <form
          style={{
            marginTop: 4,
          }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Stack direction={"column"} gap={2}>
            <TextField
              id="filled-basic"
              label="Veuillez saisir votre nom"
              variant="outlined"
              fullWidth
              size="small"
              {...register("nomUtilisateur", {
                required: "Veuillez saisir un nom",
                minLength: {
                  value: 5,
                  message: "Veuillez saisir un nom de plus de 5 caractères",
                },
              })}
            />
            <TextField
              id="filled-basic"
              label="Veuillez saisir votre adresse mail"
              variant="outlined"
              fullWidth
              size="small"
              type="email"
              {...register("mailUtilisateur", {
                required: "Veuillez saisir votre adresse mail",
                pattern: "/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/",
              })}
            />
            <TextField
              id="filled-basic"
              label="Veuillez saisir un mot de passe"
              variant="outlined"
              fullWidth
              size="small"
              type="password"
              {...register("motDePasse", {
                required: "Veuillez saisir un mot de passe",
                minLength: {
                  value: 6,
                  message:
                    "Veuillez saisir un mot de passe de plus de 6 caractères",
                },
              })}
            />
            <TextField
              id="filled-basic"
              label="Veuillez confirmer votre mot de passe"
              variant="outlined"
              fullWidth
              size="small"
              type="password"
              {...register("motDePasseConfirmation", {
                required: "Veuillez confirmer votre mot de passe",
                minLength: {
                  value: 6,
                  message:
                    "Veuillez saisir un mot de passe de plus de 6 caractères",
                },
              })}
            />
          </Stack>
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
          >
            Inscription
          </Button>
        </form>
      </Box>
    </Stack>
  );
}
