import React, { useState } from "react";
import { View, StyleSheet, FlatList, Text, SafeAreaView } from "react-native";
import Header from "../../../components/Header";

function ToDoMainScreen(props) {
  const [todos, setTodos] = useState([
    { text: "buy cofee", key: "1" },
    { text: "create an app", key: "2" },
    { text: "play clash of clans", key: "3" },
    { text: "having lunch", key: "4" },
  ]);
  return (
    <View>
      {/* header */}
      <Header />
      <View style={styles.content}>
        {/* do form*/}
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => <Text>{item.text}</Text>}
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});

export default ToDoMainScreen;
