// redux
import { useSelector } from 'react-redux';

// mui
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// components
import { DataGrid } from './DataGrid';

// email
import emailjs from '@emailjs/browser';

// pdf
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
  Image,
} from '@react-pdf/renderer';

// types
import { Item } from '../../types/types';

// utils
import { replaceUnderscores } from '../../utils/stringUtils';

export const Cart = () => {
  const cartItems: Item[] = useSelector((state: any) => state.cart.items);

  // TODO: create a form to send the email with the cart items

  // fill with real data
  const templateParams = {
    from_name: 'test',
    to_name: 'test',
    message: 'test',
  };

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .send(
        'service_1klnaud',
        'template_f8aee5f',
        templateParams,
        'Rj3v6fTQMeKHkydqV'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const PdfView = () => (
    <PDFViewer height='300px'>{generatePDF(cartItems)}</PDFViewer>
  );

  const generatePDF = (data: Item[]) => {
    // Crée un style pour les cellules du tableau
    const styles = StyleSheet.create({
      tableCell: {
        padding: 5,
        width: '20%',
        border: '1px solid black',
        fontSize: '16px',
      },
      tableHeaderCell: { padding: 5, fontWeight: 'bold' },
    });

    // Calcule les totaux et la TVA
    const totals = data.reduce(
      (acc, item) => {
        const totalHT = item.price * item.quantity;
        const tva = totalHT * 0.2;
        acc.totalHT += totalHT;
        acc.tva += tva;
        acc.totalTTC += totalHT + tva;
        return acc;
      },
      { totalHT: 0, tva: 0, totalTTC: 0 }
    );

    // Génère le contenu du PDF
    const content = (
      <Document>
        <Page size='A4' style={{ padding: '20px' }}>
          <Image
            source={'/logo_lv2.png'}
            style={{ width: '100px', position: 'absolute', top: 10, left: 20 }}
          />
          <Text
            style={{
              fontSize: '20px',
              marginBottom: '20px',
              marginTop: '30px',
              textAlign: 'center',
            }}
          >
            Panier créé le {new Date().toLocaleDateString()}
          </Text>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-around' }}
          >
            <Text style={styles.tableHeaderCell}>Produit</Text>
            <Text style={styles.tableHeaderCell}>Quantité</Text>
            <Text style={styles.tableHeaderCell}>Prix HT</Text>
            <Text style={styles.tableHeaderCell}>Total HT</Text>
            <Text style={styles.tableHeaderCell}>TVA</Text>
            <Text style={styles.tableHeaderCell}>Total TTC</Text>
          </View>
          {data.map((item, index) => (
            <View
              key={index}
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                gap: '1rem',
                textAlign: 'center',
              }}
            >
              <Text style={styles.tableCell}>
                {replaceUnderscores(item.name)}
              </Text>
              <Text style={styles.tableCell}>{item.quantity.toFixed(2)}</Text>
              <Text style={styles.tableCell}>{item.price.toFixed(2)}</Text>
              <Text style={styles.tableCell}>
                {(item.price * item.quantity).toFixed(2)}
              </Text>
              <Text style={styles.tableCell}>
                {(item.price * item.quantity * 0.2).toFixed(2)}
              </Text>
              <Text style={styles.tableCell}>
                {(
                  item.price * item.quantity +
                  item.price * item.quantity * 0.2
                ).toFixed(2)}
              </Text>
            </View>
          ))}
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text style={styles.tableHeaderCell}>
              TOTAL HT: {totals.totalHT.toFixed(2)} €
            </Text>
            <Text style={styles.tableHeaderCell}>
              TOTAL TVA: {totals.tva.toFixed(2)} €
            </Text>
            <Text style={styles.tableHeaderCell}>
              TOTAL TTC: {totals.totalTTC.toFixed(2)} €
            </Text>
          </View>
        </Page>
      </Document>
    );

    return content;
  };

  return (
    <Box
      // offset by 100px from to top to avoid the header
      marginTop='calc(100px + 1rem)'
      display='flex'
      justifyContent='center'
      width='100%'
      marginBottom='1rem'
    >
      {cartItems.length > 0 ? (
        <>
          <DataGrid items={cartItems} />
          {
            // if screen is too small don't show the pdf
            window.innerWidth > 600 && <PdfView />
          }
        </>
      ) : (
        <Typography>Le panier est vide.</Typography>
      )}
    </Box>
  );
};
