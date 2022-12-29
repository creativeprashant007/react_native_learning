import React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
function ToDoItem({ item, pressHandler }) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <View style={styles.itemStyle}>
        <Text>{item.text}</Text>
        <Entypo style={styles.iconStyle} name="cross" size={24} color="black" />
        {/* <Ionicons
          
          name="md-delete"
          size={32}
          color="green"
        /> */}
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  itemStyle: {
    flex: 1,
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderRadius: 1,
    borderStyle: "dotted",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  toDoTtem: {},
  iconStyle: {
    // paddingHorizontal: 20,
  },
});
export default ToDoItem;
