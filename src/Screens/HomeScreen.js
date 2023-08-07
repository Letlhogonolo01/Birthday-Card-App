import React from "react";
import { StyleSheet, View, StatusBar, FlatList } from "react-native";

import Header from "../Components/Header";
import BirtdayCard from "../Components/BirthdayCard";

const birthdays = [
  {
    name: "Birthday Card To Mom",
    categories: "Happiest birthday to you mommy, wishing you the best in life.",
    image: require("../../assets/birthdayCard1.jpg"),
    id: 2,
  },
  {
    name: "Birthday Card To Dad",
    categories: "Wishing you a happy birthday daddy and hope you'll enjoy.",
    image: require("../../assets/birthdayCard2.jpg"),
    id: 3,
  },
  {
    name: "Birthday Card To Brother",
    categories: "To the best brother ever, happiest bithday to you.",
    image: require("../../assets/birthdayCard3.jpg"),
    id: 4,
  },
  {
    name: "Birthday Card To Sister",
    categories: "To the best sister ever, happiest bithday to you.",
    image: require("../../assets/birthdayCard4.jpg"),
    id: 5,
  },
];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header label="Birthday App" />
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
  },
});

export default HomeScreen;
