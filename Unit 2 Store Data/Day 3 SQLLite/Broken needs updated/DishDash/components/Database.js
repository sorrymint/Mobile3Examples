import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("dishdash.db");

const initDatabase = () => {
    return new Promise((resolve, reject) => {
        db.transaction(
            (tx) => {
                tx.executeSql(
                    "CREATE TABLE IF NOT EXISTS starred_recipes (id INTEGER PRIMARY KEY AUTOINCREMENT, recipeId TEXT);",
                    [],
                    resolve,
                    (_, error) => reject(error)
                );
            },
            null,
            null
        );
    });
};

const getStarredRecipes = () => {
    return new Promise((resolve, reject) => {
        db.transaction(
            (tx) => {
                tx.executeSql(
                    "SELECT * FROM starred_recipes;",
                    [],
                    (_, { rows }) => {
                        resolve(rows._array.map((item) => item.recipeId));
                    }
                );
            },
            null,
            reject
        );
    });
};

const starRecipe = (recipeId) => {
    return new Promise((resolve, reject) => {
        db.transaction(
            (tx) => {
                tx.executeSql(
                    "INSERT INTO starred_recipes (recipeId) VALUES (?);",
                    [recipeId],
                    resolve,
                    reject
                );
            },
            null,
            null
        );
    });
};

const unstarRecipe = (recipeId) => {
    return new Promise((resolve, reject) => {
        db.transaction(
            (tx) => {
                tx.executeSql(
                    "DELETE FROM starred_recipes WHERE recipeId = ?;",
                    [recipeId],
                    resolve,
                    reject
                );
            },
            null,
            null
        );
    });
};

export { initDatabase, getStarredRecipes, starRecipe, unstarRecipe };
