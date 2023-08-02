import { Box, Grid } from '@mui/material';

export function Footer() {
  return (
    <Box display='flex' width='100%' justifyContent='center' alignItems='center' bgcolor='#777'>
      <Grid
        container
        width={{ xs: '100%', md: '40%' }}
        justifyContent='center'
        columnGap={{ xs: '2rem', md: '0' }}
        height='250px'
        color='white'
        fontWeight='bold'
        // paddingY='60px'
        gridTemplateColumns={{ xs: '1fr 1fr', md: '1fr 1fr' }}
        gridTemplateRows={{ xs: '1fr 1fr', md: '1fr 1fr' }}>
        <Grid item xs={4} sm={6} justifyContent='center' alignItems='center' display='flex'>
          <p>Adresse</p>
        </Grid>
        <Grid item xs={6} sm={6} justifyContent='center' alignItems='center' display='flex'>
          <p>Contacts</p>
        </Grid>
        <Grid item xs={4} sm={6} justifyContent='center' alignItems='flex-start' display='flex'>
          <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column'>
            <span>LV2 SAS</span>
            <span>71 ZA de Vaize,</span>
            <span>01480 Villeneuve</span>
          </Box>
        </Grid>
        <Grid item xs={6} sm={6} justifyContent='center' alignItems='flex-start' display='flex'>
          <Box
            display='flex'
            justifyContent='center'
            alignItems='center'
            flexDirection='column'
            flexWrap='wrap'>
            <span>Julie 06 45 84 64 10</span>
            <span>Franck 06 74 42 10 87</span>
            <span>locvaisselle.villeneuve</span>
            <span>@gmail.com</span>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
