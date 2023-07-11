import { Grid } from '@mui/material';
import { Card } from '../Card';

type Props = {
  thumbnails: string[];
  product: string;
};

export const ProductGrid = (props: Props) => {
  const { thumbnails, product } = props;
  return (
    <Grid
      container
      justifyContent='center'
      alignItems='center'
      spacing={4}
      width={{ xs: '100%', md: '80%' }}
      paddingX={10}
      paddingY={5}>
      {thumbnails.map((imageUrl: string, index) => (
        <Grid item sm={6} md={3} key={product + index}>
          <Card title={product.toUpperCase()} image={imageUrl} />
        </Grid>
      ))}
    </Grid>
  );
};
