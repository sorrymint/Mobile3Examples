import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

export default function Layout() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer>
                <Drawer.Screen
                    name="index" // This is the name of the page and must match the url from root
                    options={{
                        drawerLabel: "Home",
                        title: "Home",
                    }}
                />
                <Drawer.Screen
                    name="fish/index" // This is the name of the page and must match the url from root
                    options={{
                        drawerLabel: "Fish",
                        title: "Fishing Info",
                    }}
                />
                {/* To hide Fish Desc Must be be easier way */}
                <Drawer.Screen
                    name="fish/desc/index"
                    options={{
                        title: "Fishing Desc",
                        drawerItemStyle: { display: "none" },
                    }}
                />
            </Drawer>
        </GestureHandlerRootView>
    );
}
