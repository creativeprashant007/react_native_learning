import {} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import LoginForm from "./app/screens/LoginForm";
import ScrollViewScreen from "./app/screens/ScrollViewScreen";
import ToDoMainScreen from "./app/screens/todo/ToDoMainScreen";
import Home from "./app/screens/reviewapp/Home";

export default function App() {
  const { landscape } = useDeviceOrientation();
  return <Home />;
}
