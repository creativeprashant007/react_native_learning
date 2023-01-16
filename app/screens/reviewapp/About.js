import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { globalStyles } from "../../../styles/global_style";

function About(props) {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>About screen</Text>
    </View>
  );
}

export default About;
