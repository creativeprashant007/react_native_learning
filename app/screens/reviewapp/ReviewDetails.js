import React from "react";
import { View, Text, Button,StyleSheet,Image} from "react-native";
import { Rating } from "react-native-elements";
import AppCard from "../../../shared/card";
import { globalStyles } from "../../../styles/global_style";
function ReviewDetails({ route, navigation }) {
  const { title, reating, body, key } = route.params;

 
const imgSrc = {
  "1":require("../../assets/rating-1.png"),
  "2":require("../../assets/rating-2.png"),
  "3":require("../../assets/rating-3.png"),
  "4":require("../../assets/rating-4.png"),
  "5":require("../../assets/rating-5.png")
  };

  return (
    <View style={globalStyles.container}>
      <AppCard>
        <Text style={globalStyles.titleText}>{title}</Text>
        <Text style={globalStyles.titleText}>{body}</Text>
        <View style ={styles.rating}>
          <Text>GameZone Rating:</Text>
          <Image source = {imgSrc[reating]} />

        </View>
      </AppCard>
    </View>
  );
}
const styles = StyleSheet.create({
  rating:{
    flexDirection:'row',
    justifyContent:'center',
    paddingTop:16,
    marginTop:16,borderTopWidth:1,
    borderTopColor:"#EEE",
  }
})
export default ReviewDetails;
