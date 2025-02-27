import { useState, useEffect } from "react";
import { Text, View, StyleSheet, StatusBar } from "react-native";
import ActionButton from "./components/ActionButton";

const Timer = () => {
    const [count, setCount] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    const startTimer = () => {
        setIsRunning(true);
    };

    const resetTimer = () => {
        setCount(0);
        setIsRunning(false);
    };

    useEffect(() => {
        let intervalId = setInterval(() => {
            if (!isRunning) return;
            setCount((prevCount) => prevCount + 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, [isRunning]);

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="blue" />
            <Text style={{ fontSize: 30, padding: 10 }}>Timer App</Text>
            <View style={styles.main}>
                <Text style={{ fontSize: 60 }}>{count}s</Text>
                <ActionButton onPress={startTimer} text="Start" color="green" />
                <ActionButton onPress={resetTimer} text="Reset" color="red" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    main: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default Timer;
