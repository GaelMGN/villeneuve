import { Box, Typography } from '@mui/material';

export const GeneralConditions = () => {
  return (
    <Box
      textAlign='center'
      sx={{ width: { xs: '100%', sm: '50%' } }}
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      gap='1rem'
      marginBottom='1rem'
    >
      <Typography variant='h4'>Nos Conditions générales de location</Typography>
      <Typography>
        Les tarifs sont valables à la journée ou pour le week-end ; Tout les
        prix affiché sont les prix hors taxes; La location est due même si le
        matériel n’a pas servi ; Le matériel est sous l’entière responsabilité
        du client jusqu’à la reprise ou restitution ; Le client est responsable
        du matériel dès la remise à disposition de celui-ci ; La vaisselle
        arrive propre dans des conditionnements appropriés et sera retournée
        sale, mais débarrassée des aliments dans les mêmes conditionnements ; En
        cas de perte,casse ou detérioraton, l’article manquant sera facturé 3€
        pieces (Sauf rubrique "accessoires pour la table" et "machines et
        mobilier" à prix coûtant) . Un chèque de caution sera réclamé à la
        remise du matériel et restitué après contrôle au retour du matériel, et
        encaissement de la facture. Pour éviter toute contestation, le client
        est tenu d’être présent à la remise ainsi qu’à la reprise du matériel
        pour vérification ; Toute manutention non prévue au devis initial, ou
        temps d’attente, feront l’objet d’une facture complémentaire.
      </Typography>
    </Box>
  );
};
