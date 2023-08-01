import { Box, Button, FormControl, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Item } from '../../types/types';
import { replaceUnderscores } from '../../utils/stringUtils';

type Props = {
  cartItems: Item[];
};

export const CartForm = (props: Props) => {
  // init states for each input field in the form
  const [state, setState] = useState({
    name: '',
    firstName: '',
    email: '',
    phone: '',
    startDate: '',
    endDate: '',
    message: '',
    address: '',
    products: '',
    totalPrice: '',
  });

  const [isMailSend, setMailSend] = useState(false);

  useEffect(() => {
    // format cartItem to be sent by email (item name, quantity and price (quantity * price)))
    const formattedCartItems = props.cartItems.map((item) => {
      return `Nom: ${replaceUnderscores(item.name)}, Quantité: ${
        item.quantity
      }, Prix: ${Math.round(item.price * item.quantity)}€`;
    });
    setState({
      ...state,
      products: formattedCartItems.join('\n'),
      totalPrice:
        Math.round(
          props.cartItems.reduce(
            (acc, item) => acc + item.price * item.quantity,
            0
          )
        ) + ' €',
    });
    setMailSend(false);
  }, [props.cartItems]);

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .send('service_1klnaud', 'template_f8aee5f', state, 'Rj3v6fTQMeKHkydqV')
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleClick = (e: MouseEvent) => {
    setMailSend(true);
    sendEmail(e);
  };

  return (
    <Box
      width='100%'
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      marginTop='1rem'
    >
      <Typography variant='h4' sx={{ marginBottom: '1rem' }}>
        Demande de devis
      </Typography>
      <FormControl>
        <Box display='flex' gap='1rem' padding='1rem'>
          <TextField
            label='Nom'
            sx={{ marginBottom: '1rem' }}
            value={state.name || ''}
            onChange={(e) => setState({ ...state, name: e.target.value })}
            required
          />
          <TextField
            label='Prénom'
            sx={{ marginBottom: '1rem' }}
            value={state.firstName || ''}
            onChange={(e) => setState({ ...state, firstName: e.target.value })}
            required
          />
        </Box>
        <Box width='100%' display='flex' gap='1rem' padding='1rem'>
          <TextField
            label='Email'
            sx={{ marginBottom: '1rem' }}
            value={state.email || ''}
            onChange={(e) => setState({ ...state, email: e.target.value })}
            required
          />
          <TextField
            label='Téléphone'
            variant='outlined'
            sx={{ marginBottom: '1rem' }}
            value={state.phone || ''}
            onChange={(e) => setState({ ...state, phone: e.target.value })}
            required
          />
        </Box>
        <Box
          width='100%'
          display='flex'
          gap='1rem'
          padding='1rem'
          justifyContent='center'
        >
          <TextField
            label='Adresse de livraison'
            variant='outlined'
            sx={{ marginBottom: '1rem' }}
            value={state.address || ''}
            onChange={(e) => setState({ ...state, address: e.target.value })}
            required
          />
        </Box>
        <Box width='100%' display='flex' gap='1rem' padding='1rem'>
          <TextField
            type='date'
            label='Date de début'
            InputLabelProps={{ shrink: true }}
            value={state.startDate || ''}
            onChange={(e) => setState({ ...state, startDate: e.target.value })}
            sx={{ marginBottom: '1rem' }}
            required
          />
          <TextField
            type='date'
            label='Date de fin'
            InputLabelProps={{ shrink: true }}
            size='medium'
            value={state.endDate || ''}
            onChange={(e) => setState({ ...state, endDate: e.target.value })}
            sx={{ marginBottom: '1rem' }}
            required
          />
        </Box>
        <TextField
          label='Message'
          multiline
          rows={4}
          variant='outlined'
          sx={{ marginBottom: '1rem', width: '100%' }}
          InputLabelProps={{ shrink: true }}
          value={state.message || ''}
          onChange={(e) => setState({ ...state, message: e.target.value })}
          placeholder='Merci de nous fournir le plus de détails possible sur votre demande.'
        />
        {!isMailSend ? (
          <Button
            variant='contained'
            sx={{ margin: '1rem' }}
            onClick={(e: any) => handleClick(e)}
            disabled={
              !state.name ||
              !state.firstName ||
              !state.email ||
              !state.phone ||
              !state.address ||
              !state.startDate ||
              !state.endDate
            }
          >
            Envoyer la demande
          </Button>
        ) : (
          <Typography>
            Merci pour votre demande ! Nous reviendrons vers vous au plus vite
          </Typography>
        )}
      </FormControl>
    </Box>
  );
};
