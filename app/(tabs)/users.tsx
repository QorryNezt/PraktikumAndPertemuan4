import { FlatList, StyleSheet, View } from "react-native";

import Card from "@/components/Card";
import { GetUsers } from "../api/GetUsers";
import { useState } from "react";

export default function User() {
    const [data, setData] = useState(null)
    GetUsers
    .then(result => {
        setData(result?.data.data)
    })
    return (
        <View style={styles.container}>
            <FlatList
            data={data}
            renderItem={({ item, index}) => (
                <Card
                id={item.id}
                sumberGambar={item.avatar}
                judul={item.first_name}
                keterangan={item.last_name}
                />
            )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
})