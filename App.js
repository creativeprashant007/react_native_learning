import {} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import LoginForm from "./app/screens/LoginForm";
import ScrollViewScreen from "./app/screens/ScrollViewScreen";

export default function App() {
  const { landscape } = useDeviceOrientation();
  return <ScrollViewScreen />;
}
