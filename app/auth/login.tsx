import { useState } from "react";
import { Text, StyleSheet, View, TextInput, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomModal from "@/components/modals";
import commonStyles from "@/styles/common";

export default function Login() {
  // Datos del usuario
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Estados para el modal
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const validateData = (): boolean => {
    // Quitamos los espacios en blanco al principio y al final del email
    setEmail(email.trim());

    // Validamos los datos
    if (!email || !password) {
      // Verificamos que se ingresaron todos los campos
      setModalMessage("Completa los campos");
      setModalVisible(true);
      return false;
    } else if (password.trim() !== password) {
      // Verificamos que la contraseña no contenga espacios al inicio o al final
      setModalMessage(
        "La contraseña no debe tener espacios al inicio o al final"
      );
      setModalVisible(true);
      return false;
    }
    return true;
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.loginContainer}>
        <Text style={commonStyles.appName}>Project Dish</Text>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Bienvenido !!!</Text>
          <Text style={styles.messageText}>Inicia sesion para continuar</Text>
        </View>
        <View style={styles.inputsContainer}>
          <TextInput
            style={commonStyles.textInput}
            placeholder="Correo"
            onChangeText={(text) => {
              setEmail(text);
            }}
          />
          <TextInput
            style={commonStyles.textInput}
            placeholder="Contraseña"
            secureTextEntry
            onChangeText={(text) => {
              setPassword(text);
            }}
          />
        </View>
        <Pressable style={styles.button}>
          <Text style={styles.textButton}>Iniciar Sesion</Text>
        </Pressable>
      </View>
      <CustomModal
        visible={modalVisible}
        message={modalMessage}
        onClose={() => setModalVisible(false)}
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

  loginContainer: {
    width: "80%",
    padding: 24,
    borderRadius: 16,
    borderWidth: 1,
    gap: 16,
    borderColor: "#000000",
    backgroundColor: "#ffffff",
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
