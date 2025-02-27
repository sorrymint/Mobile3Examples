import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import Constants from "expo-constants";
import { styles } from "../../../_layout";
import { Ionicons } from "@expo/vector-icons";

export default function PostDetails() {
    const { id } = useLocalSearchParams();
    const [post, setPost] = useState(null);
    const [apiUrl, setApiUrl] = useState("");

    const [editedContent, setEditedContent] = useState("");

    useEffect(() => {
        const hostUri = Constants.expoConfig.hostUri;
        const ipAddress = hostUri ? hostUri.split(":")[0] : null;
        const apiPort = "8080";
        const tempURL = ipAddress ? `http://${ipAddress}:${apiPort}` : null;
        setApiUrl(tempURL);

        fetch(`${tempURL}/api/blog/posts/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setPost(data);
                setEditedContent(data.content);
            });
    }, [id]);

    const handleSave = () => {
        const updatedPost = {
            id,
            title: post.title,
            content: editedContent,
        };

        fetch(`${apiUrl}/api/blog/posts/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedPost),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Post updated:", data);
                alert("Data Saved");
            })
            .catch((error) => {
                console.error("Error updating post:", error);
            });
    };

    return (
        <View>
            {post && (
                <>
                    <View style={[styles.row, { padding: 5 }]}>
                        <Text style={styles.header}>Title: </Text>
                        <Text style={styles.header}>{post.title}</Text>
                    </View>
                    <View style={{ padding: 5 }}>
                        <TextInput
                            value={editedContent}
                            onChangeText={setEditedContent}
                            multiline
                            style={{
                                height: 200,
                                padding: 5,
                                borderColor: "gray",
                                borderWidth: 1,
                                marginBottom: 10,
                            }}
                        />
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => router.replace(`/posts/${post.id}`)}
                        >
                            <Ionicons
                                name="arrow-back-outline"
                                size={20}
                                color="white"
                                style={styles.icon}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.button]}
                            onPress={handleSave}
                        >
                            <Ionicons
                                name="save-outline"
                                size={20}
                                color="white"
                                style={styles.icon}
                            />
                        </TouchableOpacity>
                    </View>
                </>
            )}
        </View>
    );
}
