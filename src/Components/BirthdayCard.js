import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";

const BirtdayCard = ({ info }) => {
  const { name, categories, image } = info;

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Image style={styles.imageStyle} source={image} />
        <View style={styles.infoStyle}>
          <Text style={styles.titleStyle}>{name}</Text>
          <Text style={styles.subTitleStyle}>{categories}</Text>
        </View>
      </View>
    </View>
  );
};

const deviceWidth = Math.round(Dimensions.get("window").width);
const offset = 40;
const radius = 20;
const styles = StyleSheet.create({
  container: {
    width: deviceWidth - 20,
    alignItems: "center",
    marginTop: 25,
  },
  cardContainer: {
    width: deviceWidth - offset,
    backgroundColor: "#a29bfe",
    height: 200,
    borderRadius: 20,

    shadowColor: "#000",
    shadowOffser: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.75,
    shadowRadius: 5,
    elevation: 9,
  },
  imageStyle: {
    height: 130,
    width: deviceWidth - offset,
    borderTopLeftRadius: radius,
    borderTopRightRadius: radius,
    opacity: 0.8,
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: "800",
  },
  subTitleStyle: {
    fontWeight: "500",
  },
  infoStyle: {
    marginHorizontal: 10,
    marginVertical: 5,
  },
});

export default BirtdayCard;
