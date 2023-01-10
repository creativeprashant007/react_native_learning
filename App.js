import Home from "./app/screens/reviewapp/Home";
// import { AppLoading } from "expo";
import * as Font from "expo-font";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from "./app/screens/reviewapp/About";
import ReviewDetails from "./app/screens/reviewapp/ReviewDetails";

const Stack = createNativeStackNavigator();
export default function App() {
 
  return (<NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home}   />
    <Stack.Screen name="ReviewDetails" component={ReviewDetails} />
  </Stack.Navigator>
</NavigationContainer>);

}
