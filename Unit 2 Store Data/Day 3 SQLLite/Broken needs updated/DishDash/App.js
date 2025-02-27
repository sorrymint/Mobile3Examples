import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import Dish from "./components/Dish";
import {
    initDatabase,
    getStarredRecipes,
    starRecipe,
    unstarRecipe,
} from "./components/Database";
import recipesData from "./assets/recipes.json";
import { StatusBar } from "expo-status-bar";

const App = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        initDatabase();
        setRecipes(recipesData);
    }, []);

    const [starredRecipes, setStarredRecipes] = useState([]);

    useEffect(() => {
        getStarredRecipes().then(setStarredRecipes);
    }, []);

    const handleStarPress = async (id, isStarred) => {
        if (isStarred) {
            // If the recipe is already starred, unstar it
            await unstarRecipe(id);
        } else {
            // If the recipe is not starred, star it
            await starRecipe(id);
        }

        // Refresh the list of starred recipes
        getStarredRecipes().then(setStarredRecipes);
    };
    //Changing title bar color only works on Android 🤖
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#f44322" />
            <Text style={styles.title}>Dish Dash 🍳</Text>
            <FlatList
                data={recipes}
                style={styles.flatList}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Dish
                        dish={item}
                        onStarPress={() =>
                            handleStarPress(
                                item.id,
                                starredRecipes.includes(item.id)
                            )
                        }
                        isStarred={starredRecipes.includes(item.id)}
                    />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 30,
        backgroundColor: "#f44322",
        width: "100%",
        color: "white",
        textAlign: "center",
        padding: 10,
        marginBottom: 10,
    },
});

export default App;
