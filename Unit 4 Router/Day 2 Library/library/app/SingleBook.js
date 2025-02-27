import React, {useState} from "react";
import{
    View,
    Text,
    Image,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    FlatList
} from "react-native"
import { useLocalSearchParams } from "expo-router";

const SingleBookScreen = () => {
    const {price, desc, image} = useLocalSearchParams();

    return(
        <View>
            <Text>HI</Text>
        </View>
    )
}

export default SingleBookScreen;