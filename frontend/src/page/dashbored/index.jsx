import React, { useMemo } from 'react';
import { useUser } from '@clerk/clerk-react';
import FinancialRecordList from './fms-list';
import FMSrecored from './fms-form-recored';
import { useFinancialRecords } from '../../contex/Fms_contex';
import { Box, Typography } from '@mui/material';
import Footer from '../../componet/Footer';

function Dashbored() {
  const { user } = useUser();
  const { records } = useFinancialRecords();

  const TotalMonthly = useMemo(() => {
    let totalamount = 0;
    records.forEach((record) => {
      totalamount += record.amount;
    });
    return totalamount;
  }, [records]);

  // Determine the background color based on the value
  const getCircleColor = (amount) => {
    if (amount < 0) return 'red';
    if (amount > 1000) return 'green';
    return 'yellow';
  };

  return (
    <Box sx={{ mt: 10 }}>
      <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', color: 'primary.main', mb: 2 }}>
        Welcome, {user?.firstName || 'Guest'} to FMS
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'column', md: 'row' },  // Column for small screens, row for medium and up
          justifyContent: { md: 'space-between' },                    // Apply space-between on medium and larger screens
          marginLeft: { xs: 2, md: '16px' },                          // Margin for small screens vs large
          marginRight: { xs: 2, md: '16px' },                         // Adjust margin right similarly
          gap: { xs: 2, md: '24px' },                                 // Smaller gap on small screens, larger on medium and up
        }}
      >
        <FMSrecored />
        <FinancialRecordList />
      </Box>


      {/* Fixed Total Amount */}
      <Box
        sx={{
          position: 'fixed',       // Keeps it fixed on the screen
          top: '100px',             // Adjust position as needed
          right: '20px',           // Adjust position as needed
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          backgroundColor: getCircleColor(TotalMonthly),
          boxShadow: 2,
          zIndex: 1000,            // Keeps it on top of other elements
        }}
      >
        <Typography variant="h6" sx={{ color: 'white' }}>
          {TotalMonthly} birr
        </Typography>
      </Box>

      <Footer />
    </Box>
  );
}

export default Dashbored;
