import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  Platform,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={(styles.container, safeAreaStyle)}>
      <Button style={{ backgroundColor: "#FFF" }} title="Press me" />
    </SafeAreaView>
  );
}

const safeAreaStyle = { backgroundColor: "#000" };
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
    //marginTop: Platform.OS === "ios" ? 0 : 0,
  },
});
