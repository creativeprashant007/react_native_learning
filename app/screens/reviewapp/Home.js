import React from "react";
import { Text, View, StyleSheet } from "react-native";

function Home(props) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 100,
  },
  titleText: {},
});
export default Home;
