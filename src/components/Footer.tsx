import { Box, Grid } from '@mui/material';

export function Footer() {
  return (
    <Box display='flex' bgcolor='#777'>
      <Grid
        container
        bgcolor='#777'
        alignItems='center'
        width='100%'
        height='300px'
        color='white'
        fontWeight='bold'
        columns={2}>
        <Grid item xs={12} sm={6}>
          <p>Adresse</p>
        </Grid>
        <Grid item xs={12} sm={6}>
          <p>Contacts</p>
        </Grid>
      </Grid>
    </Box>
  );
}
