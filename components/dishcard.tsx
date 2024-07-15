import { Text, StyleSheet, View, TouchableOpacity } from "react-native"

export default function DishCard() {
    return (
        <TouchableOpacity style={styles.cardBody}>
            <View style={styles.image}></View>
            <Text style={styles.dishName}>Dish name</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    cardBody: {
        padding: 8,
        borderWidth: 1,
        borderRadius: 8,
        gap: 8
    },

    image: {
        backgroundColor: "red",
        width: 200,
        height: 100,
        borderRadius: 8
    },

    dishName: {
        paddingLeft: 8,
        fontWeight: "500"
    },
});