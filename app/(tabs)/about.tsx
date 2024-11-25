import { StyleSheet, View } from "react-native";
import Profil from "@/components/Profil";

export default function About() {
    return (
        <View style={styles.container}>
            <Profil />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
})