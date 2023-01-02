import Home from "./app/screens/reviewapp/Home";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { useState } from "react";

const getFonts = () =>
  Font.loadAsync({
    "nunito-regular": require("/Users/preashanttimalsina/Desktop/rtw/react_native_r_n_d/AwesomeProject/app/assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("/Users/preashanttimalsina/Desktop/rtw/react_native_r_n_d/AwesomeProject/app/assets/fonts/Nunito-Bold.ttf"),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  if (fontsLoaded) {
    return <Home />;
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
    );
  }
}
