import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Upload from './Upload';
import Button from '@mui/material/Button';


export default function ComboBox() {
  return (
    <div style={{  justifyContent: 'space-between', alignItems: 'center', }}>
        
        <TextField id="outlined-basic" label="Objet" variant="outlined" sx={{ width: "100%", marginTop: 10 }} />
       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', alignContent: 'center' }}> 
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={destinataire}
          getOptionLabel={(option) => `${option.nom} - ${option.poste}`}
          sx={{ width: "83%" }}
          renderInput={(params) => <TextField sx={{marginTop: 2}} {...params} label="Destinataire" />}
        />
        <Upload />
      </div>
      <TextField id="outlined-basic" label="Indication" variant="outlined" sx={{ width: "100%", marginTop: 2 }} />
      <Button variant="contained"
            sx={{width: "100%",
                height: "45px",
                marginTop: 2,
                backgroundColor: "#00a652", // Couleur principale verte
                  ":hover": {
                    backgroundColor: "#8fdc5c", // Vert citron au survol
                  },
            }}
        >
            Envoyer Courrier
        </Button>
        <hr style={{ margin: 20}} />
        <div><h2>Courriers Envoyés </h2></div>
    </div>
  );
}

const destinataire = [
    { nom: "Tchinda Tresor", poste: "Dev Front" },
    { nom: "Pola Celia", poste: "Dev Back" },
    { nom: "Mr. Youmba", poste: "Chef Projet" }
  ];
