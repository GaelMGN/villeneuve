import { Box } from '@mui/material';
import { Params, useParams } from 'react-router-dom';
import { ProductBanner } from './ProductBanner';
import { useEffect, useState } from 'react';
import { ProductGrid } from './ProductGrid';

export function Produits() {
  const { product } = useParams<Params>();
  if (!product) return null;

  const [thumbnails, setThumbnails] = useState<string[]>([]);

  useEffect(() => {
    // get all the images from public /products /{product} folder
    const images = Object.keys(import.meta.glob(`../../assets/*/*.{jpg,png}`));
    // filter the images to get only the ones that match the product
    const productThumbnails = images.filter((image) => image.includes(product));
    // replace ../assets/ with /products/ in the path
    productThumbnails.forEach((thumbnail, index) => {
      productThumbnails[index] = thumbnail.replace('../assets/', '/products/');
    });
    // set the state
    setThumbnails(productThumbnails);
  }, [product]);

  return (
    <Box
      width='100%'
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'>
      <ProductBanner product={product} />
      <ProductGrid thumbnails={thumbnails} product={product} />;
    </Box>
  );
}
