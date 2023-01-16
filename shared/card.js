import React from "react";
import { StyleSheet, View } from "react-native";

function AppCard(props) {
  return (
    <View style={styles.card}>
      <View style={styles.cardComponent}>{props.children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "#fff",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginVertical: 8,
  },
  cardComponent: {
    marginHorizontal: 10,
    marginVertical: 20,
  },
});

export default AppCard;
