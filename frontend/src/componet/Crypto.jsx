import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Container, Typography, Select, MenuItem, Box, Paper, Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow, CircularProgress, Dialog, DialogTitle, DialogContent,
  IconButton, TextField, useTheme
} from '@mui/material';
import { MdInfo as InfoIcon } from 'react-icons/md';
import { css } from '@emotion/react';

function CryptoCurrencyData() {
  const [currency, setCurrency] = useState('usd');
  const [amount, setAmount] = useState(1); // Added state for amount to convert
  const [cryptoRates, setCryptoRates] = useState({});
  const [exchangeRates, setExchangeRates] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [infoOpen, setInfoOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const cryptocurrencies = [
    'bitcoin', 'ethereum', 'dogecoin', 'litecoin', 'ripple',
    'cardano', 'polkadot', 'solana', 'binancecoin', 'chainlink', 'stellar'
  ];

  const theme = useTheme();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      // Fetch crypto rates
      const cryptoUrl = `https://api.coingecko.com/api/v3/simple/price?ids=${cryptocurrencies.join(',')}&vs_currencies=${currency}`;
      try {
        const cryptoResponse = await axios.get(cryptoUrl);
        setCryptoRates(cryptoResponse.data);
      } catch (error) {
        setError('Error fetching crypto data. Please try again later.');
        setCryptoRates({});
      }

      // Fetch exchange rates for the selected currency
      const exchangeUrl = `https://api.exchangerate-api.com/v4/latest/${currency}`;
      try {
        const exchangeResponse = await axios.get(exchangeUrl);
        setExchangeRates(exchangeResponse.data.rates);
      } catch (error) {
        setError('Error fetching exchange rates. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currency]);

  const handleInfoOpen = () => setInfoOpen(true);
  const handleInfoClose = () => setInfoOpen(false);
  const handleSearch = (e) => setSearchQuery(e.target.value.toLowerCase());

  // Filter cryptocurrencies based on search query
  const filteredCryptocurrencies = cryptocurrencies.filter((crypto) =>
    crypto.toLowerCase().includes(searchQuery)
  );

  // Convert amount to selected currency value
  const convertAmount = (cryptoPrice) => {
    if (exchangeRates[currency]) {
      return cryptoPrice * exchangeRates[currency] * amount;
    }
    return cryptoPrice * amount;
  };

  return (
    <Container maxWidth="xl" sx={{ mt: 7, bgcolor: '#121212', p: 3 }}>
      <Paper elevation={4} sx={{
        borderRadius: 2, bgcolor: '#1e1e1e', color: '#e0e0e0', textAlign: 'left',
      }}>
        <Typography variant="h4" gutterBottom sx={{
          fontWeight: 'bold', mb: 3, color: '#f0b90b', textAlign: 'center',
        }}>
          Cryptocurrency Price Tracker
        </Typography>

        <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} alignItems="center" justifyContent="space-between" mb={3} p={2}>
          <TextField
            placeholder="Search Cryptocurrency"
            variant="outlined"
            onChange={handleSearch}
            sx={{
              bgcolor: '#333333', color: '#e0e0e0', borderRadius: 1, mb: { xs: 2, md: 0 },
              '& input': { color: '#e0e0e0' },
              '& .MuiOutlinedInput-notchedOutline': { borderColor: '#444444' },
              '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#f0b90b' },
            }}
          />

          <IconButton onClick={handleInfoOpen} sx={{
            fontSize: 28, color: '#f0b90b', bgcolor: '#333333', borderRadius: '50%',
            '&:hover': { bgcolor: '#444444' }
          }}>
            <InfoIcon />
          </IconButton>

          <Select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            variant="outlined"
            sx={{
              bgcolor: '#333333', color: '#e0e0e0', borderRadius: 1,
              '& .MuiSvgIcon-root': { color: '#f0b90b' },
              '&:hover': { bgcolor: '#444444' },
              '.MuiOutlinedInput-notchedOutline': { borderColor: '#444444' },
            }}
          >
            <MenuItem value="usd">USD</MenuItem>
            <MenuItem value="eur">EUR</MenuItem>
            <MenuItem value="gbp">GBP</MenuItem>
            <MenuItem value="jpy">JPY</MenuItem>
          </Select>

          <TextField
            type="number"
            label="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            sx={{
              bgcolor: '#333333', color: '#e0e0e0', borderRadius: 1, mb: { xs: 2, md: 0 },
              '& input': { color: '#e0e0e0' },
              '& .MuiOutlinedInput-notchedOutline': { borderColor: '#444444' },
              '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#f0b90b' },
            }}
          />
        </Box>

        <Dialog open={infoOpen} onClose={handleInfoClose} fullWidth maxWidth="sm">
          <DialogTitle sx={{ backgroundColor: '#2E2E2E', color: '#FFBB33', fontWeight: 'bold', fontSize: '1.2rem' }}>
            About Cryptocurrency
          </DialogTitle>
          <DialogContent sx={{ bgcolor: '#333333', p: 3, color: '#E0E0E0', lineHeight: 1.6 }}>
            <Typography sx={{ color: '#4CAF50' }} variant="body1" paragraph>
              History of Cryptocurrencies
            </Typography>
            <Typography variant="body1" paragraph>
              In October 2008, Nakamoto released a whitepaper titled "Bitcoin: A Peer-to-Peer Electronic Cash System". The paper outlined the concept of a decentralized, peer-to-peer digital currency, designed to allow people to send money over the internet without relying on a central authority like a bank or government. The key idea was to solve the problem of double-spending, where the same digital coin could be copied and spent multiple times. Bitcoin uses a technology called blockchain, a distributed ledger that records transactions in a secure, transparent, and immutable way.
            </Typography>
            <Typography variant="body1" paragraph>
              On January 3, 2009, Nakamoto mined the genesis block, the first block on the Bitcoin blockchain, which had a reward of 50 bitcoins. The reward is halved every 210,000 blocks, a process known as the halving. The first-ever Bitcoin transaction occurred on January 12, 2009, when Nakamoto sent 10 BTC to a computer scientist named Hal Finney.
            </Typography>
            <Typography variant="body1" paragraph>
              Cryptocurrencies like Bitcoin, Ethereum, and Dogecoin are digital or virtual currencies that use cryptography for security. They operate on decentralized networks based on blockchain technology.
            </Typography>
            <Typography sx={{ color: '#4CAF50' }} variant="body1" paragraph>
              The key features of cryptocurrencies include:
            </Typography>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li>
                <strong style={{ color: '#FF6347', fontFamily: 'Arial, sans-serif', fontSize: '1rem' }}>Decentralization:</strong> Cryptocurrencies are not controlled by any central authority, like a government or financial institution.
              </li>
              <li>
                <strong style={{ color: '#FF6347', fontFamily: 'Arial, sans-serif', fontSize: '1rem' }}>Transparency:</strong> All transactions are recorded on a public ledger known as the blockchain.
              </li>
              <li>
                <strong style={{ color: '#FF6347', fontFamily: 'Arial, sans-serif', fontSize: '1rem' }}>Security:</strong> Blockchain technology ensures that transactions are secure and tamper-resistant.
              </li>
              <li>
                <strong style={{ color: '#FF6347', fontFamily: 'Arial, sans-serif', fontSize: '1rem' }}>Global Accessibility:</strong> Cryptocurrencies can be traded and used globally without geographical boundaries.
              </li>
            </ul>
            <Typography variant="body1" paragraph>
              The prices of cryptocurrencies can be volatile, and their value is determined by various factors like market demand, adoption rate, and technological advancements.
            </Typography>
            <Typography variant="body1" paragraph>
              Always conduct thorough research and understand the risks before investing in cryptocurrencies. For up-to-date pricing, use the real-time data provided by the Crypto Price Tracker above.
            </Typography>
          </DialogContent>
        </Dialog>
        <TableContainer component={Paper} sx={{
          borderRadius: 0, overflowX: 'auto', bgcolor: '#1e1e1e', mt: 2,
        }}>
          <Table stickyHeader>
            <TableHead sx={{ bgcolor: '#333333' }}>
              <TableRow>
                <TableCell sx={{
                  color: '#f0b90b', fontWeight: 'bold', fontSize: '1.1rem'
                }}>Cryptocurrency</TableCell>
                <TableCell align="right" sx={{
                  color: '#f0b90b', fontWeight: 'bold', fontSize: '1.1rem'
                }}>Price ({currency.toUpperCase()})</TableCell>
                <TableCell align="right" sx={{
                  color: '#f0b90b', fontWeight: 'bold', fontSize: '1.1rem'
                }}>Converted Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredCryptocurrencies.map((crypto) => (
                <TableRow
                  key={crypto}
                  sx={{
                    '&:hover': { bgcolor: '#333333' },
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease',
                  }}
                >
                  <TableCell component="th" scope="row" sx={{
                    color: '#e0e0e0', fontWeight: 500, textTransform: 'capitalize'
                  }}>
                    {crypto}
                  </TableCell>
                  <TableCell align="right" sx={{ color: '#e0e0e0' }}>
                    {loading ? (
                      <CircularProgress size={20} sx={{ color: '#f0b90b' }} />
                    ) : cryptoRates[crypto] && cryptoRates[crypto][currency] ? (
                      cryptoRates[crypto][currency].toFixed(2)
                    ) : (
                      'N/A'
                    )}
                  </TableCell>
                  <TableCell align="right" sx={{ color: '#e0e0e0' }}>
                    {loading ? (
                      <CircularProgress size={20} sx={{ color: '#f0b90b' }} />
                    ) : cryptoRates[crypto] && cryptoRates[crypto][currency] ? (
                      convertAmount(cryptoRates[crypto][currency]).toFixed(2)
                    ) : (
                      'N/A'
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  );
}

export default CryptoCurrencyData;
