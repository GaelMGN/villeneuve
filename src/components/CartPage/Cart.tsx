// redux
import { useSelector } from 'react-redux';

// mui
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// components
import { DataGrid } from './DataGrid';
import { Button } from '@mui/material';

// email
import emailjs from '@emailjs/browser';

export const Cart = () => {
  const cartItems = useSelector((state: any) => state.cart.items);

  const templateParams = {
    name: 'James',
    notes: 'Check this out!',
  };

  // TODO: create a form to send the email with the cart items
  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs.send('service_1klnaud', 'template_f8aee5f', templateParams, 'Rj3v6fTQMeKHkydqV').then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

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
