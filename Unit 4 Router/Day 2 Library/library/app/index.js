import {
    View,
    Text,
    Image,
    StyleSheet,
    FlatList,
    Pressable,
} from "react-native";
import { Link } from "expo-router";
import books from '../assets/books.js'

export default function Books() {
    const renderBook = ({ item }) => (
        <View style={styles.bookContainer}>
            <Text style={styles.desc}>{item.desc}</Text>
            <Link
                href={{
                    pathname: "/book",
                    params: {
                        price: item.price,
                        desc: item.desc,
                        image: item.image,
                    },
                }}
                asChild
            >
                <Pressable>
                    <Image
                        source={item.image}
                        style={styles.bookImage}
                        resizeMode="contain"
                    />
                </Pressable>
            </Link>

            <Text>Price: ${item.price}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Books Luke Likes 📖</Text>
            <FlatList
                data={books}
                renderItem={renderBook}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F5F5",
        padding: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
    },
    desc: {
        fontSize: 20,
        marginBottom: 10,
    },
    bookContainer: {
        marginBottom: 20,
        backgroundColor: "#FFF",
        borderRadius: 10,
        padding: 10,
        elevation: 5,
    },
    bookImage: {
        width: "100%",
        height: undefined,
        aspectRatio: 1,
        resizeMode: "contain",
    },
});
