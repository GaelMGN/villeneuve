import { Grid } from '@mui/material';
import { Card } from '../Card';
import { ProductInfo } from '../../types/types';

type Props = {
  productsInfos: ProductInfo[];
};

export const ProductGrid = (props: Props) => {
  const { productsInfos } = props;
  return (
    <Grid
      container
      justifyContent='center'
      alignItems='center'
      spacing={4}
      width={{ xs: '100%', md: '80%' }}
      paddingX={10}
      paddingY={5}>
      {productsInfos.map((productInfo, index) => (
        <Grid item sm={6} md={3} key={productInfo.name + index}>
          <Card
            title={productInfo.name}
            image={productInfo.image}
            description={productInfo.description}
            price={productInfo.price}
          />
        </Grid>
      ))}
    </Grid>
  );
};
