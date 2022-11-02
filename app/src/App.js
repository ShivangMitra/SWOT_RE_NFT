import React from 'react'
import './App.css'
import img from './nft.jpg'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CssBaseline from '@mui/material/CssBaseline';
import Modal from '@mui/material/Modal';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import Container from '@mui/material/Container';
import Slide from '@mui/material/Slide';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import LaunchIcon from '@mui/icons-material/Launch';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AppsIcon from '@mui/icons-material/Apps';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { styled, alpha } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function App() {

  const [age, setAge] = React.useState('');
  const [page, setPage] = React.useState('market');

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="App">
        <ThemeProvider theme={darkTheme}>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
      <div className='Navbar' >
          <Box sx={{ flexGrow: 1 }}>
          <AppBar position="sticky" sx={{ height: '12vh', background: '#2e0b3e4a', justifyContent: 'center' }}>
            <Toolbar>
              {/* <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton> */}
              <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontSize: '3rem', fontFamily: 'VT323' }}>
                {'{reNFT}'}
              </Typography>
              <Button color="inherit" sx={{ fontSize: '1.2rem' }} onClick={()=>{setPage('market')}} >MARKET</Button>
              <Button color="inherit" sx={{ fontSize: '1.2rem' }} onClick={()=>{setPage('collections')}} >COLLECTIONS</Button>
              {/* <Button color="inherit" sx={{ fontSize: '1.2rem' }} >DOCS<LaunchIcon/></Button> */}
              <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
              <Button color="inherit" sx={{ fontSize: '1.2rem' }} >CONNECT WALLET<AccountBalanceWalletIcon/></Button>
            </Toolbar>
          </AppBar>
        </Box>


      </div>
      {
        page==='market'
        ?
        (
          <div className='Page-header' style={{ fontFamily: 'VT323' }} >
            MARKET<StorefrontIcon sx={{ width: '90px', height: '60px' }}/>
          </div>
        )
        :
        (
          <div className='Page-header' style={{ fontFamily: 'VT323' }} >
            COLLECTIONS<AppsIcon sx={{ width: '90px', height: '60px' }}/>
          </div>
        )
      }
      
      <div className='fake-cards-container' >
            <div className='cards-container' >
            <div className='filters' >
              {
                page==='market'
                ?
                (
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Availability</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                )
                :
                null
              }
              <Box sx={ page==='collections' ? { minWidth: 120, width: '80%' } : {minWidth: 120}}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
            {[...new Array(13)].map(() => (
              <Card onClick={handleOpen} sx={{ maxWidth: 345, marginBottom: '2%', background: 'rgba(0,0,0,0.8)',backdropFilter: 'saturate(180%) blur(10px)' }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={img}
                  alt="green iguana"
                  sx={{ height: '300px' }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Ape
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            )
            )}
              
            </div>
      </div>
        </ThemeProvider>
    </div>
  );
}

export default App;
