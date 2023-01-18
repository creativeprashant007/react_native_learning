import React from "react";
import { View, Text, Button,StyleSheet,Image} from "react-native";
import { Rating } from "react-native-elements";
import AppCard from "../../../shared/card";
import { globalStyles } from "../../../styles/global_style";
function ReviewDetails({ route, navigation }) {
  const { title, reating, body, key } = route.params;
var url = '../../assets/rating-' + reating + '.png'
  return (
    <View style={globalStyles.container}>
      <AppCard>
        <Text style={globalStyles.titleText}>{title}</Text>
        <Text style={globalStyles.titleText}>{body}{reating}</Text>
        <View style ={styles.rating}>
          <Text>GameZone Rating:</Text>
          <Image source = {require(url)} />

        </View>
      </AppCard>
    </View>
  );
}
const styles = StyleSheet.create({
  rating:{}
})
export default ReviewDetails;
