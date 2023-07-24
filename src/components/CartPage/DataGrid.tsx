// redux
import { useDispatch } from 'react-redux';
import { setItemQuantity } from '../../reducers/cart';
import { clearItemFromCart } from '../../reducers/cart';

// types
import { Item } from '../../types/types';

// MUI imports
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

// utils
import { replaceUnderscores } from '../../utils/stringUtils';

type Props = {
  items: Item[];
};

export const DataGrid = (props: Props) => {
  const { items } = props;

  const dispatch = useDispatch();

  const handleChange = (value: number, name: string) => {
    dispatch(setItemQuantity({ name, quantity: value }));
  };

  const isSmartphone = window.innerWidth < 600;

  return (
    <Box
      display='flex'
      width={{ sm: '100%', md: '60%' }}
      sx={{ border: '1px solid black' }}
    >
      <Table>
        {/* Table Head */}
        <TableHead>
          <TableRow>
            <TableCell>Nom</TableCell>
            <TableCell>Quantité</TableCell>
            {!isSmartphone && <TableCell>Prix unitaire HT</TableCell>}
            {!isSmartphone && <TableCell>Prix total HT</TableCell>}
            {!isSmartphone && <TableCell>TVA</TableCell>}
            <TableCell>Prix total TTC</TableCell>
            <TableCell>Supprimer</TableCell>
          </TableRow>
        </TableHead>
        {/* Table Body */}
        {items.map((item: Item) => {
          const priceTimesQuantity = Number(
            (item.price * item.quantity).toFixed(2)
          );
          return (
            <TableRow sx={{ bgcolor: 'lightblue' }}>
              <TableCell>{replaceUnderscores(item.name)}</TableCell>
              <TableCell>
                <TextField
                  type='number'
                  size='small'
                  // make the width of the input smaller
                  sx={{ width: '5rem' }}
                  inputProps={{ min: 1 }}
                  value={item.quantity}
                  onChange={(e) =>
                    handleChange(Number(e.target.value), item.name)
                  }
                />
              </TableCell>
              {!isSmartphone && <TableCell>{item.price} €</TableCell>}
              {!isSmartphone && <TableCell>{priceTimesQuantity} €</TableCell>}
              {!isSmartphone && (
                <TableCell>
                  {((priceTimesQuantity / 100) * 20).toFixed(2)} €
                </TableCell>
              )}
              <TableCell>
                {((priceTimesQuantity / 100) * 120).toFixed(2)} €
              </TableCell>
              <TableCell>
                <Button
                  variant='contained'
                  color='error'
                  onClick={() => dispatch(clearItemFromCart(item.name))}
                >
                  X
                </Button>
              </TableCell>
            </TableRow>
          );
        })}
      </Table>
    </Box>
  );
};
