import { useState } from "react";
import { Text, StyleSheet, View, TextInput, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomModal from "@/components/modals";
import commonStyles from "@/styles/common";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // Estados para el modal
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleDataChange = (propName: string, value: string) => {
    // Actualizar el estado de newUser salterando solamente la propiedad indicada
    setUser({
      ...user,
      [propName]: value,
    });
  };

  const validateData = () => {
    // Actualizar el estado de newUser con los valores sin espacios en blanco
    setUser({
      email: user.email.trim(),
      password: user.password,
    });

    // Validar los datos
    if (!user.email || !user.password) {
      setModalMessage("Completa los campos");
      setModalVisible(true);
      return;
    } else if (user.password.trim() !== user.password) {
      setModalMessage(
        "La contraseña no debe tener espacios al inicio o al final"
      );
      setModalVisible(true);
      return;
    }

    // Lógica para enviar datos si la validación es exitosa
    alert("Iniciando sesion");
  };

  return (
    <SafeAreaView style={[commonStyles.screen, commonStyles.centered]}>
      <View style={styles.loginContainer}>
        <Text style={styles.appName}>Project Dish</Text>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Bienvenido !!!</Text>
          <Text style={styles.messageText}>Inicia sesion para continuar</Text>
        </View>
        <View style={styles.inputsContainer}>
          <TextInput
            style={commonStyles.textInput}
            placeholder="Correo"
            onChangeText={(text) => {
              handleDataChange("email", text);
            }}
          />
          <TextInput
            style={commonStyles.textInput}
            placeholder="Contraseña"
            secureTextEntry
            onChangeText={(text) => {
              handleDataChange("password", text);
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
