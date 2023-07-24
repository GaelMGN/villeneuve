import { Box, Typography } from '@mui/material';
import backgroundImage from '../../assets/background.jpg';

type Props = {
  product?: string;
};

export const ProductBanner = (props: Props) => {
  const { product } = props;

  return (
    <Box
      height='300px'
      width='100%'
      display='flex'
      paddingTop='100px'
      justifyContent='center'
      flexDirection={{ xs: 'column', md: 'row' }}
      alignItems='center'
      gap={{ xs: 0, md: '2rem' }}
      sx={{
        backgroundImage: `linear-gradient(to bottom, rgb(41, 69, 151, 0.5), rgb(41, 69, 151, 0.5)),  url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <Typography
        fontSize='4rem'
        color='white'
        textTransform='uppercase'
        fontWeight='bold'
        letterSpacing='normal'
      >
        {product?.toUpperCase()}
      </Typography>
    </Box>
  );
};
