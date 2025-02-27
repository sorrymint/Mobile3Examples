import {Image, StyleSheet, Platform} from 'react-native';

import {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import Markdown from "react-native-marked";

export default function HomeScreen() {

    const [content, setContent] = useState("");

    useEffect(() => {
        fetch("https://gist.githubusercontent.com/rt2zz/e0a1d6ab2682d2c47746950b84c0b6ee/raw/83b8b4814c3417111b9b9bef86a552608506603e/markdown-sample.md")
            .then((response) => response.text())
            .then((text) => setContent(text))
    })
    return (
        <View style={{backgroundColor: 'white'}}>
            <Markdown value={content}/>
        </View>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    stepContainer: {
        gap: 8,
        marginBottom: 8,
    },
    reactLogo: {
        height: 178,
        width: 290,
        bottom: 0,
        left: 0,
        position: 'absolute',
    },
});
