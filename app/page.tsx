'use client';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import HomeIcon from '@mui/icons-material/Home';


const pages = ['Accueil', 'Actualités', 'Nous soutenir', 'Nous contacter'];

export default function Home() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    // navbar documentation https://mui.com/material-ui/react-app-bar/

  return (
      <AppBar position="static">
          <Container maxWidth="xl">
              <Toolbar disableGutters className={"flex justify-between"}>
                  <Container className={"flex"}>
                      <HomeIcon  sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                      <Typography>
                          Coloc du val de Marne
                      </Typography>
                  </Container>


                  <Container sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                      {pages.map((page) => (
                          <Button
                              key={page}
                              onClick={handleCloseNavMenu}
                              sx={{ my: 2, color: 'white', display: 'block' }}
                          >
                              {page}
                          </Button>
                      ))}
                  </Container>
              </Toolbar>
          </Container>
      </AppBar>
  );
}
