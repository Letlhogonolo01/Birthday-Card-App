import React from "react";
import {View, StyleSheet, Text, Dimensions } from "react-native";

const Header = ({label}) => {
    // console.log(label)

    return (
        <View style={styles.container}>
            <Text style={styles.labelStyles}>{label}</Text>
        </View>
    );
};

const deviceWidth = Math.round(Dimensions.get('window').width)

const styles = StyleSheet.create({
    container: {
      width: deviceWidth,
      height: 90,
      backgroundColor: '#a29bfe',
      justifyContent: 'center',
      alignItems: 'center',
    },
    labelStyles: {
        fontSize: 24,
        fontWeight: '700',
    }
  });

export default Header;