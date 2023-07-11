import { Grid } from '@mui/material';
import { Card } from './Card';

type Props = {
  products: string[];
};

export function CategoryGrid(props: Props) {
  const { products } = props;

  return (
    <Grid
      container
      columnSpacing={{ xs: 1, md: 4 }}
      rowSpacing={{ xs: 2, md: 0 }}
      alignItems='center'
      justifyContent='center'
      py={{ xs: 2, md: 4 }}
      sx={{ backgroundColor: '#efefef', padding: '2rem' }}>
      {products.map((product: string, index) => (
        <Grid item xs={12} sm={8} md={2} key={product + index}>
          <Card title={product.toUpperCase()} image={`/tooltips/${product}.jpg`} navLink />
        </Grid>
      ))}
    </Grid>
  );
}
