import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useLocalSearchParams, Link, router } from "expo-router";
import Constants from "expo-constants";
import Markdown from "react-native-markdown-display";
import { styles } from "../../_layout";
import { Ionicons } from "@expo/vector-icons";

export default function PostDetails() {
    const { id } = useLocalSearchParams();
    const [apiUrl, setApiUrl] = useState();
    const [post, setPost] = useState(null);

    useEffect(() => {
        const hostUri = Constants.expoConfig.hostUri;
        const ipAddress = hostUri ? hostUri.split(":")[0] : null;
        const apiPort = "8080";
        const tempURL = ipAddress ? `http://${ipAddress}:${apiPort}` : null;
        setApiUrl(tempURL);
        console.log(id)
        fetch(`${tempURL}/api/blog/posts/${id}`)
            .then((response) => response.json())
            .then((data) => setPost(data));
    }, [id]);

    const handleDelete = () => {
        fetch(`${apiUrl}/api/blog/posts/${id}`, {
            method: "DELETE",
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                router.replace("/");
            })
            .catch((error) => {
                console.error("Error deleting post:", error);
                alert("Failed to delete post");
            });
    };

    return (
        <View style={styles.container}>
            {post && (
                <>
                    <View style={styles.row}>
                        <Text style={styles.header}>{post.title}</Text>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() =>
                                router.replace(`/posts/${post.id}/edit`)
                            }
                        >
                            <Ionicons
                                name="create-outline"
                                size={20}
                                color="white"
                                style={styles.icon}
                            />
                        </TouchableOpacity>
                    </View>
                    <ScrollView style={styles.card}>
                        <Markdown>{post.content}</Markdown>
                    </ScrollView>
                    <View style={styles.row}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => router.replace(`/`)}
                        >
                            <Ionicons
                                name="arrow-back-outline"
                                size={20}
                                color="white"
                                style={styles.icon}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.button, styles.deleteButton]}
                            onPress={() => handleDelete(post.id)}
                        >
                            <Ionicons
                                name="trash-outline"
                                size={20}
                                color="#fff"
                                style={styles.icon}
                            />
                        </TouchableOpacity>
                    </View>
                </>
            )}
        </View>
    );
}
