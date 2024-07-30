import { StyleSheet, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import commonStyles from "@/styles/common";

export default function Search() {
  return (
    <SafeAreaView style={styles.screen}>
      <TextInput
        style={[commonStyles.textInput, styles.searchInput]}
        placeholder="Receta"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  searchInput: {
    width: "80%",
  },
});
