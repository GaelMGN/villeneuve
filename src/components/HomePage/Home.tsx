import { Box, Typography } from '@mui/material';
import backgroundImage from '../../assets/background.jpg';
import logo from '../../assets/logos/logo_lv2.png';
import { Description } from './Description';
import { Line } from '../CommonComponents/Line';
import { CategoryGrid } from './CategoryGrid';

export function Accueil() {
  const products = [
    'assiettes',
    'couverts',
    'verres',
    'desserts_et_cafe',
    'accessoires_pour_la_table',
    'mobiliers_et_machines',
  ];

  return (
    <Box width='100%'>
      <Box
        height='100vh'
        display='flex'
        justifyContent='center'
        flexDirection={{ xs: 'column', md: 'row' }}
        alignItems='center'
        gap={'2rem'}
        paddingTop={{ xs: 0, md: '4rem' }}
        sx={{
          backgroundImage: `linear-gradient(to bottom, rgba(222,222, 222, .85), rgba(222,222, 222, .85)),  url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <Box width={{ xs: '300px', md: '500px', lg: '700px' }}>
          <img
            src={logo}
            alt='Logo Location Vaisselle Villeneuve'
            width='100%'
          />
        </Box>
        <Box
          display='flex'
          flexDirection='column'
          alignItems='center'
          gap='1rem'
          justifyContent='center'
        >
          <Typography variant='h2'>LOCATION</Typography>
          <Typography variant='h2'>VAISSELLE</Typography>
          <Typography variant='h4'>On loue, on lave</Typography>
        </Box>
      </Box>
      <Line />
      <Description
        text='Pour vos Anniversaires, repas, fête ou tout autres événements, LV2 vous propose un large choix de vaisselles et matériels.
Installé à Villeneuve, nous vous proposons un service convivial de qualité pour que votre occasion soit à votre image.
Nous restons joignables pour tout renseignements et réservations.'
      />
      <Line />
      <CategoryGrid products={products} />
    </Box>
  );
}
