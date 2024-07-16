import { useEffect, useState } from "react";
import { Text, StyleSheet, View, TextInput, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import commonStyles from "@/styles/common";
import CustomModal from "@/components/modals";

export default function Rgister() {
  const [newUser, setNewUser] = useState({
    username: "" ,
    email: "",
    password: "",
    passwordConfirm: "",
  });
  // Estados para el modal
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleDataChange = (propName:string, value:string) => {
    // Actualizar el estado de newUser salterando solamente la propiedad indicada
    setNewUser({
      ...newUser,
      [propName]: value,
    });
  };

  const validateData = () => {
    // Actualizar el estado de newUser con los valores sin espacios en blanco
    setNewUser({
      username: newUser.username.trim(),
      email: newUser.email.trim(),
      password: newUser.password,
      passwordConfirm: newUser.passwordConfirm,
    });

    // Validar los datos
    if (
      !newUser.username ||
      !newUser.email ||
      !newUser.password ||
      !newUser.passwordConfirm
    ) {
      setModalMessage("Completa los campos");
      setModalVisible(true);
      return;
    } else if (
      newUser.password.trim() !== newUser.password ||
      newUser.passwordConfirm.trim() !== newUser.passwordConfirm
    ) {
      setModalMessage(
        "La contraseña no debe tener espacios al inicio o al final"
      );
      setModalVisible(true);
      return;
    } else if (newUser.password !== newUser.passwordConfirm) {
      setModalMessage("La contraseña no coincide");
      setModalVisible(true);
      return;
    }

    // Lógica para enviar datos si la validación es exitosa
    alert("Registrando Usuario");
  };

  return (
    <SafeAreaView style={commonStyles.screen}>
      <View style={styles.loginContainer}>
        <Text style={styles.appName}>Project Dish</Text>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Bienvenido !!!</Text>
          <Text style={styles.messageText}>
            Llena los campos para registrarte
          </Text>
        </View>
        <View style={styles.inputsContainer}>
          <TextInput
            style={commonStyles.textInput}
            placeholder="Nombre de usuario"
            value={newUser.username}
            onChangeText={(text) => {
              handleDataChange("username", text);
            }}
          />
          <TextInput
            style={commonStyles.textInput}
            value={newUser.email}
            placeholder="Correo electronico"
            onChangeText={(text) => {
              handleDataChange("email", text);
            }}
          />
          <TextInput
            style={commonStyles.textInput}
            placeholder="Contraseña"
            value={newUser.password}
            secureTextEntry
            onChangeText={(text) => {
              handleDataChange("password", text);
            }}
          />
          <TextInput
            style={commonStyles.textInput}
            placeholder="Confirmar contraseña"
            value={newUser.passwordConfirm}
            secureTextEntry
            onChangeText={(text) => {
              handleDataChange("passwordConfirm", text);
            }}
          />
        </View>
        <Pressable
          style={styles.button}
          onPress={() => {
            validateData();
          }}
        >
          <Text style={styles.textButton}>Registrar</Text>
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
