import React, { useState } from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
} from '@mui/material';

export default function BasicList() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      bgcolor="#f5f5f5"
    >
      <nav aria-label="secondary mailbox folders" style={{ backgroundColor: '#5472AE', color: 'white', marginBottom: 50 }}>
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={handleProfileClick}>
              <ListItemText primary="Profil" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Gestion des Utilisateurs" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Notification" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Deconnexion" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem>Nom: John Doe</MenuItem>
        <MenuItem>Email: john.doe@example.com</MenuItem>
        <MenuItem>Mot de passe: ********</MenuItem>
        <MenuItem>Poste: Développeur</MenuItem>
      </Menu>
    </Box>
  );
}
