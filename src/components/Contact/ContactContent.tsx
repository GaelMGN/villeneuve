import { Box, Typography } from '@mui/material';

export function ContactContent() {
  const map = (
    <Box display='flex' justifyContent='center' gap='1rem' alignItems='center'>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2770.560847615986!2d4.829425311833962!3d46.01995699606592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4995bda25fc49%3A0xee479cff8e1d176!2slocation%20vaisselle%20villeneuve%2001!5e0!3m2!1sfr!2sfr!4v1690971909644!5m2!1sfr!2sfr'
        width='400'
        height='300'
        style={{ border: 0 }}
        loading='lazy'
      ></iframe>
    </Box>
  );

  const contactText = (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      textAlign='center'
      gap='1rem'
      width={{ xs: '100%', sm: '400px' }}
    >
      <Typography>✉️ Contactez-nous !</Typography>
      <Typography>Téléphone: Julie 06 45 84 64 10</Typography>
      <Typography>Franck 06 74 42 10 87</Typography>
      <Typography>Email: locvaisselle.villeneuve@gmail.com</Typography>
      <Typography>
        LV2 SAS 71 Zone Artisanale de Vaize 01480 Villeneuve
      </Typography>
      <Typography>En face de Auto Contrôle Villeneuvois</Typography>
    </Box>
  );
  return (
    <Box
      width='100%'
      display='flex'
      gap='1rem'
      flexDirection={{ xs: 'column', sm: 'row' }}
      justifyContent='center'
      marginTop='calc(100px + 1rem)'
    >
      {map}
      {contactText}
    </Box>
  );
}
