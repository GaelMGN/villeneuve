import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { Item, ProductInfo } from '../../types/types';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../reducers/cart';

type Props = {
  product: ProductInfo;
};

export const ProductShoppingCard = (props: Props) => {
  const { product } = props;

  // import redux actions
  const dispatch = useDispatch();
  const cartItems = useSelector((state: any) => state.cart.items);

  //   states
  const [quantity, setQuantity] = useState<number>();
  const [isJustAdded, setJustAdded] = useState<boolean>(false);

  // useEffect to update the quantity of the product based on the cart
  useEffect(() => {
    const item = cartItems.find((item: Item) => item.name === product.name);
    if (item) setQuantity(item.quantity);
  }, [cartItems, product.name]);

  // DTO function
  const addToCart = (product: ProductInfo, quantity: number) => {
    const items: Item = {
      name: product.name,
      price: product.price,
      quantity,
    };
    if (quantity > 0) dispatch(addItemToCart(items));
  };

  /**
   * Handle the click on the button to add the product to the shopping cart
   * @param {ProductInfo} product
   * @param {number} quantity
   */
  const handleAddToCart = (product: ProductInfo, quantity?: number) => {
    if (quantity === undefined) return;
    addToCart(product, quantity);
    setJustAdded(true);
    setTimeout(() => {
      setJustAdded(false);
    }, 1000);
  };

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
          label='Quantité'
          type='number'
          value={quantity}
          required
          onChange={(e) => setQuantity(Number(e.target.value))}
          // min value is 0
          inputProps={{ min: 0 }}
          InputLabelProps={{ shrink: true }}
        />
        {/* callback to add the product to the shopping cart */}
        <Button
          onClick={() => handleAddToCart(product, quantity)}
          disabled={isJustAdded}
          style={{
            // fade in 1 sec after the product is added to the cart
            transition: '0.3s',
            color: isJustAdded ? 'lightGreen' : undefined,
          }}
        >
          {isJustAdded ? 'Ajouté !' : 'Ajouter au panier'}
        </Button>
      </Box>
    </>
  );
};
