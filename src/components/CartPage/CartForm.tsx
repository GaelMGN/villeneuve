import { Box, Button, TextField } from '@mui/material';
import { useState } from 'react';

export const CartForm = () => {
  // init states for each input field in the form
  const [state, setState] = useState({
    name: '',
    firstName: '',
    email: '',
    phone: '',
    startDate: '',
    endDate: '',
  });

  return (
    <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
      <Box width='100%' display='flex' gap='1rem' padding='1rem'>
        <TextField label='Nom' sx={{ marginBottom: '1rem', width: '13rem' }} />
        <TextField label='Prénom' sx={{ marginBottom: '1rem', width: '13rem' }} />
      </Box>
      <Box width='100%' display='flex' gap='1rem' padding='1rem'>
        <TextField
          label='Email'
          InputLabelProps={{ shrink: true }}
          sx={{ marginBottom: '1rem', width: '13rem' }}
        />
        <TextField
          label='Téléphone'
          variant='outlined'
          sx={{ marginBottom: '1rem', width: '13rem' }}
        />
      </Box>
      <Box width='100%' display='flex' gap='1rem' padding='1rem'>
        <TextField
          type='date'
          label='Date de début'
          InputLabelProps={{ shrink: true }}
          value={state.name || ''}
          sx={{ marginBottom: '1rem', width: '13rem' }}
        />
        <TextField
          type='date'
          label='Date de fin'
          InputLabelProps={{ shrink: true }}
          sx={{ marginBottom: '1rem', width: '13rem' }}
        />
      </Box>
      <Button variant='contained' sx={{ marginBottom: '1rem' }}>
        Envoyer la demande
      </Button>
    </Box>
  );
};
