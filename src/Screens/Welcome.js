import React from "react";
import { StyleSheet, View, ImageBackground, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Welcome = () => {
  const navigation = useNavigation();

  const handleStartPress = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/balloon-16.gif.webp")} 
        style={styles.background}
      >
        <View style={styles.content}>
          <Text style={styles.text}>Birthday wishes to loved one's</Text>
          <TouchableOpacity style={styles.button} onPress={handleStartPress}>
            <Text style={styles.buttonText}>Let's start</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 40,
  },
  text: {
    fontSize: 24,
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#3498db",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
  },
});

export default Welcome;
