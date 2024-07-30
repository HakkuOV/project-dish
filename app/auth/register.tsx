import { useState } from "react";
import { Text, StyleSheet, View, TextInput, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomModal from "@/components/modals";
import commonStyles from "@/styles/common";

export default function Rgister() {
  // Datos del usuario
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  // Estados para el modal
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const validateData = (): boolean => {
    // Eliminamos los espacios al inicio y al final del nombre de usuario y del correo
    setUsername(username.trim());
    setEmail(email.trim());

    // Validamos los datos
    if (!username || !email || !password || !passwordConfirm) {
      // Verificamos que se ingresaron todos los campos
      setModalMessage("Completa los campos");
      setModalVisible(true);
      return false;
    } else if (
      password.trim() !== password ||
      passwordConfirm.trim() !== passwordConfirm
    ) {
      // Verificamos que la contraseña no contenga espacios al inicio o al final
      setModalMessage(
        "La contraseña no debe tener espacios al inicio o al final"
      );
      setModalVisible(true);
      return false;
    } else if (password !== passwordConfirm) {
      // Verificamos que se escribio bien la contraseña
      setModalMessage("La contraseña no coincide");
      setModalVisible(true);
      return false;
    }
    return true;
  };

  const registerUser = async () => {
    if (validateData()) {
      // Si la validacion de datos fue correcta, tratamos de agregar al usuario a la base de datos
      try {
        const url = `http://ornval.free.nf/db_add_user.php?username=${username}&email=${email}&password=${password}`;
        const response = await fetch(url);
        const status = await response.json();
        console.log(status);
      } catch (error) {
        console.log(error);
      } finally {
        setModalMessage("No se pudo registrar el usuario");
        setModalVisible(true);
      }
    }
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.loginContainer}>
        <Text style={commonStyles.appName}>Project Dish</Text>
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
            value={username}
            onChangeText={(text) => {
              setUsername(text);
            }}
          />
          <TextInput
            style={commonStyles.textInput}
            value={email}
            placeholder="Correo electronico"
            onChangeText={(text) => {
              setEmail(text);
            }}
          />
          <TextInput
            style={commonStyles.textInput}
            placeholder="Contraseña"
            value={password}
            secureTextEntry
            onChangeText={(text) => {
              setPassword(text);
            }}
          />
          <TextInput
            style={commonStyles.textInput}
            placeholder="Confirmar contraseña"
            value={passwordConfirm}
            secureTextEntry
            onChangeText={(text) => {
              setPasswordConfirm(text);
            }}
          />
        </View>
        <Pressable
          style={styles.button}
          onPress={() => {
            registerUser();
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
