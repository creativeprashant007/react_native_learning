import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

function ToDoItem({ item, pressHandler }) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <Text style={styles.itemStyle}>{item.text}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  itemStyle: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderRadius: 1,
    borderStyle: "dotted",
    borderRadius: 10,
  },
});
export default ToDoItem;
