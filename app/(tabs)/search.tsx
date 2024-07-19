import { StyleSheet, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import commonStyles from "@/styles/common";

export default function Search() {
  return (
    <SafeAreaView style={[commonStyles.screen, commonStyles.centered]}>
      <TextInput
        style={[commonStyles.textInput, styles.searchInput]}
        placeholder="Receta"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  searchInput: {
    width: "80%",
  },
});
