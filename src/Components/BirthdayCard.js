import React from "react";
import { View, Text, StyleSheet, Dimensions, Image, FlatList } from "react-native";

const BirtdayCard = ({info}) => {
    const { name, categories, image } = info;

    return (
        <View style={styles.cardContainer}>
            <Image style={styles.imageStyle} source={image} />
            <View style={styles.infoStyle}>
                <Text style={styles.titleStyle}>{name}</Text>
                <Text style={styles.subTitleStyle}>{categories}</Text>
            </View>
        </View>
    );
};

const deviceWidth = Math.round(Dimensions.get('window').width);
const radius = 20;
const styles = StyleSheet.create({
    cardContainer: {
        width: deviceWidth - 25,
        backgroundColor: '#a29bfe',
        height: 200,
        borderRadius: 20,

        shadowColor: '#000',
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
        width: deviceWidth - 25,
        borderTopLeftRadius: radius,
        borderTopRightRadius: radius,
        opacity: 0.8,
    },
    titleStyle: {
        fontSize: 20,
        fontWeight: '800',
    },
    subTitleStyle: {
        fontWeight: '500',
    },
    infoStyle: {
        marginHorizontal: 10,
        marginVertical: 5,
    },
});

export default BirtdayCard;