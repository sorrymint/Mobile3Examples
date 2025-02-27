# Unit 4 Project 2 Drawer App

Build a React Native [Expo Router](https://docs.expo.dev/router/introduction/) app that uses the [drawer navigator](https://docs.expo.dev/router/advanced/drawer/) layout. This app should simulate a wiki with at least 4 screens with one of them being hidden from the drawer. The app needs to store wiki data in external data your choice how (DB, JSON, [MarkDown](https://www.markdownguide.org/basic-syntax/) etc). The subject of the wiki is up to you. Make sure to theme your app for light and dark mode.

## Build the project

At the time of writing [Expo Router](https://docs.expo.dev/router/introduction/) is very new so you will want to follow the [manual install guide](https://docs.expo.dev/router/installation/#manual-installation) to build the project but I will include the basic steps.

```
$ npx create-expo-app wiki
$ cd wiki
$ npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar
```

Then configure the app following [the guide](https://docs.expo.dev/router/installation/#manual-installation)

### Add Drawer Layout

Install [drawer layout](https://docs.expo.dev/router/advanced/drawer/) and configure your project to use it. Make sure you run the following to clear cache `npx expo start --clear`

### Displaying External Wiki Data
You can display wiki data via any external means but for my example I used [Markdown](https://www.markdownguide.org/basic-syntax/). To display Markdown I used a package called [react-native-marked](https://github.com/gmsgowtham/react-native-marked).
``` 
yarn add react-native-marked react-native-svg
```

## Project File Structure

Expo Router is a file-based router for React Native apps. So the structure of the Files are very important. Please follow the diagram below for your Project structure. Your project may vary based on subject matter.

```
├── estate-marketplace
│   ├── app
│   │   ├── home
|   |   |    ├── index.js
│   │   ├── subject
|   |   |    ├── index.js
|   |   |    ├── sub-page.js
│   │   ├── subject-2
|   |   |    ├── index.js
|   |   |    ├── sub-page.js
|   ├── index.js
|   ├── _layout_.js
│   ├── components
│   │   ├── header.js
│   app.json
│   package.json
```

## UI/UX

### UI

Following is a basic idea of what your app should look like. Feel free to go in your own direction. Your app can look how you choice but your app should look like a modern app. Make sure to use what you have learned in the previous units about [themes](https://docs.expo.dev/develop/user-interface/color-themes/).

<div style="display:flex">
    <img src="lightHome.png">
    <img src="darkHome.png">
</div>
<div style="display:flex">
    <img src="lightDetails.png">
    <img src="darkDetails.png">
</div>

## UX
User should be able to use [Drawer](https://docs.expo.dev/router/advanced/drawer/) to navigate throughout the screens. The user should not have to use the back button to navigate.

## Rubric

Project is graded based on execution and quality of the code submitted. Each feature is evaluated
individually. It is assumed that all work is done by the student that submitted the work unless otherwise
cited.
|Topic| Task| Points|
|-----|-----|------|
|**Routing**|| 5pts|
|**Drawer** ||5pts|
|**Wiki Data**||10pts|
|**Styling**||5pt|
| **Total** || 25pts|