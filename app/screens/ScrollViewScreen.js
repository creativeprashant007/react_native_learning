import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";

function ScrollViewScreen(props) {
  const [people, setPeople] = useState([
    { name: "shaun", key: "1" },
    { name: "youshi", key: "2" },
    { name: "maria", key: "3" },
    { name: "luige", key: "4" },
    { name: "pearn", key: "5" },
    { name: "tom", key: "6" },
    { name: "marty", key: "7" },
    { name: "shaun", key: "8" },
    { name: "youshi", key: "9" },
    { name: "maria", key: "10" },
    { name: "luige", key: "11" },
    { name: "pearn", key: "12" },
    { name: "tom", key: "13" },
    { name: "marty", key: "14" },
  ]);

  const itemPressHandler = (id) => {
    setPeople((prevPeople)=>{
      return prevPeople.filter(person=>person.key != id)
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView>
        {people.map((item) => (
          <View key={item.key} style={styles.itemView}>
            <Text style={styles.item}>{item.key}</Text>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        ))}
      </ScrollView> */}

      <FlatList
        data={people}
        keyExtractor={(item) => item.key}
        numColumns={1}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => itemPressHandler(item.key)}>
            <View style={styles.itemView}>
              <Text style={styles.item}>{item.key}</Text>
              <Text style={styles.item}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  item: { marginTop: 24, padding: 30, fontSize: 24 },
  itemView: {
    marginTop: 20,
    backgroundColor: "pink",
    // flex: 1,
    justifyContent: "start",

    flexDirection: "row",
  },
});

export default ScrollViewScreen;
