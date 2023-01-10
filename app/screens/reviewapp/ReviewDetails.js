import React from "react";
import { View, Text, Button } from "react-native";
import { Rating } from "react-native-elements";
import { globalStyles } from "../../../styles/global_style";
function ReviewDetails({ route, navigation }) {
  const { title, reating, body, key } = route.params;

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>{title}</Text>
      <Text style={globalStyles.titleText}>{body}</Text>
      <Text style={globalStyles.titleText}>{reating}</Text>
    </View>
  );
}

export default ReviewDetails;
