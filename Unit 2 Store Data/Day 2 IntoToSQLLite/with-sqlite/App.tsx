import {
    SQLiteProvider,
} from 'expo-sqlite';
import Main from './component/Main';
import migrateDbIfNeeded from "./component/DBMethods";

const App = () => {
    return (
        <SQLiteProvider databaseName="db.db" onInit={migrateDbIfNeeded}>
            <Main/>
        </SQLiteProvider>
    );
}

export default App;
