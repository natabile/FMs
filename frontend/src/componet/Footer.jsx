import React from 'react';
import { Box, Grid, Typography, IconButton } from '@mui/material';
import { Facebook, Instagram, WhatsApp, YouTube, Telegram } from '@mui/icons-material';
import { Link } from 'react-router-dom';

// Import your logo image
import logo from '../asset/logoof.webp';  // Adjust path as needed

const Footer = () => {
  return (
    <Box
      id="footer"
      sx={{
        bgcolor: '#000000',
        color: '#fff',
        p: 4,
        mt: 4,
        textAlign: 'center',
      }}
    >
      <Grid container spacing={4} justifyContent="space-between">
        {/* Brand Information */}
        <Grid item xs={12} md={4}>
          <Link to="/home">
            <img src={logo} alt="Logo" style={{ height: '50px', marginBottom: '10px' }} /> {/* Adjust size as needed */}
          </Link>
          <Typography variant="h4" sx={{ mb: 2, fontFamily: 'serif' }}>
            FMS
          </Typography>
          <Typography variant="body2">
            <strong>Tel:</strong> +251961163093
          </Typography>
          <Typography variant="body2">
            <strong>Email:</strong> codernathailu@gmail.com
          </Typography>
        </Grid>

        {/* Quick Links */}
        <Grid item xs={12} md={4} sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant="h6" sx={{ mb: 2, color: '#d2a679', fontFamily: 'serif' }}>
            Quick Links
          </Typography>
          <Typography component={Link} to="/" variant="body2" sx={{ mb: 1, textDecoration: 'none' }}>
            Home
          </Typography>
          <Typography component={Link} to="/about" variant="body2" sx={{ mb: 1, textDecoration: 'none' }}>
            About Us
          </Typography>

          <Typography component={Link} variant="body2" sx={{ mb: 1, textDecoration: 'none' }}>
            Contact Us
          </Typography>
        </Grid>

        {/* Animated Quote Section */}
        <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <Typography
            variant="body1"
            sx={{
              fontStyle: 'italic',
              fontSize: '1.2rem',
              color: '#1976d2',
              textAlign: 'center',
              animation: 'glow 1.5s ease-in-out infinite', // Animation for glowing effect
              '&:hover': {
                color: '#ff4081', // Change color on hover
                transition: 'color 0.3s ease', // Smooth transition
              },
              // Adding keyframes directly in the sx prop (not standard but works in this case)
              '@keyframes glow': {
                '0%': {
                  textShadow: '0 0 5px rgba(25, 118, 210, 0.7), 0 0 10px rgba(25, 118, 210, 0.7)',
                },
                '50%': {
                  textShadow: '0 0 10px rgba(25, 118, 210, 0.9), 0 0 20px rgba(25, 118, 210, 0.9)',
                },
                '100%': {
                  textShadow: '0 0 5px rgba(25, 118, 210, 0.7), 0 0 10px rgba(25, 118, 210, 0.7)',
                },
              },
            }}
          >
            "Beware of little expenses; a small leak will sink a great ship." – Benjamin Franklin
          </Typography>
        </Grid>
      </Grid>

      {/* Social Media Icons */}
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <IconButton sx={{ color: '#fff' }}>
          <Facebook />
        </IconButton>
        <IconButton sx={{ color: '#fff' }}>
          <Instagram />
        </IconButton>
        <IconButton sx={{ color: '#fff' }}>
          <WhatsApp />
        </IconButton>
        <IconButton sx={{ color: '#fff' }}>
          <Telegram />
        </IconButton>
        <IconButton sx={{ color: '#fff' }}>
          <YouTube />
        </IconButton>
      </Box>

      {/* Copyright Section */}
      <Typography variant="body2" sx={{ mt: 4 }}>
        Copyright © 2024{' '}
        <span style={{ color: '#d2a679' }}>FMS</span>. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
