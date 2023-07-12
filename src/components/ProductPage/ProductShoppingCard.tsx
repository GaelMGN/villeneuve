import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { ProductInfo } from '../../types/types';
import { useState } from 'react';

type Props = {
  product: ProductInfo;
};

export const ProductShoppingCard = (props: Props) => {
  const { product } = props;

  //   states
  const [quantity, setQuantity] = useState<number>(0);

  return (
    <>
      <Box
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        width='100%'
        boxShadow={3}
        borderRadius='1rem'
        bgcolor='white'
        overflow='hidden'
        // translate the card up when the mouse is over it with 0.3s of animation
        onMouseOver={(e) => {
          e.currentTarget.style.transition = '0.3s';
          e.currentTarget.style.transform = 'translateY(-5px)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transition = '0.3s';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        <img
          src={product.image}
          alt={product.name}
          width='100%'
          height='100%'
          style={{ borderRadius: '1rem 1rem 0 0' }}
        />
        <Grid
          container
          alignItems='center'
          textAlign='center'
          gap='1rem'
          direction='column'
          justifyContent='space-around'
          height='100%'
          paddingBottom='0.5rem'
        >
          <Typography>{product.name.replaceAll('_', ' ')}</Typography>
          <Typography style={{ fontWeight: 'bold' }}>
            Prix : {product.price}€
          </Typography>
          <Typography>{product.description || "Prix à l'unité"}</Typography>
        </Grid>
        {/* input to add product to the cart */}
        <TextField
          type='number'
          label='Quantité'
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
        {/* callback to add the product to the shopping cart */}
        <Button>Ajouter au panier</Button>
      </Box>
    </>
  );
};
