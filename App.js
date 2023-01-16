import Home from "./app/screens/reviewapp/Home";
// import { AppLoading } from "expo";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import About from "./app/screens/reviewapp/About";
import ReviewDetails from "./app/screens/reviewapp/ReviewDetails";
import { globalStyles } from "./styles/global_style";
import { createDrawerNavigator } from "@react-navigation/drawer";
import "react-native-gesture-handler";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Home"
          component={() => (
            <Stack.Navigator>
              <Stack.Screen
                name="Home"
                component={Home}
                // options={{
                //   title: "Game Zone",
                //   headerStyle: globalStyles.appBarStyle,
                //   headerTintColor: "#444",
                // }}
              />
              <Stack.Screen
                name="ReviewDetails"
                component={ReviewDetails}
                options={{
                  title: "Review Details",
                  headerStyle: globalStyles.appBarStyle,
                  headerTintColor: "#444",
                }}
              />
            </Stack.Navigator>
          )}
        />
        <Drawer.Screen name="About" component={About} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
