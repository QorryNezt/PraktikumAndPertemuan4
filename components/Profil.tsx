import { StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";

const profileImage = require('@/assets/images/snappy.png');

export default function Profil() {
    return (
        <View style={styles.profil}>
            <Image source={profileImage} style={styles.gambarProfil} />
            <View style={styles.teksContainer}>
                <Text style={styles.teksTebal}>Sanppy Professor</Text>
                <Text>always@email.com</Text>
                <Text>+62666777888</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    gambarProfil: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginEnd: 12,
    },
    profil: {
        flexDirection: 'row',
        alignItems:'center',
        padding: 6,
        height: 72,
    },
    teksTebal: {
        fontWeight: "bold",
        fontSize: 18,
    },
    teksContainer: {
        justifyContent: "space-around",
        flex: 1,
        height: "100%"
    }
})