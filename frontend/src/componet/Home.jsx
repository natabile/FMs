import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import { motion } from 'framer-motion';
import backgroundimage from '../asset/bg.jpeg';
import Footer from './Footer';
import ServiceSection from './products';
import Navbar from '../page/dashbored/Navbar';
import logo from '../asset/logoof.webp';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Box>
      <Navbar />
      <Box
        sx={{
          backgroundImage: `url(${backgroundimage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mt: { xs: 40, sm: 17, md: 17 },
          clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 0 82%)',
          padding: { xs: '20px', sm: '40px', md: '60px' },
          textAlign: { xs: 'center', sm: 'left' },
        }}
      >
        <Box
          sx={{
            color: 'white',
            ml: { xs: 0, sm: 20 },
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center',
            gap: { xs: 4, sm: 10 },
          }}
        >
          <Box
            sx={{
              flex: 1,
              textAlign: { xs: 'center', sm: 'left' },
            }}
          >
            <motion.div
              animate={{ opacity: [1, 1, 1], color: ['#FF0000', '#00FF00', '#0000FF'] }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'easeInOut',
              }}
            >
              <Typography
                sx={{
                  fontFamily: 'Inter',
                  fontSize: { xs: '24px', sm: '30px' },
                  fontWeight: 700,
                }}
              >
                Your Personal Expense Tracker
              </Typography>
            </motion.div>
            <Typography
              sx={{
                fontFamily: 'Inter',
                fontSize: { xs: '24px', sm: '30px' },
                fontWeight: 700,
              }}
            >
              Manage Your Finances
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Inter',
                fontSize: { xs: '24px', sm: '30px' },
                fontWeight: 700,
              }}
            >
              with Ease
            </Typography>
            <Typography
              sx={{
                maxWidth: { xs: '100%', sm: '500px' },
                fontSize: { xs: '14px', sm: '16px' },
                lineHeight: 1.6,
                mt: 2,
                fontFamily: 'Inter',
              }}
            >
              Track your spending, set savings goals, and stay on top of your finances with our powerful Expense Tracker. Our tool is designed to simplify budgeting and help you make informed financial decisions. Start taking control of your money today and plan a brighter financial future.
            </Typography>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', sm: 'block' },
              flex: 1,
            }}
          >
            <Box
              component="img"
              src={logo}
              sx={{
                width: '100%',
                height: { xs: 'auto', sm: '500px' },
                mt: { xs: '20px', sm: '-70px' },
                mb: '30px',
                clipPath: `polygon(50% 0%, 65% 5%, 90% 10%, 100% 30%, 95% 45%, 85% 60%, 90% 80%, 
                70% 100%, 50% 90%, 30% 100%, 10% 80%, 15% 60%, 5% 45%, 0% 30%, 
                10% 10%, 35% 5%)`,
                objectFit: 'cover',
              }}
            />
          </Box>
        </Box>
        <Button
          variant="contained"
          component={Link}
          to="/dashbored"

          sx={{
            width: { xs: '30%', sm: '20%' },
            mt: { xs: 20, sm: 4 },
            mx: { xs: 4, sm: 20 },
            mb: { xs: 8, sm: 20 },
            display: 'block',
            alignSelf: 'center',
          }}
        >
          Start Tracking Now
        </Button>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mt: 10,
          p: 4,
          background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.6) 100%)',
          borderRadius: '15px',
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.3)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'translateY(-100px)',
            boxShadow: '0 16px 40px rgba(0, 0, 0, 0.5)',
          },
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Roboto',
            fontSize: { xs: '28px', sm: '36px' },
            fontWeight: 700,
            color: '#FFEB3B', // Bright yellow for heading
            textShadow: '2px 2px 6px rgba(0, 0, 0, 0.5)',
            textAlign: 'center',
          }}
          component="h1"
        >
          Explore Our Features
        </Typography>

        <Typography
          sx={{
            maxWidth: '500px',
            mt: 2,
            fontFamily: 'Roboto',
            fontSize: { xs: '16px', sm: '18px' },
            color: '#E0E0E0', // Light grey for body text
            textAlign: 'center',
            lineHeight: '1.6',
          }}
          component="p"
        >
          Discover tools that make budgeting, tracking expenses, and managing savings simple and effective. Join our community of users who have transformed their financial habits with our tracker.
        </Typography>
      </Box>
      <ServiceSection />
      <Footer />
    </Box>
  );
}

export default Home;
