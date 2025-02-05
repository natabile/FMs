import React from 'react';
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton
} from "@clerk/clerk-react";
import { Navigate } from 'react-router-dom';
import { Box, Button, Container, Typography } from '@mui/material';

function Index() {
  return (
    <Box
      sx={{
        minHeight: '100vh', // Full viewport height
        backgroundColor: '#121212', // Dark background color
        color: 'white', // White text
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
        <Box
          sx={{
            background: 'linear-gradient(to right, #6a11cb, #2575fc)',
            padding: 4,
            borderRadius: 3,
            boxShadow: 6,
            color: '#fff',
            transition: 'all 0.3s ease',
            '&:hover': {
              boxShadow: 12,
            },
          }}
        >
          <Typography variant="h4" sx={{ mb: 2, fontWeight: 'bold' }}>
            Welcome to FMS
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            Manage your finances with ease. Please sign in or sign up to access your dashboard.
          </Typography>

          <SignedOut>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
              <SignInButton mode="modal">
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontWeight: 'bold',
                    borderRadius: 3,
                    '&:hover': { backgroundColor: '#4b009f' },
                  }}
                >
                  Sign In
                </Button>
              </SignInButton>
              <SignUpButton mode="modal">
                <Button
                  variant="outlined"
                  color="secondary"
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontWeight: 'bold',
                    borderRadius: 3,
                    borderColor: '#fff',
                    color: '#fff',
                    '&:hover': { backgroundColor: '#ffffff22' },
                  }}
                >
                  Sign Up
                </Button>
              </SignUpButton>
            </Box>
          </SignedOut>

          <SignedIn>
            <Navigate to={'/home'} />
          </SignedIn>
        </Box>
      </Container>
    </Box>
  );
}

export default Index;
