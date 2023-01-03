import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createAppContainer } from "react-native";
import About from "../app/screens/reviewapp/About";
import Home from "../app/screens/reviewapp/Home";
import ReviewDetails from "../app/screens/reviewapp/ReviewDetails";
const screens = {
  Home: {
    screen: Home,
  },
  ReviewDetails: {
    screen: ReviewDetails,
  },
  About: {
    screen: About,
  },
};
const HomeStack = createNativeStackNavigator(screens);
export default createAppContainer(HomeStack);
