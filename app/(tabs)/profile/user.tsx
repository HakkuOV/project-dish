import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import UserCard from "@/components/usercard";

export default function User() {
  return (
    <SafeAreaView style={styles.screen}>
      <UserCard
        username="hakkuov"
        imageSource="https://w.wallhaven.cc/full/we/wallhaven-werdv6.png"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});