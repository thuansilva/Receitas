import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppLoading } from "expo";
import * as Font from "expo-font";

const fetchFonts = () => {
  return Font.loadAsync({
    "Gilroy-Bold": require("./assets/fonts/Gilroy-Bold.ttf"),
    "Gilroy-Heavy": require("./assets/fonts/Gilroy-Heavy.ttf"),
    "Gilroy-Light": require("./assets/fonts/Gilroy-Light.ttf"),
    "Gilroy-Medium": require("./assets/fonts/Gilroy-Medium.ttf"),
    "Gilroy-Regular": require("./assets/fonts/Gilroy-Regular.ttf"),
  });
};

export default function App() {
  const [isLoading, setisLoading] = useState(false);
  if (!isLoading) {
    return (
      <>
        <AppLoading
          startAsync={fetchFonts}
          onError={}
          onFinish={() => setisLoading(true)}
        />
        <StatusBar style="auto" />
      </>
    );
  }
  return {};
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
