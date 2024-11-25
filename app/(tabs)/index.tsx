import { FlatList, StyleSheet, View } from "react-native";
import Card from "@/components/Card";

const LocalImage = require('@/assets/images/08.jpeg');
const datatCard = require('@/assets/dataCard.json')

export default function Index() {
  return (
    <View style={styles.container}>
      <FlatList data={dataCard.posts}
      renderItem={({item, index}) => (
        <Card
        id={item.id}
        sumberGambar={item.sumberGambar}
        judul={item.judul}
        keterangan={item.keterangan}
        />
      )}></FlatList>
    </View>
  );
}
let dataCard: {
  "error": false,
  "message": "Berhasil ambil data",
  "posts": [
    {
      "id": 1,
      "sumberGambar": "https://mirzayogy.github.io/assets/image/08.jpeg",
      "judul": "Luar Masjid Nabawi",
      "keterangan": "Pemandangan hotel di luar Masjid Nabawi"
    },
    {
      "id": 2,
      "sumberGambar":"https://mirzayogy.github.io/assets/image/02.jpeg",
      "judul": "Senja Masjid Nabawi",
      "keterangan": "Masjid Nabawi ketika senja melanda"
    },
    {
      "id": 3,
      "sumberGambar":"https://mirzayogy.github.io/assets/image/09.jpeg",
      "judul": "Masjid Nabawi Pagi",
      "keterangan":"Pemandangan Masjid Nabawi di pagi hari"
    },
    {
      "id": 4,
      "sumberGambar":"https://mirzayogy.github.io/assets/image/03.jpeg",
      "judul": "Payung Senja",
      "keterangan":"Payung Masjid Nabawi yang sedang tertutup"
    }
  ]
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