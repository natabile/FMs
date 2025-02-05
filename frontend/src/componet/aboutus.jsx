/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Box, Grid, Typography, Button, Card, CardContent, CardMedia, Container, } from '@mui/material';
import logo from '../asset/logoof.webp';
import catagoriy from "../asset/catagoriye.png"
import buget from "../asset/buget.png"
import report from "../asset/report.png"
import Footer from './footer';
import { Link } from 'react-router-dom';

const styles = {
  sectionWrapper: css`
    background-color: #000;
    color: #fff;
    padding: 50px 0;
  `,
  serviceCard: css`
    background-color: #1e1e1e;
    border: 2px solid #fff;
    border-radius: 8px;
    transition: transform 0.3s, background-color 0.3s;
    &:hover {
      transform: scale(1.05);
      background-color: #333;
    }
  `,
  title: css`
    color: #00e676;
    font-weight: bold;
    text-transform: uppercase;
  `,
  subtitle: css`
    color: #ff9100;
    font-size: 20px;
    font-weight: 500;
  `,
  description: css`
    color: #fff;
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 20px;
  `,
  button: css`
    background-color: #00e676;
    color: #000;
    &:hover {
      background-color: #00c853;
    }
  `,
  missionVisionCard: css`
    background-color: #252525;
    padding: 20px;
    border-radius: 8px;
    border: 1px solid #ff9100;
  `
};

const AboutUs = () => {
  return (
    <Box sx={{ mt: 12 }} css={styles.sectionWrapper}>
      <Container >
        {/* HERO SECTION */}
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h2" css={styles.title} gutterBottom>
              About Expense Tracker
            </Typography>
            <Typography css={styles.description} paragraph>
              Expense Tracker is a cutting-edge tool that helps individuals and businesses manage their finances by tracking income, expenses, and budgets. Whether you're saving for a goal or just trying to manage monthly expenses, our app makes it easy to keep track of your financial health.
            </Typography>
            <Button component={Link} to="/dashbored" variant="contained" css={styles.button} size="large">
              Get Started
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <CardMedia
              component="img"
              image={logo}
              alt="Expense Tracker Logo"
              sx={{ borderRadius: 4, boxShadow: 3 }}
            />
          </Grid>
        </Grid>

        {/* SERVICES SECTION */}
        <Box sx={{ mt: 10, textAlign: 'center' }}>
          <Typography variant="h4" css={styles.subtitle} gutterBottom>
            Features
          </Typography>
          <Typography css={styles.description} paragraph>
            Expense Tracker offers a wide range of features to help you keep your finances in check. From real-time tracking of expenses to generating monthly reports, we provide the tools needed to manage your money effectively.
          </Typography>

          <Grid container spacing={4} sx={{ mt: 5 }}>
            {/* Budget Tracking */}
            <Grid item xs={12} sm={6} md={4}>
              <Card css={styles.serviceCard}>
                <CardMedia
                  component="img"
                  height="200"
                  image={buget}
                  alt="Budget Tracking"
                />
                <CardContent>
                  <Typography variant="h5" color="secondary" gutterBottom>
                    Budget Tracking
                  </Typography>
                  <Typography css={styles.description}>
                    Our app helps you set up budgets for different categories and track how much you’ve spent in each one. Stay on top of your expenses and make smarter financial decisions.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Expense Categorization */}
            <Grid item xs={12} sm={6} md={4}>
              <Card css={styles.serviceCard}>
                <CardMedia
                  component="img"
                  height="200"
                  image={catagoriy}
                  alt="Expense Categorization"
                />
                <CardContent>
                  <Typography variant="h5" color="secondary" gutterBottom>
                    Expense Categorization
                  </Typography>
                  <Typography css={styles.description}>
                    Categorize your expenses into various groups such as food, transportation, and entertainment, helping you easily analyze where your money goes each month.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Expense Reports */}
            <Grid item xs={12} sm={6} md={4}>
              <Card css={styles.serviceCard}>
                <CardMedia
                  component="img"
                  height="200"
                  image={report}
                  alt="Expense Reports"
                />
                <CardContent>
                  <Typography variant="h5" color="secondary" gutterBottom>
                    Expense Reports
                  </Typography>
                  <Typography css={styles.description}>
                    Generate detailed reports to gain insights into your spending habits. Our reports provide a comprehensive breakdown of your expenses and income, making budgeting a breeze.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* MISSION & VISION SECTION */}
        <Box sx={{ mt: 10, py: 8, backgroundColor: '#101010', borderRadius: 2, textAlign: 'center' }}>
          <Typography variant="h4" css={styles.subtitle} gutterBottom>
            Our Mission & Vision
          </Typography>
          <Typography css={styles.description} paragraph>
            Our mission is to simplify financial tracking for everyone, helping you understand where your money goes and empowering you to take control of your financial future. We envision a world where individuals and businesses can effortlessly manage their finances and make informed financial decisions.
          </Typography>

          <Grid container spacing={4} justifyContent="center" sx={{ mt: 5 }}>
            <Grid item xs={12} md={5}>
              <Card css={styles.missionVisionCard}>
                <CardContent>
                  <Typography variant="h5" css={styles.subtitle} gutterBottom>
                    Mission
                  </Typography>
                  <Typography css={styles.description}>
                    To provide individuals and businesses with a powerful, intuitive platform to track expenses, set budgets, and gain insights into their financial health, making financial management easy and accessible for everyone.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={5}>
              <Card css={styles.missionVisionCard}>
                <CardContent>
                  <Typography variant="h5" css={styles.subtitle} gutterBottom>
                    Vision
                  </Typography>
                  <Typography css={styles.description}>
                    To become the go-to solution for personal and business finance management, revolutionizing the way people track their expenses and take charge of their financial future.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={5}>
              <Card css={styles.missionVisionCard}>
                <CardContent>
                  <Typography variant="h5" css={styles.subtitle} gutterBottom>
                    Why Choose Expense Tracker?
                  </Typography>
                  <Typography css={styles.description}>
                    Easy-to-Use Interface: Our app is designed to be simple, intuitive, and user-friendly, so you can start tracking your expenses immediately, with no learning curve.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default AboutUs;
