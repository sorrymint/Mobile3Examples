# Unit 3 Day 2

Splash Screens and App Icons

## [App Icons](https://docs.expo.dev/develop/user-interface/app-icons/)

Does not show up on Emulator :( only on device. You can see it in expo menu (press 'M')

## [Splash Screens](https://docs.expo.dev/develop/user-interface/splash-screen/)

Use this [Figma Template](https://www.figma.com/community/file/1155362909441341285) and this image. 

⚠️ contain - The splash screen API is unable to stretch or scale the splash image. 
As a result, the contain mode will initially display only the background color, and when the initial view hierarchy is mounted then splash.image will be displayed.

## Run the app 

You will need to clear the cashe for you to see the icon. 

```
npx expo start -c
```



## Build the App

https://docs.expo.dev/build-reference/apk/ 

```
sudo npm install --global expo-cli eas-cli
eas build -p android --profile preview
```

## How to update

https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/