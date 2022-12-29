import React from "react";
import { Text, View, StyleSheet } from "react-native";

function Sandbox(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>One</Text>
      <Text style={styles.boxTwo}>Two</Text>
      <Text style={styles.boxThree}>Three</Text>
      <Text style={styles.boxFour}>Four</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingTop: 60,
    backgroundColor: "#ddd",
    justifyContent: "flex-end", //main axis alignment
    alignItems: "flex-start", //cross axis alignment
    flexDirection: "row", //vice versa for column for justify content and align items
  },
  boxOne: {
    flex: 1,
    padding: 10,
    backgroundColor: "violet",
  },
  boxTwo: {
    flex: 1,
    padding: 20,
    backgroundColor: "gold",
  },
  boxThree: {
    flex: 2,
    padding: 30,
    backgroundColor: "cyan",
  },
  boxFour: {
    flex: 1,
    padding: 40,
    backgroundColor: "skyblue",
  },
});
export default Sandbox;
