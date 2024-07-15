import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Main Screen",
        }}
      />
      <Stack.Screen
        name="auth/login"
        options={{
          title: "Login",
        }}
      />
      <Stack.Screen
        name="auth/register"
        options={{
          title: "Register",
        }}
      />
    </Stack>
  );
}
