import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
  Modal,
} from "react-native";
import { globalStyles } from "../../../styles/global_style";
import AppCard from "../../../shared/card.js";
import MaterialIcon, { colorPalette } from "material-icons-react";
function Home({ navigation }) {
  const pressHandler = (item) => {
    // console.log(item.title);
    navigation.navigate("ReviewDetails", item);
    //navigation.push("ReviewDetails")
  };
  const [modalOpen, setModalOpen] = useState(false);
  const [reviews, setReviews] = useState([
    {
      title: "Aelda m Breath of Fresh Air",
      reating: "3",
      body: "lorem ispum",
      key: "1",
    },
    {
      title: "Gotta Catch Them alll(again)",
      reating: "2",
      body: "lorem ispum",
      key: "2",
    },
    {
      title: "Avengers Endgame",
      reating: "4",
      body: "lorem ispum",
      key: "3",
    },
    {
      title: "Avatar-Fall in the water",
      reating: "5",
      body: "lorem ispum",
      key: "4",
    },
  ]);
  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen}>
        <View style={styles.modalContent}>
          <Text>Hello From the modal</Text>
        </View>
      </Modal>
      <MaterialIcon
        name="rocket"
        size={24}
        style={{}}
        onPress={() => setModalOpen(true)}
      />
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
const styles = StyleSheet.create({
  modalContent: {},
});
export default Home;
