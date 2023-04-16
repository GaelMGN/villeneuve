import { Box } from '@mui/material';

type Props = {
  title: string;
  image: string;
};

export function Card(props: Props) {
  const { title, image } = props;

  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      width='100%'
      height='100%'
      boxShadow={3}
      borderRadius='1rem'
      bgcolor='white'
      // translate the card up when the mouse is over it with 0.3s of animation
      onMouseOver={(e) => {
        e.currentTarget.style.transition = '0.3s';
        e.currentTarget.style.transform = 'translateY(-5px)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transition = '0.3s';
        e.currentTarget.style.transform = 'translateY(0)';
      }}>
      <img
        src={image}
        alt={title}
        width='100%'
        height='100%'
        style={{ borderRadius: '1rem 1rem 0 0' }}
      />
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        textAlign='center'
        width='100%'
        flexWrap={{ xs: 'wrap', md: 'nowrap' }}
        height={{ xs: '100%', md: '100px' }}
        padding='1rem'
        borderRadius='1rem'
        bgcolor='white'
        fontSize={{ xs: '40px', md: '18px', lg: '30px' }}>
        <p>{title.replaceAll('_', ' ')}</p>
      </Box>
    </Box>
  );
}
