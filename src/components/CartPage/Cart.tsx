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
import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';
import { Item } from '../../types/types';
import { replaceUnderscores } from '../../utils/stringUtils';

export const Cart = () => {
  const cartItems: Item[] = useSelector((state: any) => state.cart.items);

  const templateParams = {
    name: 'James',
    notes: 'Check this out!',
  };

  // TODO: create a form to send the email with the cart items
  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs.send('service_1klnaud', 'template_f8aee5f', templateParams, 'Rj3v6fTQMeKHkydqV').then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  const PdfView = () => <PDFViewer>{generatePDF(cartItems)}</PDFViewer>;

  const generatePDF = (data: Item[]) => {
    // Crée un style pour les cellules du tableau
    const styles = StyleSheet.create({
      tableCell: { padding: 5, width: '20%', border: '1px solid black' },
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
        <Page size='A4'>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
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
              }}>
              <Text style={styles.tableCell}>{replaceUnderscores(item.name)}</Text>
              <Text style={styles.tableCell}>{item.quantity.toFixed(2)}</Text>
              <Text style={styles.tableCell}>{item.price.toFixed(2)}</Text>
              <Text style={styles.tableCell}>{(item.price * item.quantity).toFixed(2)}</Text>
              <Text style={styles.tableCell}>{(item.price * item.quantity * 0.2).toFixed(2)}</Text>
              <Text style={styles.tableCell}>
                {(item.price * item.quantity + item.price * item.quantity * 0.2).toFixed(2)}
              </Text>
            </View>
          ))}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text style={styles.tableHeaderCell}>TOTAL HT: {totals.totalHT} €</Text>
            <Text style={styles.tableHeaderCell}>TOTAL TVA: {totals.tva} €</Text>
            <Text style={styles.tableHeaderCell}>TOTAL TTC: {totals.totalTTC} €</Text>
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
      marginBottom='1rem'>
      {cartItems.length > 0 ? (
        <>
          <DataGrid items={cartItems} />
          <PdfView />
        </>
      ) : (
        <Typography>Le panier est vide.</Typography>
      )}
    </Box>
  );
};
