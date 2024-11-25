import { StyleSheet, Text, View } from "react-native";
import Card from "@/components/Card";

const LocalImage = require('@/assets/images/08.jpeg');

export default function Index() {
  return (
    <View style={styles.container}>
      <Card />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  image:{
    width: 100,
    height: 70,
    borderRadius: 5,
    marginEnd: 24,
  },
  panel: {
    backgroundColor: '#25292e',
    padding: 24,
    borderRadius: 16,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',

  },
  text: {
    fontSize: 20,
    color: '#000',
  },
  textWhite: {
    fontSize: 20,
    color: '#fff',
  },
  textWhiteKecil: {
    fontSize: 14,
    color: '#fff',
  },
  lingkaran: {
    backgroundColor: 'teal',
    width: 70,
    height: 70,
    borderRadius: 35,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  }
});