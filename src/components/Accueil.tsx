import { Box } from '@mui/material';
import backgroundImage from '../assets/background.jpg';
import logo from '../assets/logos/logo_lv2.png';
import { Description } from './Description';
import { Line } from './Line';
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
    <Box>
      <Box
        height='100vh'
        width='100%'
        display='flex'
        justifyContent='center'
        flexDirection={{ xs: 'column', md: 'row' }}
        alignItems='center'
        gap={{ xs: 0, md: '2rem' }}
        sx={{
          backgroundImage: `linear-gradient(to bottom, rgba(222,222, 222, .85), rgba(222,222, 222, .85)),  url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}>
        <Box width={{ xs: '300px', md: '500px' }}>
          <img src={logo} alt='Logo Location Vaisselle Villeneuve' width='100%' />
        </Box>
        <Box display='flex' flexDirection='column' alignItems='center'>
          <h1>LOCATION VAISSELLE</h1>
          <p>On loue, on lave</p>
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
