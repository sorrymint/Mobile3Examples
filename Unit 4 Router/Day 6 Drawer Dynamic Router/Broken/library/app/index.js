import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    Image,
    FlatList,
    StyleSheet,
} from "react-native";
import BookComponent from "../components/BookComponent";

const App = () => {
    const books = require("../assets/books.json");

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={[styles.header, styles.darkHeader]}>
                <Image
                    style={styles.logo}
                    source={require("../assets/OPL-Logo-Lg.webp")}
                />
            </View>
            <View>
                <Text style={{ padding: 5 }}>
                    The Ottumwa Public Library strives to provide wide-ranging
                    opportunities, space, services, and resources for all
                    members of the community to expand their knowledge, increase
                    understanding and gain perspective about our diverse and
                    amazing world.
                </Text>
                <View></View>
            </View>
            <FlatList
                data={books}
                renderItem={({ item }) => <BookComponent book={item} />}
                keyExtractor={(book) => book.id}
            />
            <View style={[styles.footer, styles.darkFooter]}>
                <Text style={[styles.footerText, styles.darkFooterText]}>
                    Unit 8 Project 2
                </Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    logo: {
        height: 45,
        width: "100%",
        resizeMode: "contain",
    },
    darkHeader: {
        backgroundColor: "#242c40",
    },
    container: {
        padding: 10,
        //   fontFamily: 'Open Sans',
    },
    footer: {
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: "#ccc",
    },
    footerText: {
        fontSize: 14,
        textAlign: "center",
    },
    darkFooter: {
        backgroundColor: "#242c40",
    },
    darkFooterText: {
        color: "#d0d0c0",
    },
});

export default App;
