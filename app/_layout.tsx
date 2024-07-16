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
        name="(tabs)"
        options={{
          title: "Main Screen",
          headerShown: false
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
