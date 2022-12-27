import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TextInput } from "react-native";

function AddToDo({ pressHandler }) {
  const [text, setText] = useState("");
  const changedHandler = (val) => {
    console.log(val);
    setText(val);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="new todo..."
        onChangeText={(val) => changedHandler(val)}
      />
      <Button
        onPress={() => pressHandler(text)}
        title="Add Todo"
        color="coral"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
export default AddToDo;
