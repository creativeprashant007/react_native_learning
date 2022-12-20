import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, SafeAreaView, Image } from "react-native";

export default function App() {
  const handlePress = () => console.log("I press on text widget");

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text} numberOfLines={2} onPress={handlePress}>
        Hello this is testing
      </Text>
      <Button
        onPress={() => {
          alert("You tabbed the button");
        }}
        title="Press me"
      />
      <Image
        blurRadius={2}
        resizeMode={"contain"}
        source={{
          height: 200,
          width: 300,
          uri: "https://picsum.photos/200/300",
        }}
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
});
