import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import commonStyles from "@/styles/common";

export default function Profile() {
  return (
    <SafeAreaView style={[commonStyles.screen, styles.screen]}>
      <Link href="../auth/login" asChild>
        <Pressable style={styles.button}>
          <Text style={{ color: "#000000", textAlign: "center" }}>Login</Text>
        </Pressable>
      </Link>
      <Link href="../auth/register" asChild>
        <Pressable style={styles.button}>
          <Text style={{ color: "#000000", textAlign: "center" }}>
            Register
          </Text>
        </Pressable>
      </Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
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
