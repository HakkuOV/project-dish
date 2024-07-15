import { Text, StyleSheet, View, TextInput, Pressable } from "react-native";

export default function Login() {
  return (
    <View style={styles.screen}>
      <View style={styles.loginContainer}>
        <Text style={styles.appName}>Project Dish</Text>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Bienvenido !!!</Text>
          <Text style={styles.messageText}>Inicia sesion para continuar</Text>
        </View>
        <View style={styles.inputsContainer}>
          <TextInput style={styles.textInput} placeholder="Correo" />
          <TextInput
            style={styles.textInput}
            placeholder="Contraseña"
            secureTextEntry
          />
        </View>
        <Pressable style={styles.button}>
          <Text style={styles.textButton}>Iniciar Sesion</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },

  loginContainer: {
    width: "80%",
    padding: 24,
    borderRadius: 16,
    borderWidth: 1,
    gap: 16,
    borderColor: "#000000",
    backgroundColor: "#ffffff",
  },

  appName: {
    fontSize: 22,
    fontWeight: "500",
  },

  welcomeContainer: {
    padding: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#000000",
    backgroundColor: "#ffffff",
  },

  welcomeText: {
    fontSize: 18,
  },

  messageText: {
    fontSize: 12,
  },

  inputsContainer: {
    gap: 8,
  },

  textInput: {
    padding: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#000000",
    backgroundColor: "#ffffff",
  },

  button: {
    padding: 8,
    borderRadius: 8,
    alignItems: "center",
    backgroundColor: "#000000",
  },

  textButton: {
    color: "#ffffff",
    fontWeight: "600",
  },
});
