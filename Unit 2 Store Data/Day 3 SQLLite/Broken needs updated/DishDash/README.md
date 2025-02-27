# Unit 2 Day 2
Today we wil use SQLLite to store started recipes 

## Create the App
Run the following commands in the root of a folder where you want to save this project. Most likely in `AdvMobile>Unit2>Day2`
```
npx create-expo-app DishDash
cd DishDash
npx expo start
```

## SQLLite
- [Docs](https://docs.expo.dev/versions/latest/sdk/sqlite/)

### Install SQLLite
```
npx expo install expo-sqlite
```
### Using SQLLite
- Import SQLLite
    - `import * as SQLite from 'expo-sqlite';`
- Should now see SQLlit in [package.json](package.json)

## Build the App
- Build [recipes.json](./assets/recipes.json)
- Changing [StatusBar](https://reactnative.dev/docs/statusbar) color only works on Android 🤖




