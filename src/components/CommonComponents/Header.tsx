import { Box, Button, Menu, MenuItem } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import logo from '../../assets/logos/logo_lv2.png';

export function Header() {
  const products: string[] = [
    'Assiettes',
    'Couverts',
    'Verres',
    'Desserts et café',
    'Accessoires pour la table',
    'Mobiliers et machines',
  ];

  const [anchorEl, setAnchorEl] = useState<Element | null>(null);
  const open: boolean = !!anchorEl;

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      display='flex'
      justifyContent='space-between'
      alignItems='center'
      width='100%'
      height='100px'
      position='fixed'
      top='0'
      bgcolor='white'
      borderBottom='1px solid black'
      zIndex={2}
    >
      {/* LOGO */}
      <NavLink to='/' style={{ width: '100px' }}>
        <Button sx={{ borderRadius: '15%' }}>
          <img
            src={logo}
            alt='Logo Location Vaisselle Villeneuve'
            width='100%'
            height='100%'
          />
        </Button>
      </NavLink>

      {/* RIGHT MENU*/}
      <Box
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        width='300px'
        height='100%'
        marginRight='1rem'
      >
        <NavLink to='/cart' style={{ textDecoration: 'none', color: 'black' }}>
          <Button
            sx={{
              borderRadius: '15%',
            }}
          >
            Panier
          </Button>
        </NavLink>
        <Button
          sx={{
            borderRadius: '15%',
          }}
          onClick={handleClick}
          onMouseEnter={handleClick}
        >
          Locations
        </Button>
        {/* menu to display the products */}

        <Menu
          id='basic-menu'
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{ onMouseLeave: handleClose }}
          disableScrollLock
        >
          {products.map((product, index) => (
            <NavLink
              style={{ textDecoration: 'none', color: 'black' }}
              to={`/produits/${product.split(' ')[0].toLowerCase()}`}
              key={`${product}-${index}`}
            >
              {/* remove link style */}
              <MenuItem sx={{ justifyContent: 'center' }} onClick={handleClose}>
                {product.toUpperCase()}
              </MenuItem>
            </NavLink>
          ))}
        </Menu>
        <NavLink to='/contact'>
          <Button
            sx={{
              borderRadius: '15%',
            }}
          >
            Contact
          </Button>
        </NavLink>
      </Box>
    </Box>
  );
}
