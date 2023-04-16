import { Box, Button } from '@mui/material';
import logo from '../assets/logos/logo_lv2.png';
import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <Box
      display='flex'
      justifyContent='space-between'
      alignItems='center'
      width='100vw'
      height='100px'
      position='fixed'
      top='0'
      bgcolor='white'
      zIndex={1}>
      <NavLink to='/' style={{ width: '100px', marginLeft: '3rem' }}>
        <Button sx={{ borderRadius: '15%' }}>
          <img src={logo} alt='Logo Location Vaisselle Villeneuve' width='100%' height='100%' />
        </Button>
      </NavLink>
      <Box
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        width='180px'
        height='100%'
        marginRight='3rem'>
        <NavLink to='/Produits'>
          <Button
            sx={{
              borderRadius: '15%',
            }}>
            Locations
          </Button>
        </NavLink>
        <NavLink to='/Contact'>
          <Button
            sx={{
              borderRadius: '15%',
            }}>
            Contact
          </Button>
        </NavLink>
      </Box>
    </Box>
  );
}
