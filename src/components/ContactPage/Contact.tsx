import { Box } from '@mui/material';
import { ContactContent } from './ContactContent';
import { Line } from '../CommonComponents/Line';
import { GeneralConditions } from './GeneralConditions';

export const Contact = () => {
  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
    >
      <ContactContent />
      <Line />
      <GeneralConditions />
      <Line />
    </Box>
  );
};
