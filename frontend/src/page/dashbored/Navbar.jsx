import { SignedIn, UserButton } from '@clerk/clerk-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

// Import your logo image
import logo from '../../asset/logoof.webp';  // Replace with the actual path to your logo

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const scrollToFooter = () => {
    const footer = document.getElementById('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const menuItems = (
    <List>
      <ListItem button component={Link} to="/dashbored" onClick={toggleDrawer(false)}>
        dashboard
      </ListItem>
      <ListItem button component={Link} to="/crypto" onClick={toggleDrawer(false)}>
        crypto
      </ListItem>
      <ListItem button component={Link} to="/about" onClick={toggleDrawer(false)}>
        About Us
      </ListItem>
      <ListItem button onClick={scrollToFooter}>
        Contact Us
      </ListItem>
      <ListItem button sx={{ mb: { xs: 3 } }} >
        <SignedIn>
          <UserButton showName />
        </SignedIn>
      </ListItem>
    </List>
  );

  return (
    <>
      <AppBar position="fixed" sx={{ bgcolor: 'black', boxShadow: 2, marginBottom: "20px", height: '80px' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Logo Section */}
          <Link to="/home" style={{ textDecoration: 'none', color: 'inherit' }}>
            <img src={logo} alt="Logo" style={{ height: '60px' }} /> {/* Adjust height for larger logo */}
          </Link>

          {/* Text */}
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'white' }}>
            <Link to="/home" style={{ textDecoration: 'none', color: 'inherit' }}>
              home
            </Link>
          </Typography>

          <div>
            <IconButton
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ display: { xs: 'flex', md: 'none' } }} // Show on mobile only
            >
              <MenuIcon />
            </IconButton>
            <Button
              color="inherit"
              component={Link}
              to="/dashbored"
              sx={{
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.2)', // Light hover effect
                },
                mx: 1, // Add horizontal margin
                display: { xs: 'none', md: 'inline' }, // Hide on mobile
              }}
            >
              dashbored
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/crypto"
              sx={{
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.2)', // Light hover effect
                },
                mx: 1, // Add horizontal margin
                display: { xs: 'none', md: 'inline' }, // Hide on mobile
              }}
            >
              Crypto
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/about"
              sx={{
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.2)', // Light hover effect
                },
                mx: 1, // Add horizontal margin
                display: { xs: 'none', md: 'inline' }, // Hide on mobile
              }}
            >
              About Us
            </Button>
            <Button
              variant="outlined"
              onClick={scrollToFooter}
              sx={{
                color: 'white',
                borderColor: 'white',
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.1)', // Hover effect
                  borderColor: 'white',
                },
                mx: 1,
                display: { xs: 'none', md: 'inline' }, // Hide on mobile
              }}
            >
              Contact Us
            </Button>
            <SignedIn>
              <UserButton showName sx={{ bgcolor: 'white', color: '#1976d2', mx: 1 }} />
            </SignedIn>
          </div>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile Menu */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        <div
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          {menuItems}
        </div>
      </Drawer>
    </>
  );
}

export default Navbar;
