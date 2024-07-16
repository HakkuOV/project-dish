import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import commonStyles from "@/styles/common";
import UserCard from "@/components/usercard";

export default function MainScreen() {
  return (
    <SafeAreaView style={commonStyles.screen}>
      <UserCard
        username="hakkuov"
        imageSource="https://w.wallhaven.cc/full/we/wallhaven-werdv6.png"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
