import React from "react";
import { StyleSheet, Text, View, StatusBar, FlatList } from "react-native";

import Header from "../Components/Header";
import BirtdayCard from "../Components/BirthdayCard";

const birthdays = [
  {
    name: "The Muffin Man Bakery",
    categories: "Desserts, Cakes and Bakery",
    image: require("../../assets/birthdayCard.jpg"),
    id: 1,
  },
  {
    name: "Birthday Card To Mom",
    categories: "Happiest birthday to you mommy, widhing you the best in life.",
    image: require("../../assets/birthdayCard1.jpg"),
    id: 2,
  },
  {
    name: "WildBread Bakery",
    categories: "Cakes and Bakery, American, Sandwiches, Burgers",
    image: require("../../assets/birthdayCard2.jpg"),
    id: 3,
  },
  {
    name: "McDonald's",
    categories: "Fast Food, Burgers, Desserts",
    image: require("../../assets/birthdayCard3.jpg"),
    id: 4,
  },
  {
    name: "Jollibee",
    categories: "Fast Food, Burgers, Desserts",
    image: require("../../assets/birthdayCard4.jpg"),
    id: 5,
  },
];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header label="Birthday App" />
      {/* <Text>Hello World!</Text> */}
      {/* <BirtdayCard /> */}
      <StatusBar style="auto" />
      <FlatList
        data={birthdays}
        renderItem={({ item }) => {
          return <BirtdayCard info={item} />;
        }}
        keyExtractor={(birthday) => birthday.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6c5ce7",
    alignItems: "center",
    //   justifyContent: 'center',
  },
});

export default HomeScreen;
