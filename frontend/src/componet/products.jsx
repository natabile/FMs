import React, { useState } from 'react';
import { Button, Typography, Box, Grid } from '@mui/material';
import expense from "../asset/expense.png";
import Crypto from "../asset/crypto1.jpg";
import analsis from "../asset/analsise.png";
import degitall from "../asset/dedital.jpeg";

const ServiceSection = () => {
  const services = [
    {
      title: 'Expense Tracking',
      description: 'Effortlessly monitor your daily spending and organize expenses into categories for greater financial clarity. Stay on top of your finances with powerful tools to track and manage budgets with ease.',
      image: expense,

    },
    {
      title: 'Crypto Info',
      description: 'Access live data on top cryptocurrencies. Our app keeps you updated with real-time prices, trends, and analytics, empowering you to make informed and timely investment decisions in the world of crypto.',
      image: Crypto,
    },
    {
      title: 'Financial Analytics',
      description: 'Dive deep into your financial habits with insightful analytics. Visualize spending patterns and reports that make understanding your finances easier and more intuitive.',
      image: analsis,
    },
    {
      title: 'Budgeting Tool',
      description: 'Plan and stick to budgets for various expense categories. Our budgeting tool simplifies financial goal-setting, helping you achieve your savings and spending objectives effortlessly.',
      image: degitall,
    },
  ];

  const [currentService, setCurrentService] = useState(0);

  return (
    <Box
      sx={{
        textAlign: 'center',
        p: { xs: 2, md: 4 },
        backgroundColor: '#f5f5f5',
        borderRadius: '15px',
      }}
    >
      <Grid container spacing={2} justifyContent="center" sx={{ mb: 4 }}>
        {services.map((service, index) => (
          <Grid item key={index}>
            <Button
              variant={currentService === index ? 'contained' : 'outlined'}
              color={currentService === index ? 'primary' : 'default'}
              onClick={() => setCurrentService(index)}
              sx={{
                minWidth: { xs: 100, md: 150 },
                height: 60,
                textTransform: 'uppercase',
                fontSize: { xs: '0.8rem', md: '1rem' },
                color: currentService === index ? '#fff' : '#333',
                backgroundColor: currentService === index ? '#1976d2' : '#fff',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: '#1976d2',
                  color: '#fff',
                  transform: 'scale(1.1)', // Scale to 110% on hover
                },
                borderRadius: '30px',
                p: { xs: 2, md: 3 },
              }}
            >
              {service.title}
            </Button>
          </Grid>
        ))}
      </Grid>

      {/* Display the selected service content */}
      <Grid container spacing={4} alignItems="center">
        {/* Image Section */}
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: 'center' }}>
            <img
              src={services[currentService].image}
              alt={services[currentService].title}
              style={{
                width: '100%',
                maxWidth: '500px',
                height: 'auto',
                borderRadius: '10px',
                boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)',
                transition: 'transform 0.3s ease',
                transform: currentService === 0 ? 'scale(1.05)' : 'scale(1)',
              }}
            />
          </Box>
        </Grid>

        {/* Text Section */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            sx={{
              mb: 2,
              fontSize: { xs: '1.5rem', md: '2rem' },
              fontWeight: 'bold',
              color: '#1976d2',
              textShadow: '2px 2px 8px rgba(0,0,0,0.1)',
            }}
          >
            {services[currentService].title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 2,
              fontSize: { xs: '1rem', md: '1.25rem' },
              color: '#555',
              lineHeight: 1.6,
              px: { xs: 2, md: 4 },
              textAlign: 'justify',
              transition: 'opacity 0.3s ease',
              opacity: currentService === 0 ? 1 : 0.9,
            }}
          >
            {services[currentService].description}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ServiceSection;
