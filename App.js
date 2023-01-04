import Home from "./app/screens/reviewapp/Home";
// import { AppLoading } from "expo";
import * as Font from "expo-font";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// const getFonts = () =>
//   Font.loadAsync({
//     "nunito-regular": require("./app/assets/fonts/Nunito-Regular.ttf"),
//     "nunito-bold": require("./app/assets/fonts/Nunito-Bold.ttf"),
//   });
const Stack = createNativeStackNavigator();
export default function App() {
 
  return (<NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator>
</NavigationContainer>);

}
