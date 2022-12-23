import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
} from "react-native";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Perform login logic here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.mainHeader}>Login Form</Text>
      <Text style={styles.description}>
        You can reach us any time via login
      </Text>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter your name</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter your password</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity style={styles.bottonStyle}>
        <Button title="Log In" onPress={handleLogin} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottonStyle: {
    marginTop: 30,
    color: "blue",
  },
  container: {
    flex: 1,
    height: "100%",
    paddingHorizontal: 30,
    paddingTop: 30,
    backgroundColor: "#fff",
    alignContent: "center",
    justifyContent: "center",
  },
  inputContainer: {
    marginTop: 25,
  },
  labels: {
    fontSize: 18,
    color: "#7d7d7d",
    marginTop: 10,
    marginBottom: 5,
    lineHeight: 25,
    fontFamily: "regular",
  },
  input: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.3)",
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 8,
    fontSize: 18,
    fontFamily: "regular",
  },
  mainHeader: {
    fontSize: 25,
    color: "#344055",
    fontWeight: "500",
    paddingTop: 30,
    paddingBottom: 15,
  },
  description: {
    fontSize: 20,
    color: "#7d7d7d",
    fontWeight: "400",
    lineHeight: 25,
    paddingBottom: 30,
    fontFamily: "regular",
  },
});

export default LoginForm;
