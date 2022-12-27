import React from "react";
import { StyleSheet, Text, View } from "react-native";
export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Todos</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    height: 100,
    paddingTop: 60,
    backgroundColor: "coral",
  },
  title: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",

    fontWeight: "700",
  },
});
