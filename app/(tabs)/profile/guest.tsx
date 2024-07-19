import { Text, Pressable, StyleSheet, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import commonStyles from "@/styles/common";

export default function Guest() {
  return (
    <SafeAreaView style={[commonStyles.screen, styles.screen]}>
      <View style={[commonStyles.centered, styles.appContainer]}>
        <Image
          style={styles.appIcon}
          source={require("@/assets/images/app-icon.png")}
        />
        <Text>Project Dish</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Link href="../../auth/login" asChild>
          <Pressable style={styles.button}>
            <Text style={{ color: "#000000", textAlign: "center" }}>Login</Text>
          </Pressable>
        </Link>
        <Link href="../../auth/register" asChild>
          <Pressable style={styles.button}>
            <Text style={{ color: "#000000", textAlign: "center" }}>
              Register
            </Text>
          </Pressable>
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    justifyContent: "space-around"
  },

  appContainer: {
    backgroundColor: "white"
  },

  appIcon: {
    width: 200,
    height: 200
  },

  buttonContainer: {
    gap: 16,
    width: "100%",
    alignItems: "center",
    backgroundColor: "white"
  },

  button: {
    width: "80%",
    padding: 12,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#ffffff",
  },
});
