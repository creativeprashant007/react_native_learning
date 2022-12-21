import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TouchableNativeFeedback,
  Alert,
  Switch,
  TextInput,
} from "react-native";
import React, { useState } from "react";

export default function App() {
  const handlePress = () => console.log("I press on text widget");
  const buttonPress = () =>
    Alert.alert("Warning!!", "Do you really want to close this app??", [
      { text: "Yes", onPress: () => console.log("yes") },
      { text: "No", onPress: () => console.log("No") },
    ]);
  const buttonPressPromt = () =>
    Alert.prompt("Hello", "Enter some  inputs", (text) => console.log(text));

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text} numberOfLines={2} onPress={handlePress}>
        Hello this is testing
      </Text>

      <Button onPress={buttonPressPromt} title="Press me" />
      <TouchableNativeFeedback onPress={() => console.log("image tapped")}>
        <Image
          blurRadius={2}
          fadeDuration={1000}
          resizeMethod={"contain"}
          source={{
            height: 200,
            width: 300,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableNativeFeedback>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FF0",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 39,
    color: "#000",
  },
  image: {
    height: 100,
    width: 100,
  },
  input: {
    width: 360,
    height: 40,
    margin: 12,
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
  },
});
