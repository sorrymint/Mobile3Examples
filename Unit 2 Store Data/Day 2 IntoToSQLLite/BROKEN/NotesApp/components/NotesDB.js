import * as SQLite from "expo-sqlite";

class NotesDB {
    constructor() {
        this.db = null;
    }

    async initDB() {
        try {
            console.log('Initializing database...');
            this.db = await SQLite.openDatabaseAsync("simpleNotes.db");
            console.log('Database opened successfully');

            await this.createTable();
            console.log('Table created successfully');
        } catch (error) {
            console.error("Error creating DB or Table", error);
            throw new Error("Failed to initialize database");
        }
    }

    async createTable() {
        try {
            await this.db.runAsync(`
                CREATE TABLE IF NOT EXISTS notes (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    title TEXT NOT NULL,
                    content TEXT NOT NULL
                )
            `);
        } catch (error) {
            console.error("Error creating table:", error);
            throw error;
        }
    }

    async insertNote(title, content) {
        try {
            if (!this.db) {
                throw new Error("Database not initialized");
            }
            const result = await this.db.runAsync(
                "INSERT INTO notes (title, content) VALUES (?, ?)",
                [title, content]
            );
            return result;
        } catch (error) {
            console.error("Error inserting note:", error);
            throw error;
        }
    }

    async fetchNotes() {
        try {
            if (!this.db) {
                throw new Error("Database not initialized");
            }
            const result = await this.db.getAllAsync("SELECT * FROM notes");
            return result;
        } catch (error) {
            console.error("Error fetching notes:", error);
            throw error;
        }
    }

    async deleteAllNotes() {
        try {
            if (!this.db) {
                throw new Error("Database not initialized");
            }
            await this.db.runAsync("DELETE FROM notes");
        } catch (error) {
            console.error("Error deleting all notes:", error);
            throw error;
        }
    }

    async isDBReady() {
        return !!this.db;
    }
}

export default NotesDB;
