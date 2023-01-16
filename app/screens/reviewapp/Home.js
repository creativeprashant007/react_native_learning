import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { globalStyles } from "../../../styles/global_style";
import AppCard from "../../../shared/card.js";

function Home({ navigation }) {
  const pressHandler = (item) => {
    // console.log(item.title);
    navigation.navigate("ReviewDetails", item);
    //navigation.push("ReviewDetails")
  };

  const [reviews, setReviews] = useState([
    {
      title: "Aelda m Breath of Fresh Air",
      reating: 5,
      body: "lorem ispum",
      key: "1",
    },
    {
      title: "Gotta Catch Them alll(again)",
      reating: 2.4,
      body: "lorem ispum",
      key: "2",
    },
    {
      title: "Avengers Endgame",
      reating: 4.5,
      body: "lorem ispum",
      key: "3",
    },
    {
      title: "Avatar-Fall in the water",
      reating: 5,
      body: "lorem ispum",
      key: "4",
    },
  ]);
  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item)}>
            <AppCard>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </AppCard>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default Home;
