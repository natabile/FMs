import React, { useState } from 'react';
import { TextField, Select, MenuItem, InputLabel, FormControl, Button, Box, Grid } from '@mui/material';
import { useUser } from '@clerk/clerk-react';
import { useFinancialRecords } from '../../contex/Fms_contex';

function FMSrecored() {
  const [discription, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [catagoriy, setCategory] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const { addRecord } = useFinancialRecords();
  const { user } = useUser();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecord = {
      userID: user?.id,
      date: new Date(),
      discription: discription,
      amount: parseFloat(amount),
      catagoriy: catagoriy,
      paymentMethod: paymentMethod,
    };
    addRecord(newRecord);
    setDescription("");
    setAmount("");
    setCategory("");
    setPaymentMethod("");
  };

  return (
    <Box
      sx={{
        position: 'sticky',
        bgcolor: "#121212", // Dark background
        color: 'white', // White text
        padding: 3,
        borderRadius: 2,
        boxShadow: 3,
        width: '100%',
        maxWidth: '500px',  // Add max-width for larger screens
        marginLeft: 'auto',
        marginRight: 'auto',
        transition: '0.3s',
        '&:hover': { boxShadow: 6 }, // Shadow on hover
      }}
    >
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormControl fullWidth margin="normal">
              <TextField
                value={discription}
                label="Description"
                variant="outlined"
                placeholder="Write description"
                required
                onChange={(e) => setDescription(e.target.value)}
                sx={{
                  bgcolor: "white", // Slightly transparent white background
                  borderRadius: 1,
                  fontSize: '0.875rem',
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: '#bb86fc' },
                    '&:hover fieldset': { borderColor: '#6200ea' },
                    '&.Mui-focused fieldset': { borderColor: '#bb86fc' },
                  },
                }}
              />
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth margin="normal">
              <TextField
                value={amount}
                label="Amount"
                type="number"
                variant="outlined"
                placeholder="Write amount"
                required
                onChange={(e) => setAmount(e.target.value)}
                sx={{
                  bgcolor: "white", // Slightly transparent white background
                  borderRadius: 1,
                  fontSize: '0.875rem',
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: '#bb86fc' },
                    '&:hover fieldset': { borderColor: '#6200ea' },
                    '&.Mui-focused fieldset': { borderColor: '#bb86fc' },
                  },
                }}
              />
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth margin="normal">
              <InputLabel sx={{ fontSize: '0.875rem', color: '#bb86fc' }}>Category</InputLabel>
              <Select
                onChange={(e) => setCategory(e.target.value)}
                value={catagoriy}
                required
                sx={{
                  borderRadius: 1,
                  fontSize: '0.875rem',
                  bgcolor: "white",
                  color: "black",
                  '& .MuiOutlinedInput-notchedOutline': { borderColor: '#bb86fc' },
                  '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#bb86fc' },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#bb86fc' },
                }}
              >
                <MenuItem sx={{ color: 'black' }} value="">Select category</MenuItem>
                <MenuItem sx={{ bgcolor: 'red', color: 'black' }} value="food">Food</MenuItem>
                <MenuItem sx={{ bgcolor: 'red', color: 'black' }} value="rent">Rent</MenuItem>
                <MenuItem sx={{ bgcolor: 'red', color: 'black' }} value="salaries">Salaries</MenuItem>
                <MenuItem sx={{ bgcolor: 'red', color: 'black' }} value="utility">Utility</MenuItem>
                <MenuItem sx={{ bgcolor: 'red', color: 'black' }} value="entertainment">Entertainment</MenuItem>
                <MenuItem sx={{ bgcolor: 'red', color: 'black' }} value="investement">Investment</MenuItem>
                <MenuItem sx={{ bgcolor: 'red', color: 'black' }} value="other">Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl sx={{ borderColor: 'white' }} fullWidth margin="normal">
              <InputLabel sx={{ fontSize: '0.875rem', color: '#bb86fc' }}>Payment Method</InputLabel>
              <Select
                onChange={(e) => setPaymentMethod(e.target.value)}
                value={paymentMethod}
                required
                sx={{
                  borderRadius: 1,
                  fontSize: '0.875rem',
                  bgcolor: "white",
                  color: "black",
                  '& .MuiOutlinedInput-notchedOutline': { borderColor: '#bb86fc' },
                  '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#bb86fc' },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#bb86fc' },
                }}
              >
                <MenuItem sx={{ color: 'black' }} value="">Select payment method</MenuItem>
                <MenuItem sx={{ bgcolor: 'red', color: 'black' }} value="telebirr">Telebirr</MenuItem>
                <MenuItem sx={{ bgcolor: 'red', color: 'black' }} value="cbe">CBE</MenuItem>
                <MenuItem sx={{ bgcolor: 'red', color: 'black' }} value="cash">Cash</MenuItem>
                <MenuItem sx={{ bgcolor: 'red', color: 'black' }} value="credit">Credit</MenuItem>
                <MenuItem sx={{ bgcolor: 'red', color: 'black' }} value="chapa">Chapa</MenuItem>
                <MenuItem sx={{ bgcolor: 'red', color: 'black' }} value="other">Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>


          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{
                marginTop: 2,
                borderRadius: 1,
                fontSize: '0.875rem',
                bgcolor: '#6200ea',
                '&:hover': { bgcolor: '#3700b3' },
              }}
            >
              Add
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}

export default FMSrecored;
