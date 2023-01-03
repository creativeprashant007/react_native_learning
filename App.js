import Home from "./app/screens/reviewapp/Home";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { useState } from "react";
import Navigator from "./routes/HomeStack";

const getFonts = () =>
  Font.loadAsync({
    "nunito-regular": require("./app/assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("./app/assets/fonts/Nunito-Bold.ttf"),
  });

export default function App() {
  // const [fontsLoaded, setFontsLoaded] = useState(false);
  // if (fontsLoaded) {
  return <Navigator />;
  //  } else {
  // return (
  //   <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
  // );
  //}
}
