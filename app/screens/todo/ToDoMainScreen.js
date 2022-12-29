import React, { useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  SafeAreaView,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import AddToDo from "../../../components/AddToDo";
import Header from "../../../components/Header";
import Sandbox from "../../../components/Standbox";
import ToDoItem from "../../../components/ToDoItem";

function ToDoMainScreen(props) {
  const [todos, setTodos] = useState([
    { text: "buy cofee", key: "1" },
    { text: "create an app", key: "2" },
    { text: "play clash of clans", key: "3" },
    { text: "having lunch", key: "4" },
  ]);

  const pressHandler = (key) => {
    Alert.alert("WARNING!!!", "Do you really want to delete?", [
      {
        text: "OK",
        onPress: () => {
          setTodos((prevTodos) => {
            return prevTodos.filter((todo) => todo.key != key);
          });
        },
      },
      { text: "Cancel", onPress: () => console.log("cancel") },
      { text: "Not interested", onPress: () => console.log("cancel") },
    ]);
  };
  const dismissKeyboard = () => {
    console.log("dismiss keyboard");
    Keyboard.dismiss();
  };

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [{ text: text, key: Math.random().toString() }, ...prevTodos];
      });
    } else {
      Alert.alert("OOPS!!!", "Todos mush be over 3 chars long", [
        { text: "Unserstood", onPress: () => console.log("alert close") },
      ]);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={() => dismissKeyboard()}>
      <View style={styles.container}>
        {/* header */}
        <Header />
        <View style={styles.content}>
          {/* do form*/}
          <AddToDo pressHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <ToDoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
    // <Sandbox />
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
    backgroundColor: "pink",
    flex: 1,
  },
  list: {
    marginTop: 20,
    backgroundColor: "yellow",
    flex: 1,
  },
});

export default ToDoMainScreen;
