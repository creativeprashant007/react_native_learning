import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";
function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text>Sell What you Don't Nedd</Text>
      </View>

      <View style={styles.reisterButton}></View>
      <View style={styles.loginButton}></View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: { flex: 1, justifyContent: "flex-end", alignItems: "center", },
  reisterButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
});

export default WelcomeScreen;
