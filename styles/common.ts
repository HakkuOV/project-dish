import { StyleSheet } from "react-native";

const commonStyles = StyleSheet.create({
  centered: {
    justifyContent: "center",
    alignItems: "center"
  },

  appName: {
    fontSize: 22,
    fontWeight: "500",
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
