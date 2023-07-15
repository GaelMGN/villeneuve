import { useDispatch, useSelector } from 'react-redux';
import { Item } from '../../types/types';
import { Box, TableHead, TextField, Typography } from '@mui/material';
import { replaceUnderscores } from '../../utils/stringUtils';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { setItemQuantity } from '../../reducers/cart';

export const Cart = () => {
  // import redux actions
  const dispatch = useDispatch();

  const cartItems = useSelector((state: any) => state.cart.items);

  type Props = {
    items: Item[];
  };

  const DataGrid = (props: Props) => {
    const { items } = props;
    // create a Table Row for each item in the cart with Mui Table

    const handleChange = (value: number, name: string) => {
      console.log(value);
      dispatch(setItemQuantity({ name, quantity: value }));
    };

    return (
      <Box display='flex' width='60%' sx={{ border: '1px solid black' }}>
        <Table>
          {/* Table Head */}
          <TableHead>
            <TableRow>
              <TableCell>Nom</TableCell>
              <TableCell>Quantité</TableCell>
              <TableCell>Prix unitaire</TableCell>
              <TableCell>Prix total</TableCell>
            </TableRow>
          </TableHead>
          {/* Table Body */}
          {items.map((item: Item) => {
            if (item.quantity === 0) return null;
            return (
              <TableRow sx={{ bgcolor: 'lightblue' }}>
                <TableCell>{replaceUnderscores(item.name)}</TableCell>
                <TableCell>
                  <TextField
                    type='number'
                    size='small'
                    // make the width of the input smaller
                    sx={{ width: '5rem' }}
                    value={item.quantity}
                    onChange={(e) => handleChange(Number(e.target.value), item.name)}
                  />
                </TableCell>
                <TableCell>{item.price} €</TableCell>
                <TableCell>{(item.price * item.quantity).toFixed(2)} €</TableCell>
              </TableRow>
            );
          })}
        </Table>
      </Box>
    );
  };

  return (
    <Box
      // offset by 100px from to top to avoid the header
      marginTop='calc(100px + 1rem)'
      display='flex'
      justifyContent='center'
      width='100%'
      marginBottom='1rem'>
      {cartItems.length > 0 ? (
        <DataGrid items={cartItems} />
      ) : (
        <Typography>Le panier est vide.</Typography>
      )}
    </Box>
  );
};
