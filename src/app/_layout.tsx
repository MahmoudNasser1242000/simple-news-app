// Libs
import { Stack } from "expo-router";
import { StatusBar } from "react-native";

export default function RootLayout() {
  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />

      <StatusBar
        barStyle={"dark-content"}
        backgroundColor={"#f4f7fb"}
        translucent={false}
      />
    </>
  );
}
