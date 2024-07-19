import { StyleSheet } from "react-native";

const commonStyles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  centered: {
    justifyContent: "center",
    alignItems: "center"
  },

  textInput: {
    padding: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#000000",
    backgroundColor: "#ffffff",
  },
});

export default commonStyles;
