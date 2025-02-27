import React, { useEffect, useState } from "react";
import {
    View,
    TextInput,
    Button,
    Text,
    StyleSheet,
    FlatList,
} from "react-native";
import NotesDB from "./components/NotesDB.js";

export default function App() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [notes, setNotes] = useState([]);
    const notesDB = new NotesDB();

    useEffect(async () => {
        await notesDB.initDB();
        fetchAndSetNotes();
    }, []);

    async function fetchAndSetNotes() {
        try {
            const fetchedNotes = await notesDB.fetchNotes();
            setNotes(fetchedNotes);
        } catch (error) {
            console.error("Failed to fetch notes:", error);
        }
    }

    const handleSaveNote = async () => {
        if (!title.trim() || !content.trim()) return;

        try {
            await notesDB.insertNote(title, content);
            setTitle("");
            setContent("");
            fetchAndSetNotes();
        } catch (error) {
            console.error("Failed to save note:", error);
            alert("Failed to save note.");
        }
    };

    const handleDeleteAllNotes = async () => {
        try {
            await notesDB.deleteAllNotes();
            setNotes([]);
        } catch (error) {
            console.error("Failed to delete notes:", error);
            alert("Failed to delete notes.");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Notes</Text>
            <TextInput
                style={styles.input}
                onChangeText={setTitle}
                value={title}
                placeholder="Title"
            />
            <TextInput
                style={styles.input}
                onChangeText={setContent}
                value={content}
                placeholder="Content"
                multiline
            />
            <Button title="Save Note" onPress={handleSaveNote} />
            <Button title="Delete All Notes" onPress={handleDeleteAllNotes} />

            <FlatList
                data={notes}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.noteItem}>
                        <Text style={styles.noteTitle}>{item.title}</Text>
                        <Text style={styles.noteContent}>{item.content}</Text>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 80,
    },
    input: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
        margin: 5,
    },
    button: {
        padding: 10,
    },
    noteItem: {
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 5,
        marginVertical: 10,
        padding: 10,
    },
    noteTitle: {
        fontWeight: "bold",
        fontSize: 18,
    },
    noteContent: {
        marginTop: 5,
    },
});
