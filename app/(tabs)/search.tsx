import { StyleSheet, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import commonStyles from "@/styles/common";

export default function Search() {
  return (
    <SafeAreaView style={commonStyles.screen}>
      <TextInput style={[commonStyles.textInput, styles.searchInput]} placeholder="Receta" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    searchInput: {
        width: "80%"
    }
});
