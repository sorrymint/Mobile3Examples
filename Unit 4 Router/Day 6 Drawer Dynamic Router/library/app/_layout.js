import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Drawer} from 'expo-router/drawer';

export default function Layout() {
    return (
        <GestureHandlerRootView style={{flex: 1}}>
            <Drawer>
                <Drawer.Screen
                    name="index" // This is the name of the page and must match the url from root
                    options={{
                        drawerLabel: 'Books',
                        title: 'Books',
                    }}
                />
                <Drawer.Screen
                    name="book/[id]"
                    options={{
                        drawerItemStyle: {display: 'none'}
                    }}
                />
                <Drawer.Screen
                    name="authors/[name]"
                    // initialParams: {{name: "Jack Kerouac"}}
                    options={{
                        drawerLabel: 'Jack Kerouac',
                        title: 'Jack Kerouac'
                    }}
                />
            </Drawer>
        </GestureHandlerRootView>
    );
}
