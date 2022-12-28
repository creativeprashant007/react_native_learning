import React from "react";
import { Text, View, StyleSheet } from "react-native";

function Sandbox(props) {
  return <View style={styles.container}></View>;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "#ddd",
  },
});
export default Sandbox;
