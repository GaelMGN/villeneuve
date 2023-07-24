import { Box } from '@mui/material';

interface Props {
  text: string;
}

export function Description(props: Props) {
  const { text } = props;

  // segment the text into an array of strings based on points
  const textArray = text.split('.');

  // remove the last element of the array if it is empty
  if (textArray[textArray.length - 1] === '') {
    textArray.pop();
  }

  return (
    <Box
      display='flex'
      justifyContent='center'
      width='100%'
      alignItems='center'
      flexDirection='column'
      fontSize='1.4rem'
    >
      {textArray.map((text, index) => {
        return (
          <p style={{ margin: '0.5rem' }} key={index}>
            {text}.
          </p>
        );
      })}
    </Box>
  );
}
