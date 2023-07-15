// redux
import { useSelector } from 'react-redux';

// mui
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// components
import { DataGrid } from './DataGrid';

export const Cart = () => {
  const cartItems = useSelector((state: any) => state.cart.items);

  return (
    <Box
      // offset by 100px from to top to avoid the header
      marginTop='calc(100px + 1rem)'
      display='flex'
      justifyContent='center'
      width='100%'
      marginBottom='1rem'>
      {cartItems.length > 0 ? (
        <DataGrid items={cartItems} />
      ) : (
        <Typography>Le panier est vide.</Typography>
      )}
    </Box>
  );
};
