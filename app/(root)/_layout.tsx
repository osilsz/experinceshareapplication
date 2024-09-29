import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="home" options={{ headerShown: false }} />
      <Stack.Screen name="experience" options={{ headerShown: false }} />
      <Stack.Screen name="addquestion" options={{ headerShown: false }} />
    </Stack>
  );
}
