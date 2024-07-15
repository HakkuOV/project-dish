import { Pressable, StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

export default function MainScreen() {
  return (
    <View style={styles.screen}>
      <Link href="/auth/login" asChild>
        <Pressable style={styles.button}>
          <Text style={{ color: "#000000", textAlign: "center" }}>Login</Text>
        </Pressable>
      </Link>
      <Link href="/auth/register" asChild>
        <Pressable style={styles.button}>
          <Text style={{ color: "#000000", textAlign: "center" }}>
            Register
          </Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },

  button: {
    width: "80%",
    padding: 12,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#ffffff",
  },
});
