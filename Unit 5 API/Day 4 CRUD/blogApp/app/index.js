import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Button, FlatList } from "react-native";
import { Link } from "expo-router";
import Constants from "expo-constants";
import { styles } from "./_layout";

export default function PostsList() {
    const [posts, setPosts] = useState([]);
    const [newPostTitle, setNewPostTitle] = useState("");
    const [apiUrl, setApiUrl] = useState("");

    useEffect(() => {
        const hostUri = Constants.expoConfig.hostUri;
        const ipAddress = hostUri ? hostUri.split(":")[0] : null;

        // hardcode the port number form API
        const apiPort = "8080";

        const tempURL = ipAddress ? `http://${ipAddress}:${apiPort}` : null;
        setApiUrl(tempURL);

        fetch(`${tempURL}/api/blog/posts`)
            .then((response) => response.json())
            .then((data) => setPosts(data));
    }, []);

    const handleCreatePost = () => {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title: newPostTitle, content: "" }),
        };

        fetch(`${apiUrl}/api/blog/posts`, requestOptions)
            .then((response) => response.json())
            .then((data) => {
                console.log("Post created:", data);
                fetch(`${apiUrl}/api/blog/posts`)
                    .then((response) => response.json())
                    .then((updatedPosts) => setPosts(updatedPosts))
                    .then(setNewPostTitle(""));
            })
            .catch((error) => {
                console.error("Error creating post:", error);
                alert("Failed to create post");
            });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Blog Stop</Text>
            <View>
                <TextInput
                    placeholder="Blog Title"
                    value={newPostTitle}
                    onChangeText={setNewPostTitle}
                    style={styles.input}
                />
                <Button
                    title="Create Post"
                    onPress={handleCreatePost}
                    style={styles.button}
                />
            </View>
            <FlatList
                data={posts}
                style={{ paddingTop: 15 }}
                renderItem={({ item }) => (
                    <View key={item.id} style={styles.card}>
                        <Link href={`/posts/${item.id}`}>
                            <Text style={styles.header}>{item.title}</Text>
                        </Link>
                    </View>
                )}
            />
        </View>
    );
}
