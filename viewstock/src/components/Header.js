import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import 'animate.css';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { InputBase, Stack, alpha } from '@mui/material';
import {styled} from '@mui/material';
import { useState, useEffect } from 'react';

const pages = ['Products', 'Community', 'Market','News','Brokers','More'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Header() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
       fetch('http://api.marketstack.com/v1/eod?access_key=b9eb4dc263d6aefe5a4c62e7c14c1926&symbols=AAPL')
          .then((response) => response.json())
          .then((data) => {
             console.log(data);
             setPosts(data);
          })
          .catch((err) => {
             console.log(err.message);
          });
    }, []);
 
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: 30,
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: 'white',
    },
    marginLeft: 0,
    width: '30%',
    height: 70,
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: '30%',
     
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
      padding: theme.spacing(3, 3, 0, 3),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '30ch',
        '&:focus': {
          width: '30ch',
        },
      },
    },
  }));

  return (
    
      <Container maxWidth="100%">
        <Toolbar disableGutters>
            
          
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 15,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 'Bold',
              letterSpacing: '.3rem',
              color: 'white',
              textDecoration: 'none',
              
            }}
          >
            Master Trading
          </Typography>
       
        <Box>
          <Box sx={{ flexGrow: 11, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
         
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            Master Trading
          </Typography>
          <Box sx={{ flexGrow: 1,mr: 28, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', fontFamily:'monospace' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          </Box>
       
          <Box sx={{ flexGrow: 0.1 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 3, color: 'white', display: 'flex' }}>
                <PersonOutlineOutlinedIcon />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Button variant="contained" sx={{borderRadius: 10}}>Get Started</Button>
        </Toolbar>
        <div class="animate__animated animate__backInUp">
        <Typography variant='h3'  fontFamily={'monospace'} fontWeight={'Bold'} color={'white'} align='left'>Buy</Typography>
        </div>
        <div class="animate__animated animate__backInUp">
        <Typography variant='h3' fontFamily={'monospace'} fontWeight={'Bold'} color={'white'} align='left'>What you know.</Typography>
        </div>
        <br />
        <Typography variant='h6' align='left' color={'white'}>Become a Student of the Markets</Typography>
        <br />
        <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Start your expertise here"
              inputProps={{ 'aria-label': 'Search' }}
            />
          </Search>
          <br />
          <br />
          <br />
          <Box display={'flex'} alignSelf={'flex-start'} margin={3}>
          <Button variant="outlined" sx={{borderRadius: 10, marginRight: 3}}>BTCUSD</Button>
          <Button variant="outlined" sx={{borderRadius: 10, marginRight: 3}}>NIFY</Button>
          <Button variant="outlined" sx={{borderRadius: 10}}>BANKNIFTY</Button>
          </Box>
      </Container>
    
  );
}
export default Header;